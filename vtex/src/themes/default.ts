import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  borderRadius: '8px',
  boxShadow: '0px 4px 16px 0px #00000040',
  sidebarIconSize: '30px',
  colors: {
    main: '#F53566',
    secondary: '#fff',
    info: '#2F80ED',
    blue: '#2D9CDB',
    success: '#2F9200',
    danger: '#E2B93B',
    error: '#D70000',
    black: {
      black1: '#000000',
      black2: '#191919',
      black3: '#262626',
      black4: '#393939',
    },
    white: {
      white1: '#FFFFFF',
      white2: '#FAFAFA',
      white3: '#F4F4F4',
      white4: '#F1F1F1',
      white5: '#E6E6E6',
    },
    gray: {
      gray1: '#D9D9D9',
      gray2: '#CCCCCC',
      gray3: '#BFBFBF',
      gray4: '#BFBFBF',
      gray5: '#B2B2B2',
      gray6: '#999999',
      gray7: '#8C8C8C',
      gray8: '#808080',
      gray9: '#737373',
      gray10: '#666666',
      gray11: '#595959',
      gray12: '#4D4D4D',
    },
    buttonText: {
      primary: '#FFFFFF',
      secondary: '#000',
      outline: '#02274F',
      text: '#02274F',
    },
  },
  fontFamily: "'Inter', sans-serif",
  fontSize: {
    fontSize8: '8px',
    fontSize10: '10px',
    fontSize12: '12px',
    fontSize14: '14px',
    fontSize16: '16px',
    fontSize18: '18px',
    fontSize24: '24px',
    fontSize32: '32px',
  },
  fontWeight: {
    bold: '700',
    semiBold: '600',
    medium: '500',
    light: '400',
  },
};

export { lightTheme };
