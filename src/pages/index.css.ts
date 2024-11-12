import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  colorScheme: "light dark",
  color: theme.foreground.default,
  background: theme.background.default,
});

export const landing = style({
  fontFamily: theme.font,
});
