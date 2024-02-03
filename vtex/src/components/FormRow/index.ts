import styled from 'styled-components';

interface IFormRowProps {
  quantityOfColumns?: number;
}

const FormRow = styled.div<IFormRowProps>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.quantityOfColumns ?? 2},
    1fr
  );
  grid-gap: 10px;
`;

export default FormRow;
