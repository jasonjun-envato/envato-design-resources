import { css, createGlobalStyle } from "styled-components"
import deStyle from "destyle.css"
import InterFont from "src/fonts/Inter.var.woff2"

// Design Tokens
export const color = {
  brand: "#80B341",
  neutral40: "#F9FAFA",
  neutral60: "#F4F5F6",
  neutral80: "#EEEFF1",
  neutral100: "#DEE0E3",
  neutral400: "#717684",
  neutral700: "#4E5058",
  neutral900: "#383B42",
  grey40: "#FAFAFA",
  grey60: "#F3F3F3",
  grey80: "#E7E7E8",
  grey100: "#D0D0D1",
  grey200: "#B8B8BA",
  grey300: "#A1A1A3",
  grey400: "#89898C",
  grey500: "#717275",
  grey600: "#5A5A5E",
  grey700: "#424347",
  grey800: "#2B2B30",
  grey900: "#1F2025",
  grey1000: "#131419",
}

export const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  xl2: "1.5rem",
  xl3: "2rem",
  xl4: "2.5rem",
  xl5: "3rem",
}

export const textLineHeight = {
  tight: 1.25,
  normal: 1.5,
  loose: 1.75,
}

export const textLetterSpacing = {
  tight: "-0.025em",
  normal: 0,
  loose: "0.025em",
}

export const layoutSize = {
  maxWidth: "1000px",
}

// Predefiend style

export const MaxWidthStyle = css`
  max-width: calc(${layoutSize.maxWidth} + 48px);
  padding: 0 24px;
  margin: 0 auto;
`

// Global style
export const GlobalStyle = createGlobalStyle`
  ${deStyle}

  @font-face {
    font-family: 'Inter';
    font-display: swap;
    src: url(${InterFont}) format('truetype');
    font-weight: 200 800;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
  }

  html {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    color: ${color.grey800};
    line-height: 1.5;
    letter-spacing: 0;
  }

  hr {
    display: block;
    border: 0;
    height: 1px;
    background: ${color.grey80};
  }
`
