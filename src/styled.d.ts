// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      accent: string;
      grey: string;
      opacity0: string;
    };
    size: {
      xs4: string;
      xs3: string;
      xs2: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xl2: string;
      xl3: string;
      xl4: string;
    };
    header: {
      top: string;
      padding: string;
      gap: string;
      fontSize: string;
      circle: string;
    };
    home: {
      wrapper: {
        paddingTop: string;
      };
      items: {
        min: string;
      };
    };
    movie: {
      width: string;
      height: string;
    };
    loading: {
      size: string;
    };
  }
}
