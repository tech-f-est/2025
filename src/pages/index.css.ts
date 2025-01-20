import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  scrollSnapType: "both mandatory",
  overscrollBehaviorX: "contain",
  overflow: "auto",
  overflowX: "hidden",
});

export const illustration = style({
  gridColumn: "2",
  gridRow: "2",
});

export const section = style({
  scrollSnapAlign: "center center",
  scrollSnapStop: "normal",
  height: "calc(100vh - 76px)",
  width: "100vw",

  display: "grid",
  gridTemplateColumns: "1fr 60vw 1fr",
  gridTemplateRows: "1fr 30vh 1fr",

  alignItems: "center",

  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: `${theme.spacing.large} auto ${theme.spacing.large}`,
      gridTemplateRows: `${theme.spacing.large} auto ${theme.spacing.large}`,

      alignItems: "center",
      justifyItems: "center",

      height: "calc(100vh - 134px)",
    },
  },
});

export const hero = style([section]);

export const sectionContent = style({
  gridColumn: "2",
  gridRow: "2",

  fontSize: "2rem",
  textWrap: "balance",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "1.2rem",
    },
  },

  textAlign: "center",
});

export const details = style([
  sectionContent,
  {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.medium,

    fontSize: "2rem",

    textAlign: "right",

    "@media": {
      "(max-width: 768px)": {
        fontSize: "1rem",
        justifySelf: "end",
      },
    },
  },
]);

export const title = style({});

export const date = style({});

export const location = style({});
