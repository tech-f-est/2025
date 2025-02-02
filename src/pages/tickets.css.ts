import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  maxWidth: `min(1280px, 100vw - calc(2 * ${theme.spacing.large}))`,
  alignSelf: "center",

  marginTop: 200,

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.large,

  "@media": {
    "(max-width: 768px)": { marginTop: 0 },
  },
});

export const packs = style({
  display: "grid",
  gap: theme.spacing.large,
  gridTemplateColumns: "repeat(3, 1fr)",

  gridColumn: "2",

  "@media": {
    "(max-width: 768px)": { gridTemplateColumns: "1fr" },
  },
});
