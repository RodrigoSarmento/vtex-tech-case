import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  min-height: 40px;
  background: ${(props) => props.theme.colors.white.white3};
  color: ${(props) => props.theme.colors.gray.gray12};
  border: 2px solid transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: ${(props) => props.theme.fontFamily};
  box-sizing: border-box;
  padding: 10px 20px;

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.main};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default TextArea;
