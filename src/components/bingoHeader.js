import React from "react";
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px){
    flex-direction: row;
  }
`
const MainHeader = styled.div`
  font-size: 28px;
  padding: 20px;
`
function bingoHeader () {
    return (
      <MainContainer>
          <MainHeader>
            Bingo
        </MainHeader>
      </MainContainer>

    )
}

export default bingoHeader;