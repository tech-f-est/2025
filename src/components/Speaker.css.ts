import { style } from "@vanilla-extract/css";
import { card } from "../utils.css";
import { theme } from "../theme.css";

export const speaker = style([
  card(),
  {
    transition: theme.transition,
    transitionDuration: ".5s",

    background: theme.background.element,

    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.large,

    selectors: {
      [`&:hover`]: {
        borderColor: theme.foreground.accent,
        boxShadow: `0px 0px 12px ${theme.foreground.accent}`,
      },
    },
  },
]);

export const included = style({
  listStyle: "none",
  padding: 0,
  margin: 0,

  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.small,
});

export const name = style({
  fontWeight: 400,
  fontSize: "1.5em",
});

export const emptyState = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5em",
  color: theme.foreground.default,
  height: "100%",
  width: "100%",
  padding: theme.spacing.medium,
  position: "relative",
  "::before": {
    content: "'?'",
    position: "absolute",
    fontSize: "3em",
    color: theme.foreground.dimmed,
    opacity: 0.7,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
  },
  zIndex: 1,
});
