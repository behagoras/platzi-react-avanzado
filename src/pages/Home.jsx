import React from 'react'

import ListOfCategories from '../Components/Categories/ListOfCategories.jsx'
import ListOfPhotoCards from '../Components/PhotoCard/ListOfPhotoCards.jsx'

const Home  = () => {
  return (
  <>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={2} />
  </>
  )
}

export default Home
