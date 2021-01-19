import styled from 'styled-components';

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 auto 20px auto;
  padding: 20px;
  width: 200px;
  min-height: 30px;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  
  @media (max-width: 1200px) {
    padding: 10px;
    white-space: nowrap;
  }
`