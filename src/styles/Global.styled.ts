import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100%;
    font-size: 62.5%;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
    background: #1d3c45;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`
