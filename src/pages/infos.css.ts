import { globalStyle, style } from "@vanilla-extract/css";
import { theme } from "../theme.css";

export const page = style({
  backgroundColor: theme.background.default,
  color: theme.foreground.default,
  minHeight: '100vh',
  maxWidth: `min(1280px, 100vw - calc(2 * ${theme.spacing.large}))`,
  alignSelf: "center",
  paddingBottom: theme.spacing.large,
  display: "flex",
  flexDirection: "column",
});

export const container = style({
  maxWidth: '1000px', // Standardiser à 1000px
  margin: '0 auto',
  padding: '3rem 1.5rem 5rem',
  '@media': {
    '(max-width: 768px)': {
      padding: '2rem 1rem 3rem',
    },
  },
});

export const pageTitle = style({
  fontSize: '3rem',
  fontWeight: '800',
  textAlign: 'center',
  color: theme.foreground.default,
  marginBottom: '1.5rem',
  letterSpacing: '-0.03em',
});

export const pageDescription = style({
  fontSize: '1.2rem',
  color: theme.foreground.dimmed,
  textAlign: 'center',
  margin: '0 auto 4rem',
  lineHeight: '1.6',
});

export const infoSections = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '3rem',
});

export const infoSection = style({
  backgroundColor: theme.background.element,
  borderRadius: '12px',
  padding: '2.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  maxWidth: '100%', // Assurer que les sections n'excèdent pas le conteneur
  '@media': {
    '(max-width: 768px)': {
      padding: '2rem 1.5rem',
    },
  },
});

export const sectionTitle = style({
  fontSize: '1.75rem',
  fontWeight: '700',
  color: theme.foreground.accent,
  marginBottom: '1.5rem',
  position: 'relative',
  paddingBottom: '0.5rem',
  
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '60px',
    height: '3px',
    backgroundColor: theme.foreground.accent,
    borderRadius: '2px',
  }
});

export const infoContent = style({
  fontSize: '1.05rem',
  lineHeight: '1.7',
});

export const subSection = style({
  marginTop: '2rem',
});

export const subTitle = style({
  fontSize: '1.3rem',
  fontWeight: '700',
  color: theme.foreground.default,
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const iconContainer = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: 'light-dark(rgba(231, 104, 12, 0.1), rgba(231, 104, 12, 0.2))',
  color: theme.foreground.accent,
});

export const transportList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '1.5rem',
  marginTop: '1.5rem',
});

export const transportItem = style({
  backgroundColor: 'light-dark(rgba(0,0,0,0.02), rgba(255,255,255,0.02))',
  padding: '1.25rem',
  borderRadius: '8px',
  border: '1px solid light-dark(rgba(0,0,0,0.05), rgba(255,255,255,0.05))',
});

export const transportName = style({
  fontSize: '1.1rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: theme.foreground.default,
});

export const transportDetail = style({
  fontSize: '0.95rem',
  color: theme.foreground.dimmed,
  marginBottom: '0.5rem',
});

export const link = style({
  color: theme.foreground.accent,
  textDecoration: 'none',
  fontWeight: '500',
  transition: 'all 0.2s ease',
  
  ':hover': {
    textDecoration: 'underline',
    color: 'light-dark(#c55a0a, #ff8f3e)',
  }
});

export const practicalInfo = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '2rem',
  marginTop: '1.5rem',
});

export const infoCard = style({
  backgroundColor: 'light-dark(rgba(0,0,0,0.02), rgba(255,255,255,0.02))',
  padding: '1.5rem',
  borderRadius: '10px',
  border: '1px solid light-dark(rgba(0,0,0,0.05), rgba(255,255,255,0.05))',
});

export const infoCardTitle = style({
  fontSize: '1.1rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: theme.foreground.default,
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const infoCardContent = style({
  fontSize: '0.95rem',
  lineHeight: '1.6',
  color: theme.foreground.dimmed,
});

export const alertBox = style({
  backgroundColor: 'light-dark(#fff0ea, #3a291e)',
  padding: '1.25rem',
  borderRadius: '8px',
  borderLeft: `4px solid ${theme.foreground.accent}`,
  marginTop: '2rem',
});

export const alertTitle = style({
  fontSize: '1.1rem',
  fontWeight: '700',
  marginBottom: '0.5rem',
  color: theme.foreground.accent,
});

export const alertContent = style({
  fontSize: '0.95rem',
  lineHeight: '1.6',
});

// Styles pour la mise en avant du sous-titrage
export const highlightBox = style({
  backgroundColor: 'light-dark(rgba(231, 104, 12, 0.08), rgba(231, 104, 12, 0.15))',
  borderRadius: '12px',
  padding: '0.5rem',
  marginBottom: '3.5rem',
  border: `1px solid light-dark(rgba(231, 104, 12, 0.2), rgba(231, 104, 12, 0.3))`,
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
});

export const highlightContent = style({
  display: 'flex',
  gap: '1.5rem',
  padding: '1.5rem',
  '@media': {
    '(max-width: 640px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '1rem',
    },
  },
});

export const highlightIcon = style({
  flexShrink: 0,
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  backgroundColor: 'light-dark(rgba(231, 104, 12, 0.15), rgba(231, 104, 12, 0.25))',
  color: theme.foreground.accent,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const highlightTextContent = style({
  flex: '1',
});

export const highlightTitle = style({
  fontSize: '1.5rem',
  fontWeight: '700',
  color: theme.foreground.accent,
  marginBottom: '1rem',
});

export const highlightText = style({
  fontSize: '1.05rem',
  lineHeight: '1.7',
  marginBottom: '0.75rem',
  
  ':last-child': {
    marginBottom: '0',
  },
});

// Styles pour les fonctionnalités d'accessibilité
export const accessibilityFeature = style({
  display: 'flex',
  gap: '1rem',
  padding: '1.25rem',
  backgroundColor: 'light-dark(rgba(0,0,0,0.02), rgba(255,255,255,0.03))',
  borderRadius: '8px',
  marginTop: '1.5rem',
  marginBottom: '1.5rem',
  border: '1px solid light-dark(rgba(0,0,0,0.04), rgba(255,255,255,0.04))',
  '@media': {
    '(max-width: 640px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
});

export const accessibilityIcon = style({
  flexShrink: 0,
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: 'light-dark(rgba(231, 104, 12, 0.1), rgba(231, 104, 12, 0.15))',
  color: theme.foreground.accent,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const featureTitle = style({
  fontSize: '1.15rem',
  fontWeight: '600',
  color: theme.foreground.default,
  marginBottom: '0.5rem',
});

globalStyle(`${page} h2`, {
  marginTop: theme.spacing.medium,
  marginBottom: theme.spacing.small,
});
globalStyle(`${page} h2:first-child`, {
  marginTop: 0,
});

globalStyle(`${page} h3`, {
  marginTop: theme.spacing.medium,
  marginBottom: theme.spacing.small,
});
globalStyle(`${page} h2 + h3`, {
  marginTop: 0,
});
