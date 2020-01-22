import React from 'react'
import styled from 'styled-components'

import Category from './Category.jsx'

const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
`

const Item = styled.li`
  padding: 0 8px;
`

const ListOfCategories = () => (
  <List>
  {
    [1, 2,3,4].map(category=>{
      console.log(category)
      return (
        <Item>
          {<Category key={category} />}
        </Item>
      )
    })
  }
  </List>
)


export default ListOfCategories