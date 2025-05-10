import { style } from '@vanilla-extract/css';
import { theme } from '../theme.css';

export const page = style({
  backgroundColor: theme.background.default,
  color: theme.foreground.default,
  minHeight: '100vh',
  paddingBottom: '4rem',
});

export const container = style({
  maxWidth: '1000px', // Confirmer que c'est bien 1000px
  margin: '0 auto',
  padding: '3rem 1.5rem', // Standardiser le padding vertical
  '@media': {
    '(max-width: 768px)': {
      padding: '2rem 1rem',
    }
  }
});

export const pageTitle = style({
  fontSize: '3rem',
  fontWeight: '800',
  textAlign: 'center',
  color: theme.foreground.default,
  marginBottom: '1rem',
  letterSpacing: '-0.03em',
});

export const pageDescription = style({
  fontSize: '1.25rem',
  color: theme.foreground.dimmed,
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto 4rem',
  lineHeight: 1.6,
});

export const speakers = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '3rem',
});
