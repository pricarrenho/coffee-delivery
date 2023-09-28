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
  family: "Roboto",
  sizes: {
    xxs: "0.625rem", //10px
    xs: "0.75rem", //12px
    s: "0.875rem", //14px
    m: "1rem", //16px
    xm: "1.125rem", //18px
    l: "1.25rem", //20px
    lg: "1.5rem", //24px
    xlg: "2rem", // 32px
    g: "3rem", //48px
  },
};

export const themeDefault = {
  colors: {
    ...colors,
    background: colors.neutral[100],
  },
  font,
};
