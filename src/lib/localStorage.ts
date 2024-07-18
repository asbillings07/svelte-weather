export const loadState = (key: string) => {
  try {
    const serializedState = window.localStorage.getItem(key)
    if (serializedState === null) {
      return null
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return err
  }
}

export const saveState = (key: string, data: object) => {
  try {
    const serializedState = JSON.stringify(data)
    window.localStorage.setItem(key, serializedState)
  } catch (err) {
    return err
  }
}

export const removeState = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch (err) {
    return err
  }
}
