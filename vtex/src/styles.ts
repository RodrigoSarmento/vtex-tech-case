import styled from 'styled-components';
import Button from './components/Button';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white.white5};
  overflow: auto;
`;

export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;

  label {
    margin: 0;
  }

  input {
    margin-left: 12px;
    height: 20px;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const FormLabel = styled.label`
  display: block;
  font-family: ${(props) => props.theme.fontFamily};
  margin-bottom: 8px;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  color: ${(props) => props.theme.colors.black.black1};
`;

export const ContainerWhite = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  width: 50%;
  height: 50%;
  border-radius: 10px;
  margin: 20px;
  background-color: ${(props) => props.theme.colors.white.white1};
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
  color: white;
  margin-top: 30px;
`;
