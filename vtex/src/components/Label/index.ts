import styled from 'styled-components';

const Label = styled.label`
  color: ${(props) => props.theme.colors.black.black1};
  font-size: ${(props) => props.theme.fontSize.fontSize14};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin: 16px 0px 8px 0px;
`;

export default Label;
