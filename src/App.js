import React from 'react'

import GlobalStyles from './styles/GlobalStyles'
import ListOfCategories from './Components/Categories/ListOfCategories.jsx'
import ListOfPhotoCards from './container/ListOfPhotoCards.jsx'
import Logo from './Components/Logo.jsx'
import PhotoCardWithQuery from './container/PhotoCardWithQuery.jsx'

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
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </>
      }
    </>
  )
}

export default App
