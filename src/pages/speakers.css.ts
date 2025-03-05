import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  maxWidth: `min(1280px, 100vw - calc(2 * ${theme.spacing.large}))`,
  alignSelf: "center",

  marginTop: 200,

  display: "flex",
  flexDirection: "row",
  gap: theme.spacing.large,

  "@media": {
    "(max-width: 768px)": { marginTop: 0 },
  },
});

export const speakers = style({
  display: "grid",
  gap: theme.spacing.large,

  "@media": {
    "(max-width: 768px)": { gridTemplateColumns: "1fr" },
  },
});
