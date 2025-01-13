import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const nav = style({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing.medium,
  alignItems: "center",
  justifyContent: "space-between",

  margin: theme.spacing.small,

  "@media": {
    "(max-width: 768px)": {
      alignItems: "flex-start",
    },
  },
});

export const home = style({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing.small,

  textDecoration: "none",
  fontWeight: 500,
  fontSize: 20,

  color: theme.foreground.default,

  paddingBottom: 4,
  borderBottom: "3px solid transparent",

  transition: theme.transition,

  ":hover": {
    borderColor: theme.foreground.accent,
  },
});

export const links = style({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing.medium,
  marginRight: theme.spacing.large,

  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: theme.spacing.small,

      alignItems: "flex-end",
      textAlign: "right",
    },
  },
});

export const link = style({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing.small,

  textDecoration: "none",
  fontWeight: 500,
  fontSize: 20,

  color: theme.foreground.default,

  paddingBottom: 4,
  borderBottom: "3px solid transparent",

  transition: theme.transition,

  ":hover": {
    borderColor: theme.foreground.accent,
  },
});
