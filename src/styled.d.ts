import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    background: {
      primary: string;
      secondary: string;
    };
    typography: {
      primary: string;
      secondary: string;
      inverted: string;
    };
    palette: {
      primary: string;
      danger: string;
    };
  }
}
