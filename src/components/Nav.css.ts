import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const nav = style({
  display: "flex",
  flexDirection: "row",

  margin: theme.spacing.small,
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
