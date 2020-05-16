import styled from 'styled-components'

export const BasemapSliderContainer = styled.div`
  position: absolute;
  bottom: ${props => props.bottom ? `${props.bottom}px` : '14px'};
  left: ${props => props.left ? `${props.left}px` : '14px'};
  width: 75px;
  height: 75px;
  border-radius: 4px;
  border: 3px solid white;
  box-shadow: 1px 2px 5px #757575;
  transition: .2s;
  z-index: ${props => props.zIndex ? `${props.zIndex}` : `5`};
`