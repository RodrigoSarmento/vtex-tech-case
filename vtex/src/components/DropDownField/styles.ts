import styled from 'styled-components';

export const DropDownContainer = styled.div`
  width: 100%;
  position: relative;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

export const DropDownHeader = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  height: 40px;
  background: ${(props) => props.theme.colors.white.white4};
  border-radius: 8px;
  display: flex;
  box-sizing: border-box;
  border: 2px solid transparent;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray.gray7};
`;

export const DropDownList = styled.ul`
  padding: 10px;
  position: absolute;
  top: 48px;
  z-index: 100;
  width: 100%;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e8e8e8;
  border-radius: ${(props) => props.theme.borderRadius};

  input {
    border: none;
    font-size: 16px;
    color: ${(props) => props.theme.colors.gray.gray11};
    background-color: #f5f5f5;
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};
    padding-left: 12px;
    padding-right: 12px;
    height: 40px;
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

export const ListItem = styled.li`
  padding-left: 12px;
  padding-right: 12px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray.gray11};
  margin-top: 4px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Text = styled.li`
  text-align: center;
  margin-top: 8px;
  list-style: none;
  text-decoration: underline;
  font-weight: bold;
`;
