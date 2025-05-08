import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  backgroundColor: theme.background.default,
  color: theme.foreground.default,
  minHeight: "100vh",
  paddingBottom: "4rem",
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem 1rem",
});

export const pageTitle = style({
  fontSize: "2.5rem",
  fontWeight: "800",
  textAlign: "center",
  marginBottom: "2.5rem",
  color: theme.foreground.default,
});

export const packsSection = style({
  marginBottom: "5rem",
});

export const packs = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
  justifyContent: "center",
  
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
      maxWidth: "500px",
      margin: "0 auto",
    }
  }
});

export const contactSection = style({
  marginTop: "4rem",
  textAlign: "center",
  padding: "3rem 1rem",
  backgroundColor: theme.background.element,
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
});

export const contactTitle = style({
  fontSize: "2rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: theme.foreground.default,
});

export const contactText = style({
  fontSize: "1.2rem",
  color: theme.foreground.dimmed,
  marginBottom: "2rem",
});

export const contactLink = style({
  color: theme.foreground.accent,
  fontWeight: "600",
  textDecoration: "none",
  transition: "all 0.2s ease",
  
  ":hover": {
    textDecoration: "underline",
  }
});
