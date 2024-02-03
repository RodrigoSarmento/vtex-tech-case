import styled from 'styled-components';
import Button from './components/Button';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const Logo = styled.img`
  height: 100px;
  width: 200px;
`;

export const FormError = styled.p`
  color: ${(props) => props.theme.colors.error};
  margin: 0;
  font-size: 14px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SaveButton = styled(Button)`
  margin-top: 50px;
  color: white;
`;
