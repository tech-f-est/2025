import { style } from "@vanilla-extract/css";
import { card } from "../utils.css";
import { theme } from "../theme.css";

export const lien = style({
  display: "block",

  cursor: "pointer",
  textDecoration: "none",

  color: theme.foreground.accent,
  fontWeight: 500,
  textAlign: "center",

  padding: theme.spacing.small,

  transition: theme.transition,
});

export const sponsor = style([
  card(),
  {
    transition: theme.transition,
    transitionDuration: ".5s",

    background: theme.background.element,

    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.large,

    selectors: {
      [`&:has(${lien}:hover)`]: {
        boxShadow: `0px 0px 12px ${theme.foreground.accent}`,
      },
    },
  },
]);

export const name = style({
  fontWeight: 400,
  fontSize: "1.5em",
  textAlign: "center",
});
