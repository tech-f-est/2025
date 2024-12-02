import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const details = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,

  gridColumn: "2",
  gridRow: "2",

  fontSize: "2rem",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "1rem",
    },
  },
});

export const title = style({});

export const date = style({});

export const location = style({});
