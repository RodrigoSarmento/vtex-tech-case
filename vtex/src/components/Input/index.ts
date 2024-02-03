import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.colors.white.white4};
  color: ${(props) => props.theme.colors.gray.gray12};
  border: 2px solid transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: ${(props) => props.theme.fontFamily};
  box-sizing: border-box;
  padding: 0 20px;

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.main};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Input;
