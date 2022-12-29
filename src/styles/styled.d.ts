import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    blue: {
      default: string;
      darker: string;
      lighter: string;
    };
    black: {
      default: string;
      darker: string;
      lighter: string;
    };
    white: {
      default: string;
    };
  }
}
