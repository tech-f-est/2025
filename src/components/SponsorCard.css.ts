import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const sponsorCard = style({
  borderRadius: "12px",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: `1px solid light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.1))`,
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.04)",
  backgroundColor: theme.background.element,
  
  ":hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 20px light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))",
  }
});

export const sponsorLink = style({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
});

export const logoContainer = style({
  padding: "1.5rem",
  height: "130px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white", // Toujours blanc pour les logos
  borderBottom: "1px solid light-dark(rgba(0,0,0,0.08), rgba(255,255,255,0.08))",
});

export const sponsorLogo = style({
  maxWidth: "80%",
  maxHeight: "80%",
  objectFit: "contain",
});

export const logoFallback = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  backgroundColor: theme.foreground.accent,
  color: 'white',
  fontSize: '2rem',
  fontWeight: '700',
  textTransform: 'uppercase',
});

export const logoPlaceholder = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  backgroundColor: theme.foreground.accent,
  color: 'white',
  fontSize: '2rem',
  fontWeight: '700',
  textTransform: 'uppercase',
});

export const contentContainer = style({
  padding: "1.5rem",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const sponsorName = style({
  fontSize: "1.25rem",
  fontWeight: "600",
  color: theme.foreground.default,
  margin: "0 0 0.75rem",
});

export const sponsorDescription = style({
  fontSize: "0.95rem",
  color: theme.foreground.dimmed,
  margin: "0 0 1rem",
  lineHeight: "1.6",
  flex: "1",
});

export const visitSite = style({
  fontSize: "0.9rem",
  fontWeight: "500",
  color: theme.foreground.accent,
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "auto",
  transition: "transform 0.15s ease",
  
  ":hover": {
    transform: "translateX(4px)",
  }
});

export const packBadge = style({
  position: "absolute",
  top: "12px",
  right: "12px",
  padding: "0.3rem 0.8rem",
  fontSize: "0.75rem",
  fontWeight: "600",
  color: "white",
  backgroundColor: theme.foreground.accent,
  borderRadius: "20px",
  letterSpacing: "0.02em",
});
