import { style, globalStyle } from '@vanilla-extract/css';
import { theme } from '../theme.css';

export const page = style({
  backgroundColor: theme.background.default,
  color: theme.foreground.default,
  minHeight: '100vh',
});

export const container = style({
  maxWidth: '1000px', // Ajustement de 900px à 1000px pour être cohérent
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
  position: 'relative',
  
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-0.75rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: theme.foreground.accent,
    borderRadius: '2px',
  }
});

export const pageSubtitle = style({
  fontSize: '1.2rem',
  color: theme.foreground.dimmed,
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto 4rem',
  lineHeight: '1.6',
});

export const sectionContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '3rem',
});

export const aboutSection = style({
  backgroundColor: theme.background.element,
  borderRadius: '12px',
  padding: '2.5rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  '@media': {
    '(max-width: 768px)': {
      padding: '2rem 1.5rem',
    },
  },
});

export const sectionContent = style({
  display: 'flex',
  gap: '2.5rem',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      gap: '2rem',
    },
  },
});

export const textContent = style({
  flex: '1',
});

export const paragraph = style({
  fontSize: '1.05rem',
  lineHeight: '1.75',
  marginBottom: '1.5rem',
  color: theme.foreground.default,
  
  ':last-child': {
    marginBottom: 0,
  },
});

export const highlightedParagraph = style([
  paragraph,
  {
    fontWeight: '500',
    fontSize: '1.15rem',
    color: theme.foreground.accent,
    lineHeight: '1.8',
    padding: '1.5rem',
    backgroundColor: 'light-dark(rgba(231, 104, 12, 0.08), rgba(231, 104, 12, 0.15))',
    borderRadius: '8px',
    border: '1px solid light-dark(rgba(231, 104, 12, 0.15), rgba(231, 104, 12, 0.25))',
    marginBottom: '2rem',
  }
]);

export const imageContainer = style({
  flex: '0 0 40%',
  display: 'flex',
  alignItems: 'flex-start', // Aligner en haut au lieu de centrer
  justifyContent: 'center',
  paddingTop: '1.5rem', // Ajout d'un padding-top pour aligner avec le texte
  '@media': {
    '(max-width: 768px)': {
      flex: '1',
      paddingTop: '0', // Pas besoin de padding sur mobile
    },
  },
});

export const visualContainer = style({
  width: '100%',
  minHeight: '280px',
  backgroundColor: 'light-dark(rgba(231, 104, 12, 0.08), rgba(231, 104, 12, 0.15))',
  borderRadius: '12px',
  border: '1px solid light-dark(rgba(231, 104, 12, 0.15), rgba(231, 104, 12, 0.3))',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
});

export const logoVisual = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '1.5rem',
  color: theme.foreground.accent,
});

export const logoWrapper = style({
  width: '220px',
  height: '220px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '0.5rem',
  color: theme.foreground.accent,
});

// Utilisation de globalStyle pour cibler le svg à l'intérieur de logoWrapper
globalStyle(`${logoWrapper} svg`, {
  width: '100%',
  height: 'auto',
});

export const regionText = style({
  fontSize: '1.5rem',
  fontWeight: '700',
  marginTop: '1rem',
  color: theme.foreground.accent,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

export const valuesContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  justifyContent: 'center',
  maxWidth: '300px',
});

export const valueTag = style({
  padding: '0.5rem 1rem',
  backgroundColor: 'light-dark(rgba(231, 104, 12, 0.1), rgba(231, 104, 12, 0.25))',
  color: theme.foreground.accent,
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: '600',
});

export const objectivesGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.5rem',
  marginTop: '3rem',
  marginBottom: '3.5rem',
  '@media': {
    '(max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '(max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const objectiveCard = style({
  backgroundColor: 'light-dark(rgba(231, 104, 12, 0.04), rgba(231, 104, 12, 0.08))',
  borderRadius: '12px',
  padding: '1.5rem',
  border: '1px solid light-dark(rgba(231, 104, 12, 0.1), rgba(231, 104, 12, 0.15))',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'light-dark(rgba(231, 104, 12, 0.06), rgba(231, 104, 12, 0.12))',
  },
});

export const objectiveTitle = style({
  fontSize: '1.2rem',
  fontWeight: '700',
  color: theme.foreground.accent,
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const objectiveIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  backgroundColor: 'light-dark(rgba(231, 104, 12, 0.15), rgba(231, 104, 12, 0.25))',
  color: theme.foreground.accent,
});

export const objectiveContent = style({
  fontSize: '1rem',
  lineHeight: '1.6',
  color: theme.foreground.default,
});

export const teamSection = style({
  marginTop: '3rem',
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

export const ctaSection = style({
  marginTop: '4rem',
  textAlign: 'center',
});

export const ctaTitle = style({
  fontSize: '1.5rem',
  fontWeight: '700',
  color: theme.foreground.default,
  marginBottom: '1.5rem',
});

export const ctaButton = style({
  display: 'inline-block',
  padding: '0.75rem 2rem',
  backgroundColor: theme.foreground.accent,
  color: 'white',
  fontWeight: '600',
  borderRadius: '30px',
  textDecoration: 'none',
  transition: 'background-color 0.2s ease',
  
  ':hover': {
    backgroundColor: 'light-dark(#c55a0a, #ff8f3e)',
  }
});
