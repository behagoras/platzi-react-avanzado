import React from 'react'
import PhotoCard from './PhotoCard.jsx'

export const ListOfPhotoCardsComponent = (props={}) => {
  const { data = {} } = props
  const { photos = [] } = data
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
