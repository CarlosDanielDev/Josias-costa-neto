import { createGlobalStyle } from "styled-components";

import { breakpoints } from "./breakpoints";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'FoundersGrotesk';
    src: url('/fonts/FoundersGrotesk-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

 @font-face {
    font-family: 'FoundersGrotesk-Medium';
    src: url('/fonts/FoundersGrotesk-Medium.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'FoundersGrotesk-Regular';
    src: url('/fonts/FoundersGrotesk-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

   * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'FoundersGrotesk-Regular';
  }


  html, body {
    min-height: 100vh;
    height: auto;
    scroll-padding-top: 120px; 
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;

    @media ${breakpoints.desktop} {
      overflow: auto;
    }
  }

  body {
    overflow-x: hidden;
  }

  select, input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    background: transparent;
    cursor: pointer;
  }

  i {
    display:inline-block;
    font-size: 1.6rem;
    line-height: 1;

    width: 1em;
    height: 1em;
  }


body {

  &::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
  }

  &::-webkit-scrollbar-button {
    display:none;
  }

}

`;
