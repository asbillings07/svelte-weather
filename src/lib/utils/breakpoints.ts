import { css } from "styled-svelte";


// allows us to easily do media queries

type Size = {
  [key: string]: number;
};

type CSSFunction = (...args: any[]) => string;

type MediaQueries = {
  [key: string]: CSSFunction;
};

const size: Size = {
  xsmall: 420,
  small: 575,
  medSmall: 725,
  medLarge: 900,
  med: 960,
  large: 1175,
};

export const above: MediaQueries = Object.keys(size).reduce((acc: MediaQueries, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const below: MediaQueries = Object.keys(size).reduce((acc: MediaQueries, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const belowHeight: MediaQueries = Object.keys(size).reduce((acc: MediaQueries, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media (max-height: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const aboveHeight: MediaQueries = Object.keys(size).reduce((acc: MediaQueries, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media (min-height: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});


/*
How to use:

in your css:

${above.med `
  color: blue;
`}


*/
