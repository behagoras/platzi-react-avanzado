import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
  from {
    filter:blur(5px);
    opacity:0;
  }
  to{
    filter:blur(0);
    opacity:1;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => {
  return css`
    animation:${time} ${fadeInKeyframes} ${type};
  `
}

const positionDownKeyFrames = keyframes`
    0%{
      margin-top:-100px;
    }

    100%{
      margin-top:0;

    }
`
export const positionDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${positionDownKeyFrames} ${type}`
