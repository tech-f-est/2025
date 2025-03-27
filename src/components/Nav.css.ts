import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const nav = style({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing.medium,
  alignItems: "center",
  justifyContent: "space-between",

  padding: theme.spacing.small,
  boxSizing: "border-box",

  "@media": {
    "(max-width: 768px)": {
      alignItems: "flex-start",
    },
  },
});

export const home = style({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing.small,

  textDecoration: "none",
  fontWeight: 500,
  fontSize: 20,

  color: theme.foreground.default,

  paddingBottom: 4,
  borderBottom: "3px solid transparent",

  transition: theme.transition,

  ":hover": {
    borderColor: theme.foreground.accent,
  },
});

export const links = style({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing.medium,
  marginRight: theme.spacing.large,

  "@media": {
    "(max-width: 768px)": {
      position: "absolute",
      overflow: "hidden",
      width: "100vw",
      height: "100vh",

      transition: "background .2s, content-visibility .2s allow-discrete",
      background: "transparent",
      contentVisibility: "hidden",
      pointerEvents: "none",

      selectors: {
        "label:has(input:checked) ~ &": {
          contentVisibility: "visible",
          pointerEvents: "initial",

          background: theme.background.default,
        },
      },

      flexDirection: "column",
      gap: theme.spacing.small,

      justifyContent: "center",
      alignItems: "flex-end",
      textAlign: "right",

      boxSizing: "border-box",
      padding: theme.spacing.large,
    },
  },
});

export const link = style({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing.small,

  textDecoration: "none",
  fontWeight: 500,
  fontSize: 20,

  color: theme.foreground.default,

  paddingBottom: 4,
  borderBottom: "3px solid transparent",

  transition: theme.transition,

  ":hover": {
    borderColor: theme.foreground.accent,
  },

  "@media": {
    "(max-width: 768px)": {
      transform: `translateX(300px)`,

      transition: theme.transition,

      selectors: {
        "label:has(input:checked) ~ * &": {
          transform: `translateX(0px)`,
        },
      },
    },
  },
});

export const burger = style({
  display: "none",
  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // Hand crafted padding so the button takes is as large as possible without pushing the nav's height
      padding: 18,
    },
  },
});
