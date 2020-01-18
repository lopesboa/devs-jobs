import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*, *::before, *::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: var(--color-grey-dark-4);
  padding: 3rem;
  background: var(--color-gray-soft-2);
  box-sizing: border-box;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialised;
}
:root{
  --primary-color: #304ffe;
  --secundary-color: #0c1442;
  --tertiary-color: #606480;
  
  --color-white: #fff;
  --color-black: #000000;

  --color-gray-dark-1: #777;
  --color-gray-dark-2: #999;
  --color-gray-dark-3: #333;
  --color-gray-dark-4: #555;

  --color-gray-light: #eee;
  --color-gray-soft-1: #f7f7f7;
  --color-gray-soft-2: #f2f2f2;

  --color-green-soft: #55c57a;
  --color-green-light: #7ed56f;
  --color-green-dark: #28b485;

  --default-font-size: 1.6rem;
}
`

export default GlobalStyle
