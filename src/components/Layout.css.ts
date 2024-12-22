import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  all: "unset",

  fontFamily: theme.font,

  colorScheme: "light dark",
  color: theme.foreground.default,
  background: theme.background.default,

  height: "100vh",

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,
});

export const main = style({});
