import React from 'react'
import styled from 'styled-components'
import PhotoCard from './PhotoCard.jsx'

const List = styled.ul``
const Item = styled.li``

const ListOfPhotoCards = () => {
  return <List>
    {
      [1, 2, 3, 4, 5, 6].map((id) => {
        return (
          <Item>
            <PhotoCard />
          </Item>
        )
      })
    }
  </List>
}

export default ListOfPhotoCards
