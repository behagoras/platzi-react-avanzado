import React from 'react'
import styled from 'styled-components'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const Button = styled.button`
  display:flex;
  align-items:center;
  padding-top: 8px;
  & svg {
    margin-right:4px;
  }
`

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

export default FavButton
