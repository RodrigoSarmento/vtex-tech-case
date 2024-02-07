import styled from 'styled-components';

const CheckBox = styled.input`
  accent-color: ${(props) => props.theme.colors.main};
`;

CheckBox.defaultProps = {
  type: 'checkbox',
};

export default CheckBox;
