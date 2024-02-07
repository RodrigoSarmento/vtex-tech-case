import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  background: url('spinner.svg');
  background-repeat: repeat;
  background-size: contain;
  background-position: center;
  position: relative;
  align-self: center;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
`;
