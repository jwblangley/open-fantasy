import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from './theme'
import { AuthProvider } from './adapters/FirebaseAuthAdapater'
import Main from './Main'

const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
