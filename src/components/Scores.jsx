import React from 'react'
import styled from 'styled-components';

//Database
import firebase from '../firebase.js';

const DisplayScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  align-items: left;
  justify-content: space-around;
  margin: 20px;
`
const ScoreHeader = styled.h1`
    font-size: 28px;
    display: flex;
    justify-content: center;
    position: relative;
    margin: 20px;
`
const DisplayScore = styled.div`
  position: relative;
  width: 100%;
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  color: white;
  margin: 20px;
  padding: 20px;
`

const DisplayScoreHeader = styled.div`
  font-size: 22px;
  margin: 10px;
`

const DisplayScoreParagraph = styled.div`
  font-size: 18px;
  margin: 10px;
`
const MyWrapper = styled.div `
    max-width: 200px;
`
class Scores extends React.Component {
    constructor(props) {

        super(props);
    
        this.state = {
          items: []
        };

      }

    componentDidMount() {
        const itemsRef = firebase.database().ref('items');
    
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
    
          for (let item in items) {
            newState.push({
              id: item,
              score: items[item].score,
              date: items[item].date
            });
          }
    
          this.setState({
            items: newState
          });
          
        });
      }
    
      removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
      }

    render() {
    return (
    <>
        <ScoreHeader>Scores</ScoreHeader>
        <DisplayScoreContainer>
        <MyWrapper>
            <ul>
                {this.state.items.map((item) => {
                return (
                    <DisplayScore key={item.id}>
                    <DisplayScoreHeader>Score: {item.score}</DisplayScoreHeader>
                    <DisplayScoreParagraph>Date: {item.date}</DisplayScoreParagraph>
                    <button onClick={() => this.removeItem(item.id)}>Remove Entry</button>
                    </DisplayScore>
                )
                })}
            </ul>
        </MyWrapper>
      </DisplayScoreContainer>
    </>
    )};
}

export default Scores