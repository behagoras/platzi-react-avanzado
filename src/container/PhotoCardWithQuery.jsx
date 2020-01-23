import React from 'react'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import PhotoCard from '../Components/PhotoCard/PhotoCard.jsx'

const query = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={query} variables={{ id }}>
      {
        ({ loading, error, data }) => {
          const photo = data ? data.photo : {}
          console.log(photo)
          return <PhotoCard {...photo} />
        }
      }
    </Query>
  )
}

export default PhotoCardWithQuery
