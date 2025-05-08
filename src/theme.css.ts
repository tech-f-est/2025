import { createTheme, fontFace, globalStyle } from "@vanilla-extract/css";

const ibm = fontFace([
  {
    src: "url('/IBMPlexSans-Bold.ttf')",
    fontWeight: 700,
    fontStyle: "normal",
  },
  {
    src: "url('/IBMPlexSans-BoldItalic.ttf')",
    fontWeight: 700,
    fontStyle: "italic",
  },
  {
    src: "url('/IBMPlexSans-SemiBold.ttf')",
    fontWeight: 600,
    fontStyle: "normal",
  },
  {
    src: "url('/IBMPlexSans-SemiBoldItalic.ttf')",
    fontWeight: 600,
    fontStyle: "italic",
  },
  {
    src: "url('/IBMPlexSans-Medium.ttf')",
    fontWeight: 500,
    fontStyle: "normal",
  },
  {
    src: "url('/IBMPlexSans-MediumItalic.ttf')",
    fontWeight: 500,
    fontStyle: "italic",
  },
  {
    src: "url('/IBMPlexSans-Regular.ttf')",
    fontWeight: 400,
    fontStyle: "normal",
  },
  {
    src: "url('/IBMPlexSans-Italic.ttf')",
    fontWeight: 400,
    fontStyle: "italic",
  },
  {
    src: "url('/IBMPlexSans-Light.ttf')",
    fontWeight: 300,
    fontStyle: "normal",
  },
  {
    src: "url('/IBMPlexSans-LightItalic.ttf')",
    fontWeight: 300,
    fontStyle: "italic",
  },
  {
    src: "url('/IBMPlexSans-ExtraLight.ttf')",
    fontWeight: 200,
    fontStyle: "normal",
  },
  {
    src: "url('/IBMPlexSans-ExtraLightItalic.ttf')",
    fontWeight: 200,
    fontStyle: "italic",
  },
  {
    src: "url('/IBMPlexSans-Thin.ttf')",
    fontWeight: 100,
    fontStyle: "normal",
  },
  {
    src: "url('/IBMPlexSans-ThinItalic.ttf')",
    fontWeight: 100,
    fontStyle: "italic",
  },
]);

export const [themeClass, theme] = createTheme({
  font: ibm,
  spacing: {
    small: "8px",
    medium: "20px",
    large: "32px",
  },
  foreground: {
    default: "light-dark(black, white)",
    accent: "light-dark(#E7680C, #E7680C)",
    dimmed: "light-dark(#7B7B7B, #6E6E6E)",
  },
  background: {
    default: "light-dark(white, black)",
    element: "light-dark(white, #111111)",
  },
  transition: "all .2s cubic-bezier(.19,1,.22,1)",

  border: "1px solid light-dark(#EEEEEE, #2A2A2A)",
});

// Ajout des breakpoints standardisés qui peuvent être utilisés dans toute l'application
export const breakpoints = {
  mobile: '600px',
  tablet: '900px',
  desktop: '1200px'
};

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
});
