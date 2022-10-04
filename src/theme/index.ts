import { extendTheme } from '@chakra-ui/react';

const colors = {
  gray: '#71746E',
  main: '#518CFF',
  text: '#333333',
  okazaki: '#FF87AC',
  kinoshita: '#FFB727',
  suda: '#3D78D8',
  koba: '#FF8B2C',
  ryo: '#2E6963',
  sugar: '#B898E2',
  bgColor: '#F9F9F9',
};
const textStyles = {
  nav: {
    fontSize: { base: '12px', sm: '12px', md: '14px' },
    height: { base: '88px', sm: '64px', md: '64px' },
  },
  bodySize: {
    width: { base: '90vw', sm: '90vw', md: '80vw' },
    maxWidth: '1280px',
    margin: '0 auto',
  },
  blog: {
    h2: {
      fontWeight: 'bold',
      '&::after': {
        content: "''",
        display: 'block',
        width: '100%',
        height: '1px',
        background: '#E6E6E6',
        marginTop: '8px',
      },
    },
    h3: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
    },
    p: {
      fontSize: '16px',
      code: {
        marginInline: '2px',
      },
    },
    li: {
      lineHeight: '32px',
    },
    a: {
      color: 'main',
      textDecoration: 'underline',
      marginInline: '2px',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
  card: {
    h3: {
      fontSize: '18px',
      lineHeight: '28px',
      fontWeight: 'bold',
    },
    tag: {
      fontSize: '10px',
      lineHeight: '18px',
    },
    text: {
      fontSize: '12px',
      lineHeight: '22px',
    },
  },
  article: {
    title: {
      fontSize: '24px',
      lineHeight: '36px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: 'bold',
    },
    text: {
      fontSize: '16px',
      lineHeight: '32px',
    },
  },
  pagination: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
};
const styles = {
  global: {
    html: {
      color: 'text',
      backgroundColor: 'bgColor',
      fontFamily: 'body',
    },
    body: {
      bg: 'bgColor',
    },
  },
};
const fonts = {
  body: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
};
const breakpoints = {
  sm: '600px',
  md: '1024px',
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
