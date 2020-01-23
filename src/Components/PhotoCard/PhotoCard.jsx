import React from 'react'
import styled from 'styled-components'

import { fadeIn } from '../../styles/animation'
import useLocalStorage from '../../hooks/useLocalStorage'
import useNearScreen from '../../hooks/useNearScreen'

import ToggleLikeMutation from '../../container/ToggleLikeMutation.jsx'

import FavButton from '../FavButton.jsx'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const Article = styled.article`
  min-height:200px;
`

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

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`

  const [show, $element] = useNearScreen()
  const [liked, setLiked] = useLocalStorage(key, false)

  return (
    <Article ref={$element}>
      {
        show && <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <img src={src} />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: {
                    input: { id }
                  } })

                  setLiked(!liked)
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>

        </>
      }
    </Article>
  )
}

export default PhotoCard
