import styled from 'styled-components'

export const GameItemContainer = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;

  width: 230px;
  margin: 10px;
`
export const GameImg = styled.img`
  height: 320px;
  width: 230px;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`
export const Tittle = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  color: ${props => (props.Dark ? '#ffffff' : '#000000')};
`
export const Paragraph = styled.p`
  color: #cccccc;
  font-size: 15px;
  font-family: Roboto;
  font-weight: solid;
`
