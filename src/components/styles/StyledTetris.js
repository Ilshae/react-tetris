import styled from 'styled-components';

import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const KeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`

export const KeyContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center!important;
  max-width: 300px!important;
  margin-bottom: 10px;
`
export const UpKey = styled.div`
  margin: 0 auto;
`

export const Key = styled.button`
  width: 100px;
  padding: 20px;
  margin: 2px;
  font-size: 40px;
  font-weight: bold;
  background-color: #333;
  border: 1px solid black;
  color: white;
  
  &:active{
    border: 1px solid white;
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    width: 80px;
    height: 80px;
    font-size: 35px;
  }
  @media (min-width: 600px) and (max-width: 800px) {
    width: 75px;
    height: 75px;
    font-size: 30px;
  }
  @media (min-width: 400px) and (max-width: 600px) {
    width: 70px;
    height: 70px;
    font-size: 25px;
  }
  @media (max-width: 400px) {
    width: 60px;
    height: 60px;
    font-size: 20px;
  }
`

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 900px;
  height: 100%;
  @media(max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 8px;
  }
  aside {
    width: 100%;
    max-width: 300px;
    display: block;
    padding: 0 20px;

    @media(max-width: 1200px) {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 10px;
      div {
        display: flex;
        max-width: 300px;
        text-align: center;
        justify-content: space-between;
      }    
    }
    @media(max-width: 400px) {
      padding: 0;
    }
  }
`;

export const DisplayContainer = styled.div`
  @media(max-width: 300px) {
    display: flex;
    flex-direction: column;
  }
`
