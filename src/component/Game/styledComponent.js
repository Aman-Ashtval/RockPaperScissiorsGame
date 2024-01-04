import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const GameBg = styled.div`
  min-height: 100vh;
  padding: 25px 50px;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 25px 16px;
  }
`

export const HeaderBg = styled.div`
  padding: 18px;
  border: 3px solid #ffffff;
  border-radius: 10px;
  margin: 16px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-size: 22px;
  margin: 5px 0px;
  font-family: 'Bree Serif';
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const ScoreContainer = styled.div`
  width: 200px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100px;
  }
`

export const Score = styled.p`
  color: #223a5f;
  font-size: ${props => props.fontSize};
  font-family: 'Roboto';
  font-weight: ${props => props.fontWeight};
  margin: 5px 0px;
`

export const GameItemList = styled.ul`
  list-style-type: none;
  padding: 22px;
  margin: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 0px;
  }
`

export const Item = styled.li`
  width: 35%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 50%;
    padding: 16px;
  }
`

export const ChoiceButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0px;
  cursor: pointer;
`

export const ChoiceImage = styled.img`
  width: 200px;
  height: 200px;
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`

export const GamePopup = styled(Popup)`
  &-content {
    width: 60%;
    height: 90vh;
    padding: 25px 100px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border: none;
  }
  @media (max-width: 768px) {
    &-content {
      width: 100%;
      height: 100vh;
      padding: 25px 16px;
    }
  }
`

export const TriggerButton = styled.button`
  color: #223a5f;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Bree Serif';
  outline: none;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: ${props => props.align};
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`

export const CloseButton = styled.button`
  color: #223a5f;
  font-size: 20px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  outline: none;
  align-self: flex-end;
  margin-bottom: 22px;
`

export const RulesImage = styled.img`
  width: 100%;
  height: 70vh;
`

export const PlayerName = styled.p`
  margin: 0px 0px 5px 0px;
  color: #ffffff;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  @media (max-width: 768px) {
    font-size: ${props => (props.fontSize === '22px' ? '18px' : '24px')};
  }
`
