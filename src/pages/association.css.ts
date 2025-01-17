import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  maxWidth: `min(1280px, 100vw - calc(2 * ${theme.spacing.large}))`,
  alignSelf: "center",

  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
