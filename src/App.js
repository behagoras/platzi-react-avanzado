import React from 'react'

import GlobalStyles from './styles/GlobalStyles'
import ListOfCategories from './Components/Categories/ListOfCategories.jsx'
import ListOfPhotoCards from './Components/PhotoCard/ListOfPhotoCards.jsx'
import Logo from './Components/Logo.jsx'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App
