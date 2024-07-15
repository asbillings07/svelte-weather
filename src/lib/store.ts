// store.js
import { writable } from 'svelte/store';
import { buildWeatherApi, buildLocationApi } from './config'
import { loadState, saveState } from './localStorage'
import { mapLocationData, parseWeatherData } from "./utils";
import { api } from './request'

const initialState = {
    users: [],
    user: null,
    weather: null as Weather,
    location: null,
    geoPosition: {} as GeolocationPosition,
    posts: [],
    post: null,
    success: false,
    error: false,
    errorMessage: '',
    loading: true
}

type Weather = {
    city: { country: any; name: any; timezone: any; }; forecast: any;
} | null

type location = {
    latitude: number,
    longitude: number
}


// Create writable store
export const state = writable(initialState);

export const actions = {
    fetchUserLocation: async (location: location) => {
        actions.updateloading(true)
        try {
            if (location) {
                const { latitude, longitude } = location;
                const res = await api(buildLocationApi({ latitude, longitude }));
                const userLocation = mapLocationData(res.data.postalCodes)
                saveState('userLocation', userLocation)
                state.update(currentState => ({...currentState, location: userLocation }))
            }
      
          } catch (err: any) {
            actions.setError(err.message);
          }
    },
    fetchWeather: async (location = 'Atlanta') => {
        actions.clearError();
        actions.updateloading(true);
        const weather = loadState('weatherData')
        if (weather && weather.city.name === location) {
            state.update(currentState => ({ ...currentState, weather }))
        } else {
          try {
            const res = await api(buildWeatherApi(location));
            const weather = parseWeatherData(res.data);
            saveState("weatherData", weather);
            state.update(currentState => ({ ...currentState, weather }))
          } catch (err: any) {
            actions.setError(err.message);
          }
        }

    },
    getGeoLocation: () => {
        if (!navigator.geolocation) {
            actions.setError("Geolocation is not supported")
          }
      
          actions.updateloading(true)
          const positionSuccess = (position: GeolocationPosition) => {
            state.update(currentState => ({ ...currentState, geoPosition: {
                coords: position.coords,
                timestamp: position.timestamp
              } }))
          };
          const positionError = (error: any) =>
            actions.setError(error.message);
          const options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000,
          };
      
          const geoWatch = navigator.geolocation.watchPosition(
            positionSuccess,
            positionError,
            options
          );
          
    },
    setError: (errorMessage: string) => {
        state.update(currentState => ({
            ...currentState,
            error: true,
            errorMessage
        }));
    },
    clearError: () => {
        state.update(currentState => ({
            ...currentState,
            error: false,
            errorMessage: ''
        }));
    },
    clearSuccess: () => {
        state.update(currentState => ({
            ...currentState,
            success: false
        }));
    },
    updateloading: (loading: boolean) => {
        state.update(currentState => ({
            ...currentState,
            loading
        }));
    }
};