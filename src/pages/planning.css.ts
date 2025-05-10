import { style } from '@vanilla-extract/css';
import { theme } from '../theme.css';

const colors = {
  primary: theme.foreground.accent,
  dark: theme.foreground.default,
  light: theme.background.default,
  gray: 'light-dark(#6b7280, #9ca3af)',
  grayLight: 'light-dark(#f3f4f6, #2a2a2a)',
  grayDark: 'light-dark(#4b5563, #d1d5db)',
  borderColor: 'light-dark(#e5e7eb, #2a2a2a)',
  white: theme.background.element,
};

export const planningPage = style({
  backgroundColor: colors.light,
  minHeight: '100vh',
  color: colors.dark,
});

export const planningContainer = style({
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '3rem 1.5rem 5rem', // Standardisation du padding vertical
  '@media': {
    '(max-width: 768px)': {
      padding: '2rem 1rem 3rem',
    },
  },
});

export const pageHeader = style({
  textAlign: 'center',
  marginBottom: '3.5rem',
  position: 'relative',
});

export const pageTitle = style({
  fontSize: '2.75rem',
  fontWeight: '800',
  color: theme.foreground.default,
  marginBottom: '0.75rem',
  letterSpacing: '-0.025em',
});

export const pageSubtitle = style({
  fontSize: '1.25rem',
  color: theme.foreground.dimmed,
  fontWeight: '500',
});


// Pied de page
export const planningFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '2rem',
  fontSize: '0.9rem',
  color: theme.foreground.dimmed,
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'column',
      gap: '1rem',
      textAlign: 'center',
    },
  },
});

export const speakersLink = style({
  color: theme.foreground.accent,
  fontWeight: '600',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  ':hover': {
    color: 'light-dark(#c55a0a, #ff8f3e)',
    textDecoration: 'underline',
  },
});
