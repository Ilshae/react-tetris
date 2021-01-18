import styled from 'styled-components';

import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;
export const Warning = styled.div`
  display: none;
  @media only screen {
    display: block;
    color: white;
    padding: 20px;
    font-size: 18px;
  }
`

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  height: 100%;
  @media(max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  aside {
    width: 100%;
    max-width: 300px;
    display: block;
    padding: 0 20px;

    @media(max-width: 1200px) {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      div {
        display: flex;
        max-width: 300px;
        text-align: center;
        justify-content: space-between;
        div {
          max-width: 90px;
        }
      }    
    }
    @media(max-width: 400px) {
      padding: 0;
      div {
        margin-bottom: 10px;
        div {
          font-size: 12px;
          padding: 5px;
        }      
      }
      button {
        padding: 5px;
      }
    }
  }
`;
