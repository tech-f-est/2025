import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  maxWidth: `min(1280px, 100vw - calc(2 * ${theme.spacing.large}))`,
  alignSelf: "center",

  paddingBottom: theme.spacing.large,

  display: "flex",
  flexDirection: "column",
});

globalStyle(`${page} h2`, {
  marginTop: theme.spacing.medium,
  marginBottom: theme.spacing.small,
});
globalStyle(`${page} h2:first-child`, {
  marginTop: 0,
});

globalStyle(`${page} h3`, {
  marginTop: theme.spacing.medium,
  marginBottom: theme.spacing.small,
});
globalStyle(`${page} h2 + h3`, {
  marginTop: 0,
});

globalStyle(`${page} p`, {
  margin: 0,
});
