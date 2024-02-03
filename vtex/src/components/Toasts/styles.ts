import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 2147483648;
  bottom: 10px;
  left: 10px;
`;

interface IToastStyle {
  backgroundColor: string;
}

export const Toast = styled.div<IToastStyle>`
  animation: toast-right 1s;
  margin-bottom: 10px;
  bottom: 10px;
  left: 10px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  color: #f1f1f1;
  min-width: 300px;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px;

  span {
    margin: 0 10px;
  }
`;
