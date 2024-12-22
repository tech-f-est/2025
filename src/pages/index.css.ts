import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  display: "grid",
  gridTemplateColumns: "1fr 60vw 1fr",
  gridTemplateRows: "1fr 30vh 1fr",

  flexGrow: 1,

  "@media": {
    "(max-width: 768px)": {
      display: "flex",
      flexDirection: "column",

      alignItems: "center",
      justifyContent: "center",

      margin: theme.spacing.medium,
    },
  },
});

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
