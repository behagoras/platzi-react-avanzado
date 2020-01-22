import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Category from './Category.jsx'

import { fadeIn, positionDown } from '../../styles/animation.js'

const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &.fixed {
    ${positionDown()};
    position: fixed;
    background:#fff;
    border-radius:60px;
    box-shadow:0 0 20px rgba(0,0,0,0.3);
    left:0;
    right:0;
    top:-20px;
    margin:0 auto;
    max-width:400px;
    padding:5px;
    transform:scale(0.6);
    z-index:1;
  }
`

const Item = styled.li`
  padding: 0 8px;
`

const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => {
          return (
            <Item key={category.id}>
              {<Category {...category} />}
            </Item>
          )
        })
      }
    </List>
  )
  useEffect(() => {
    window.fetch('https://petgram-server.behagoras.now.sh/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
  }, [])
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export default ListOfCategories
