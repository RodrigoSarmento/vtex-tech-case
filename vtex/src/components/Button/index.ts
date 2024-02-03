import styled, { css } from 'styled-components';

const containedButtonCss = css<IButton>`
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.main};
  color: ${(props) =>
    props.textColor ? props.textColor : props.theme.colors.white};
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.8;
  }
`;

const outlinedButtonCss = css<IButton>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.white};
  position: relative;
  color: ${(props) =>
    props.textColor ? props.textColor : props.theme.colors.white.white1};
  transition: background-color 0.25s;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: 18px;
    background: ${(props) =>
      props.outlineColor ? props.outlineColor : props.theme.colors.main};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.gray.gray6};
  }
`;

export default styled.button<IButton>`
  border-radius: ${(props) => props.theme.borderRadius};
  border: none;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: 16px;
  height: 50px;
  width: 100%;

  ${(props) => (props.outlined ? outlinedButtonCss : containedButtonCss)}

  transition: all 0.5s ease-out;
`;
