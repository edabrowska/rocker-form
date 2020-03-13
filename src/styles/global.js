import { css } from '@emotion/core'
import normalize from 'emotion-normalize'

import { text } from './theme/colors'

const base = css`
  * {
    border: none;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%; //== 10px (so that 1rem == 10px)
  }

  body {
    color: ${text.primary};
    font-size: 1.6rem;
    height: 100vh;
  }

  p, ul, li {
    margin: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-internal-autofill-selected,
  input:-internal-autofill-previewed,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${text.primary};
    font-size: 1.6rem !important;
    -webkit-box-shadow: 0 0 0 50px white inset;
  }
`

export default css`
  ${normalize}
  ${base}
`
