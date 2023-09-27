const colors = {
  white: "#FFFFFF",

  yellow: {
    300: "#F1E9C9",
    500: "#DBAC2C",
    700: "#C47F17",
  },
  purple: {
    300: "#EBE5F9",
    500: "#8047F8",
    700: "#4B2995",
  },
  neutral: {
    100: "#FAFAFA",
    200: "#F3F2F2",
    300: "#EDEDED",
    400: "#E6E5E5",
    500: "#D7D5D5",
    600: "#8D8686",
    700: "#574F4D",
    800: "#403937",
    900: "#272221",
  },
};

const font = {
  family: {
    primary: "Roboto",
    secondary: "Baloo2",
  },
  sizes: {
    xxs: "1.0rem",
    xs: "1.2rem",
    s: "1.4rem",
    m: "1.6rem",
    l: "2.0rem",
    lg: "2.4rem",
    xlg: "3.2rem",
    g: "4.8rem",
  },
};

export const themeDefault = {
  colors: {
    ...colors,
    background: colors.neutral[100],
  },
  font,
};
