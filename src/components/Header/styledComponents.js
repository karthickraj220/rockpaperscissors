import styled from 'styled-components'

export const Headercontainer = styled.div`
  border: solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: white;
  border-radius: 10px;
  width: 80%;
  padding-left: 20px;
  padding-right: 20px;
`
export const Headerheading = styled.h1`
  color: white;
  font-family: 'Bree serif';
  width: 120px;
  font-size: 25px;
`
export const Scorecard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  width: 150px;
  height: 100px;
  padding: 15px;
`
export const Scoretitle = styled.p`
  color: #223a5f;
  font-family: 'Bree serif';
  font-size: 20px;
  margin: 0px;
`
export const Scorenumber = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  font-size: 45px;
  margin: 0px;
`
