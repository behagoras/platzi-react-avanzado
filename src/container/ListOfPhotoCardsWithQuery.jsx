import React from 'react'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import ListOfPhotoCards from '../Components/PhotoCard/ListOfPhotoCards.jsx'

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  const photo = data ? data.photo : {}
  console.log(photo)
  return <ListOfPhotoCards data={data} />
}

const ListOfPhotoCardsWithQuery = ({ categoryId }) => {
  return (
    <Query query={GET_PHOTOS} variables={{ categoryId }}>
      {renderProp}
    </Query>
  )
}

export default ListOfPhotoCardsWithQuery
