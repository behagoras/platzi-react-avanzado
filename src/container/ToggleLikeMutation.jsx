import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

const ToggleLikeMutation = (props) => {
  const {children} = props
  return <Mutation mutation={LIKE_PHOTO}>
    {children}
  </Mutation>
}

export default ToggleLikeMutation
