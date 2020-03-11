import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { Provider } from 'react-redux'

import store from '../../store/index'
import globalStyles from '../../styles/global'
import theme from '../../styles/theme/theme'

import { Root } from './App.shards'

import Form from '../Form/Form'

function App() {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Root>
          <Form />
        </Root>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
