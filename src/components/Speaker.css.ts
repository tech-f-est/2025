import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { card } from "../utils.css";
import { theme } from "../theme.css";

export const contact = style({
  display: "block",

  cursor: "pointer",
  textDecoration: "none",

  color: theme.foreground.accent,
  fontWeight: 500,
  textAlign: "center",

  padding: theme.spacing.small,
  border: theme.border,
  borderColor: theme.foreground.accent,
  background: theme.background.element,
  borderRadius: 8,

  transition: theme.transition,

  ":hover": {
    background: theme.foreground.accent,
    color: theme.foreground.default,
  },
});

export const pack = style([
  card(),
  {
    transition: theme.transition,
    transitionDuration: ".5s",

    background: theme.background.element,

    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.large,

    selectors: {
      [`&:has(${contact}:hover)`]: {
        borderColor: theme.foreground.accent,
        boxShadow: `0px 0px 12px ${theme.foreground.accent}`,
      },
    },
  },
]);

export const included = style({
  listStyle: "none",
  padding: 0,
  margin: 0,

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.small,
});

export const name = style({
  fontWeight: 400,
  fontSize: "1.5em",
});

export const details = styleVariants({
  on: {},
  off: { color: theme.foreground.dimmed },
});
globalStyle(`${details.on} em`, {
  fontStyle: "normal",
  fontWeight: 700,
});

export const price = style({
  fontWeight: 500,
  fontSize: "2em",
});
