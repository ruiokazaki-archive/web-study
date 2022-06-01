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
    height: { base: '88px', sm: '68px', md: '68px' },
  },
  blog: {
    h1: {
      fontSize: '32px',
      lineHeight: '48px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '24px',
      lineHeight: '40px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: 'bold',
    },
    body: {
      fontSize: '16px',
      lineHeight: '27px',
    },
    profile: {
      fontSize: '14px',
      lineHeight: '25px',
    },
  },
  card: {
    title: {
      fontSize: '20px',
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
      fontSize: '32px',
      lineHeight: '48px',
      fontWeight: 'bold',
    },
    h2: {
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
};
const styles = {
  global: {
    html: {
      color: 'text',
      backgroundColor: 'bgColor',
      fontFamily: 'body',
    },
    li: {
      listStyleType: 'none',
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
