import React from 'react'
import renderer from 'react-test-renderer'
import serializer from 'jest-emotion'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { ThemeProvider } from 'emotion-theming'

import Form from './Form'

import initialState from '../../../__mocks__/fileMock'
import theme from '../../styles/theme/theme'

expect.addSnapshotSerializer(serializer)

describe('renders form', () => {
  it('Snapshot', () => {
    const mockStore = configureStore()

    const component = renderer.create(
      <Provider store={mockStore(initialState)}>
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      </Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
