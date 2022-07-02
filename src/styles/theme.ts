//스타일-테마 모음

const fonts = {
  size: {
    large: "3.2rem",
    medium: "2.4rem",
    regular: "1.6rem",
    small: "1.3rem",
  },
  weight: {
    bold: 700,
    medium: 500,
    regular: 400,
    light: 300,
  },
};

const borders = {
  ligth: "1.0rem",
  hard: "2.0rem",
};

export const theme = {
  dark: {
    //다크 모드 개발 x
  },
  light: {
    fonts,
    borders,
    white: `#FFFFFF`,
    mint: `#95E1D3`,
    yellow: `#FCE38A`,
    gray: `#D9D9D9`,
    black: `#000000`,
    greenDark: `#47624F`,
    greenSub: `#9CBFA7`,
    greenLight: `#C3E5AE`,
    pink: `#F4BBBB`,
  },
  response: {},
};
