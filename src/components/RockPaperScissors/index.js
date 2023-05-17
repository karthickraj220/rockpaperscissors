import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Header from '../Header'

import {
  Background,
  Buttoncontainer,
  Rulesbutton,
  Closebutton,
  Popupimage,
  Buttonstyle,
  Buttonimage,
  Resultcontainer,
  Container,
  Title,
  Youimage,
  Result,
  Resetbutton,
  Resulttext,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    isgameview: true,
    clickedbutton: '',
    randombuttonimage: '',
    result: '',
  }

  showgameview = event => {
    const value = Math.random() * 3
    const randomvalue = Math.floor(value)
    const random = choicesList[randomvalue]
    this.setState(prevState => ({
      isgameview: !prevState.isgameview,
    }))
    this.setState({clickedbutton: event.target.alt})
    this.setState({randombuttonimage: random.imageUrl})
    if (event.target.alt === 'ROCK') {
      if (random.id === 'ROCK') {
        this.setState({result: 'IT IS DRAW'})
      } else if (random.id === 'SCISSORS') {
        this.setState(prevState => ({score: prevState.score + 1}))
        this.setState({result: 'YOU WON'})
      } else {
        this.setState(prevState => ({score: prevState.score - 1}))
        this.setState({result: 'YOU LOSE'})
      }
    } else if (event.target.alt === 'PAPER') {
      if (random.id === 'PAPER') {
        this.setState({result: 'IT IS DRAW'})
      } else if (random.id === 'ROCK') {
        this.setState(prevState => ({score: prevState.score + 1}))
        this.setState({result: 'YOU WON'})
      } else {
        this.setState(prevState => ({score: prevState.score - 1}))
        this.setState({result: 'YOU LOSE'})
      }
    } else if (event.target.alt === 'SCISSORS') {
      if (random.id === 'SCISSORS') {
        this.setState({result: 'IT IS DRAW'})
      } else if (random.id === 'PAPER') {
        this.setState(prevState => ({score: prevState.score + 1}))
        this.setState({result: 'YOU WON'})
      } else {
        this.setState(prevState => ({score: prevState.score - 1}))
        this.setState({result: 'YOU LOSE'})
      }
    }
  }

  resetgame = () => {
    this.setState(prevState => ({
      isgameview: !prevState.isgameview,
    }))
    this.setState({clickedbutton: ''})
    this.setState({randombuttonimage: ''})
    this.setState({result: ''})
  }

  displayinitial = () => {
    const {score} = this.state

    return (
      <Background>
        <Header score={score} />
        <Buttoncontainer>
          <Buttonstyle
            type="button"
            data-testid="rockButton"
            onClick={this.showgameview}
          >
            <Buttonimage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
            />
          </Buttonstyle>
          <Buttonstyle
            data-testid="scissorsButton"
            type="button"
            onClick={this.showgameview}
          >
            <Buttonimage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
            />
          </Buttonstyle>
          <Buttonstyle
            data-testid="paperButton"
            type="button"
            onClick={this.showgameview}
          >
            <Buttonimage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
            />
          </Buttonstyle>
        </Buttoncontainer>
        <Popup modal trigger={<Rulesbutton>Rules</Rulesbutton>}>
          {close => (
            <>
              <Closebutton type="button" onClick={() => close()}>
                <RiCloseLine />
              </Closebutton>
              <Popupimage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </>
          )}
        </Popup>
      </Background>
    )
  }

  displaygameview = () => {
    const {score, clickedbutton, randombuttonimage, result} = this.state
    const button = choicesList.find(each => each.id === clickedbutton)
    return (
      <Background>
        <Header score={score} />
        <Resultcontainer>
          <Container>
            <Title>YOU</Title>
            <Youimage src={button.imageUrl} alt="your choice" />
          </Container>
          <Container>
            <Title>OPPONENT</Title>
            <Youimage src={randombuttonimage} alt="opponent choice" />
          </Container>
        </Resultcontainer>
        <Result>
          <Resulttext>{result}</Resulttext>
          <Resetbutton type="button" onClick={this.resetgame}>
            PLAY AGAIN
          </Resetbutton>
        </Result>
        <Popup modal trigger={<Rulesbutton>Rules</Rulesbutton>}>
          {close => (
            <>
              <Closebutton type="button" onClick={() => close()}>
                <RiCloseLine />
              </Closebutton>
              <Popupimage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </>
          )}
        </Popup>
      </Background>
    )
  }

  renderdisplay = () => {
    const {isgameview} = this.state

    switch (isgameview) {
      case true:
        return this.displayinitial()
      case false:
        return this.displaygameview()
      default:
        return null
    }
  }

  render() {
    return this.renderdisplay()
  }
}

export default RockPaperScissors
