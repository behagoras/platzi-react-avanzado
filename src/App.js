import React from 'react'

import GlobalStyles from './styles/GlobalStyles'
import ListOfCategories from './Components/Categories/ListOfCategories.jsx'
import ListOfPhotoCards from './container/ListOfPhotoCards.jsx'
import Logo from './Components/Logo.jsx'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={2} />
    </>
  )
}

export default App
