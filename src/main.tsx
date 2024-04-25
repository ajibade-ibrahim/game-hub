import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import theme from './Theme'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <ColorModeScript initialColorMode="dark" /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
