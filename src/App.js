import React from 'react'
import Router from '@reach/router'

import GlobalStyles from './styles/GlobalStyles'

import Logo from './Components/Logo.jsx'
import PhotoCardWithQuery from './container/PhotoCardWithQuery.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Home />
              
      }
    </>
  )
}

export default App
