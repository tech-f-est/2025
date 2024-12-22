import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  display: "grid",
  gridTemplateColumns: "1fr 60vw 1fr",
  gridTemplateRows: "1fr 30vh 1fr",

  alignItems: "center",

  flexGrow: 1,

  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: `${theme.spacing.medium} auto ${theme.spacing.medium}`,
      gridTemplateRows: `${theme.spacing.medium} auto ${theme.spacing.medium}`,

      alignItems: "center",
      justifyItems: "center",
    },
  },
});

export const illustration = style({
  gridColumn: "2",
  gridRow: "2",
});

export const details = style({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.medium,

  gridColumn: "2",
  gridRow: "2",

  fontSize: "2rem",

  textAlign: "right",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "1rem",
      justifySelf: "end",
    },
  },
});

export const title = style({});

export const date = style({});

export const location = style({});
