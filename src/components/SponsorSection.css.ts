import { style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const sponsorSection = style({
  marginBottom: "2rem",
  position: "relative",
});

export const sectionTitle = style({
  fontSize: "1.75rem",
  fontWeight: "700",
  color: theme.foreground.default,
  position: "relative",
  paddingBottom: "0.75rem",
  display: "inline-block",
  
  "::after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "40%",
    height: "3px",
    backgroundColor: theme.foreground.accent,
    borderRadius: "2px",
  }
});

export const sectionDescription = style({
  fontSize: "1.1rem",
  maxWidth: "800px",
  marginBottom: "2.5rem",
  color: theme.foreground.dimmed,
  lineHeight: "1.6",
});

export const sponsorGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "2.5rem",
  
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: "1.5rem",
    }
  }
});

export const standardPackHeading = style({
  color: "#E7680C", // Couleur standard
});

export const bergamotePackHeading = style({
  color: "#2A6B9C", // Couleur bergamote
});

export const jaymontPackHeading = style({
  color: "#6B8E23", // Couleur jaumont
});

export const stanislasPackHeading = style({
  color: "#9C2A2A", // Couleur stanislas
});

export const section = style({
  marginBottom: "3rem",
});

export const title = style({
  fontSize: "1.75rem",
  fontWeight: "700",
  color: theme.foreground.accent,
  marginBottom: "1.5rem",
  textAlign: "center",
});

export const sponsorsGrid = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "center", // Centrer les sponsors horizontalement
  alignItems: "stretch",
});

// Styles pour les cartes des sponsors
const baseCard = {
  backgroundColor: theme.background.element,
  borderRadius: "10px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  padding: "1.5rem",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  textAlign: "center" as const,
  
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
  },
};

export const cardLarge = style({
  ...baseCard,
  width: "100%",
  maxWidth: "500px", // Plus large pour le pack premium
  '@media': {
    '(max-width: 768px)': {
      width: "100%",
    },
  },
});

export const cardMedium = style({
  ...baseCard,
  width: "calc(50% - 1rem)",
  maxWidth: "400px",
  '@media': {
    '(max-width: 768px)': {
      width: "100%",
    },
  },
});

export const cardSmall = style({
  ...baseCard,
  width: "calc(33.333% - 1.35rem)",
  maxWidth: "300px",
  '@media': {
    '(max-width: 992px)': {
      width: "calc(50% - 1rem)",
    },
    '(max-width: 576px)': {
      width: "100%",
    },
  },
});

export const logoContainer = style({
  marginBottom: "1.5rem",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "120px", // Hauteur fixe pour tous les logos
});

export const logoLarge = style({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
});

export const logoMedium = style({
  maxWidth: "90%",
  maxHeight: "90%",
  objectFit: "contain",
});

export const logoSmall = style({
  maxWidth: "80%",
  maxHeight: "80%",
  objectFit: "contain",
});

export const sponsorName = style({
  fontSize: "1.25rem",
  fontWeight: "700",
  color: theme.foreground.default,
  marginBottom: "0.75rem",
});

export const description = style({
  fontSize: "0.95rem",
  lineHeight: "1.6",
  color: theme.foreground.dimmed,
  marginBottom: "1.5rem",
});

export const link = style({
  display: "inline-block",
  padding: "0.5rem 1rem",
  backgroundColor: theme.foreground.accent,
  color: "white",
  borderRadius: "5px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "0.9rem",
  marginTop: "auto", // pousse le lien vers le bas de la carte
  transition: "background-color 0.2s ease",
  
  ":hover": {
    backgroundColor: "light-dark(#c55a0a, #ff8f3e)",
  },
});
