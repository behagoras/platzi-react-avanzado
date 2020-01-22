import React from 'react'
import styled from 'styled-components'
import { MdFavoriteBorder } from 'react-icons/md'

import { fadeIn } from '../../styles/animation'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const ImgWrapper = styled.figure`
  border-radius:10px;
  display: block;
  height:0;
  overflow:hidden;
  padding:56.25% 0 0 0;
  position:relative;
  width: 100%;
  & img {
    ${fadeIn()};
    box-shadow: 0 10px 14px rgba(0,0,0,0.2);
    height: 100%;
    width:100%;
    object-fit:cover;
    position:absolute;
    top:0;
  }
`

const Button = styled.button`
  display:flex;
  align-items:center;
  padding-top: 8px;
  & svg {
    margin-right:4px;
  }
`

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/{id}`}>
        <ImgWrapper>
          <img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' />{likes} likes
      </Button>
    </article>
  )
}

export default PhotoCard
