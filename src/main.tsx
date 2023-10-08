import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from './pages/main'
import { ThemeProvider } from 'styled-components'
import { light } from './styles/themes/light'
import { GlobalStyles } from './styles/global'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={light}>
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
)
