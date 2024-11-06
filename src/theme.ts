import { DefaultTheme } from "styled-components";

const darkMobileTheme: DefaultTheme = {
  colors: {
    main: "black",
    secondary: "white",
    accent: "red",
    grey: "grey",
  },
  size: {
    xs4: "0.5rem",
    xs3: "0.6rem",
    xs2: "0.7rem",
    xs: "0.8rem",
    sm: "0.9rem",
    md: "1rem",
    lg: "1.2rem",
    xl: "1.5rem",
    xl2: "2rem",
    xl3: "4rem",
    xl4: "6rem",
  },
  header: {
    top: "2rem",
    padding: "1rem",
    gap: "1rem",
    fontSize: "1rem",
    circle: "0.5rem",
  },
  home: {
    wrapper: {
      paddingTop: "8rem",
    },
  },
  movie: {
    size: "16rem",
  },
  loading: {
    size: "16rem",
  },
};

export { darkMobileTheme };
