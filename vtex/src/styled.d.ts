import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;
    sidebarIconSize: string;
    colors: {
      main: string;
      secondary: string;
      info: string;
      blue: string;
      success: string;
      danger: string;
      error: string;
      black: {
        black1: string;
        black2: string;
        black3: string;
        black4: string;
      };
      white: {
        white1: string;
        white2: string;
        white3: string;
        white4: string;
        white5: string;
      };
      gray: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
      };
      buttonText: {
        primary: string;
        secondary: string;
        outline: string;
        text: string;
      };
    };
    fontFamily: string;
    fontSize: {
      fontSize8: string;
      fontSize10: string;
      fontSize12: string;
      fontSize14: string;
      fontSize16: string;
      fontSize18: string;
      fontSize24: string;
      fontSize32: string;
    };
    fontWeight: {
      bold: string;
      semiBold: string;
      medium: string;
      light: string;
    };
  }
}
