import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import {
  GameBg,
  HeaderBg,
  Heading,
  ScoreContainer,
  Score,
  GameItemList,
  Item,
  ChoiceButton,
  ChoiceImage,
  GamePopup,
  TriggerButton,
  CloseButton,
  RulesImage,
  PlayerName,
} from './styledComponent'

class Game extends Component {
  state = {
    score: 0,
    showResult: false,
    myChoiceImg: '',
    opponentChoiceImg: '',
    result: '',
  }

  onClickMyChoice = id => {
    const {score} = this.state
    const {choicesList} = this.props
    const myChoice = id
    const opponentChoice = choicesList[Math.floor(Math.random() * 3)].id

    const myChoiceImg = choicesList.filter(each => each.id === id)[0].imageUrl
    const opponentChoiceImg = choicesList.filter(
      each => each.id === opponentChoice,
    )[0].imageUrl

    const winState = {
      score: score + 1,
      showResult: true,
      result: 'YOU WON',
      myChoiceImg,
      opponentChoiceImg,
    }

    const loseState = {
      score: score - 1,
      showResult: true,
      result: 'YOU LOSE',
      myChoiceImg,
      opponentChoiceImg,
    }

    if (myChoice === 'ROCK' && opponentChoice === 'SCISSORS') {
      this.setState({...winState})
    } else if (myChoice === 'ROCK' && opponentChoice === 'PAPER') {
      this.setState({...loseState})
    } else if (myChoice === 'SCISSORS' && opponentChoice === 'PAPER') {
      this.setState({...winState})
    } else if (myChoice === 'SCISSORS' && opponentChoice === 'ROCK') {
      this.setState({...loseState})
    } else if (myChoice === 'PAPER' && opponentChoice === 'ROCK') {
      this.setState({...winState})
    } else if (myChoice === 'PAPER' && opponentChoice === 'SCISSORS') {
      this.setState({...loseState})
    } else if (myChoice === opponentChoice) {
      this.setState({
        myChoiceImg,
        opponentChoiceImg,
        showResult: true,
        result: 'IT IS DRAW',
      })
    }
  }

  onRestartGame = () => {
    this.setState({
      showResult: false,
      myChoiceImg: '',
      opponentChoiceImg: '',
      result: '',
    })
  }

  renderChoiceItem = itemDetails => {
    const {id, imageUrl} = itemDetails
    const testId = `${id.toLowerCase()}Button`

    const selectChoice = () => {
      this.onClickMyChoice(id)
    }

    return (
      <Item key={id}>
        <ChoiceButton type="button" onClick={selectChoice} data-testid={testId}>
          <ChoiceImage src={imageUrl} alt={id} />
        </ChoiceButton>
      </Item>
    )
  }

  render() {
    const {
      score,
      showResult,
      result,
      myChoiceImg,
      opponentChoiceImg,
    } = this.state
    const {choicesList} = this.props
    return (
      <GameBg>
        <HeaderBg>
          <div>
            <Heading>
              Rock <br />
              Paper <br />
              Scissors
            </Heading>
          </div>
          <ScoreContainer>
            <Score fontWeight="450" fontSize="18px">
              Score
            </Score>
            <Score fontWeight="bold" fontSize="28px">
              {score}
            </Score>
          </ScoreContainer>
        </HeaderBg>
        {/* show results ------------------------------------------------------- */}
        {showResult ? (
          <GameItemList>
            <Item>
              <PlayerName fontSize="22px" fontWeight="555">
                YOU
              </PlayerName>
              <ChoiceImage src={myChoiceImg} alt="your choice" />
            </Item>
            <Item>
              <PlayerName fontSize="22px" fontWeight="555">
                OPPONENT
              </PlayerName>
              <ChoiceImage src={opponentChoiceImg} alt="opponent choice" />
            </Item>
            <Item>
              <PlayerName fontSize="28px" fontWeight="bold">
                {result}
              </PlayerName>
              <TriggerButton
                type="button"
                align="center"
                onClick={this.onRestartGame}
              >
                Play Again
              </TriggerButton>
            </Item>
          </GameItemList>
        ) : (
          <GameItemList>
            {choicesList.map(each => this.renderChoiceItem(each))}
          </GameItemList>
        )}
        <GamePopup
          modal
          trigger={
            <TriggerButton type="button" align="flex-end">
              RULES
            </TriggerButton>
          }
        >
          {close => (
            <>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </>
          )}
        </GamePopup>
      </GameBg>
    )
  }
}

export default Game
