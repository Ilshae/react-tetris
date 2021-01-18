import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;

  @media (min-width: 1000px) and (max-width: 1200px) {
    max-width: 30vw;
    grid-template-rows: repeat(
      ${props => props.height},
      calc(30vw / ${props => props.width})
    );
  }
  @media (min-width: 800px) and (max-width: 1000px) {
    max-width: 35vw;
    grid-template-rows: repeat(
      ${props => props.height},
      calc(35vw / ${props => props.width})
    );
  }
  @media (min-width: 600px) and (max-width: 800px) {
    max-width: 40vw;
    grid-template-rows: repeat(
      ${props => props.height},
      calc(40vw / ${props => props.width})
    );
  }
  @media (min-width: 400px) and (max-width: 600px) {
    max-width: 60vw;
    grid-template-rows: repeat(
      ${props => props.height},
      calc(60vw / ${props => props.width})
    );
  }
  @media (max-width: 400px) {
    max-width: 70vw;
    grid-template-rows: repeat(
      ${props => props.height},
      calc(70vw / ${props => props.width})
    );
  }
`;