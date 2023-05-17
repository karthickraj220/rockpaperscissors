import {
  Headercontainer,
  Headerheading,
  Scorecard,
  Scoretitle,
  Scorenumber,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <Headercontainer>
      <Headerheading>ROCK PAPER SCISSORS</Headerheading>
      <Scorecard>
        <Scoretitle>Score</Scoretitle>
        <Scorenumber>{score}</Scorenumber>
      </Scorecard>
    </Headercontainer>
  )
}

export default Header
