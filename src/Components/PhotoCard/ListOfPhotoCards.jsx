import React from 'react'
import PhotoCard from './PhotoCard.jsx'

import withPhotos from '../../hoc/withPhotos' // get photos from graphql

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)

export default ListOfPhotoCards
