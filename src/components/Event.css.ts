import { style } from '@vanilla-extract/css';
import { theme } from '../theme.css';

export const timelineRow = style({
  display: 'grid',
  gridTemplateColumns: '130px 1fr',
  borderBottom: `1px solid var(--border-color, light-dark(#e5e7eb, #2a2a2a))`,
  ':last-child': {
    borderBottom: 'none',
  },
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr',
    }
  }
});

export const timeColumn = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '1.5rem',
  borderRight: `1px solid var(--border-color, light-dark(#e5e7eb, #2a2a2a))`,
  backgroundColor: 'var(--grayLight, light-dark(#f3f4f6, #2a2a2a))',
  fontSize: '0.95rem',
  fontWeight: '600',
  gap: '0.5rem',
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: '0.75rem',
      paddingBottom: '0.5rem',
      backgroundColor: 'transparent',
      borderRight: 'none',
      borderBottom: `1px solid var(--border-color, light-dark(#e5e7eb, #2a2a2a))`,
      marginLeft: '1rem',
      marginRight: '1rem',
    }
  }
});

export const contentColumn = style({
  padding: '1.5rem',
  '@media': {
    '(max-width: 768px)': {
      padding: '0.75rem 1rem 1.25rem',
    }
  }
});

export const mobileTimeSeparator = style({
  display: 'none',
  fontWeight: '500',
  color: theme.foreground.dimmed,
  '@media': {
    '(max-width: 768px)': {
      display: 'inline',
      margin: '0 0.3rem',
    }
  }
});

export const alternateRow = style({
  backgroundColor: 'var(--grayLight, light-dark(#f3f4f6, #2a2a2a))',
});

// Styles spécifiques aux types d'événements
export const specialRow = style({
  backgroundColor: 'var(--secondaryLight)',
});

export const coffeeBreakRow = style({
  backgroundColor: 'var(--coffeeBreakBg)',
});

export const lunchRow = style({
  backgroundColor: 'var(--primaryLight)',
});

export const keynoteRow = style({
  backgroundColor: 'var(--keynoteBg)',
});

export const closingRow = style({
  backgroundColor: 'var(--secondaryLight)',
});

export const opening = style({
  backgroundColor: 'var(--secondaryLight)',
});

export const keynote = style({
  backgroundColor: 'var(--keynoteBg)',
  borderLeft: `4px solid ${theme.foreground.accent}`,
});

export const lunch = style({
  backgroundColor: 'var(--primaryLight)',
});

export const coffeeBreak = style({
  backgroundColor: 'var(--coffeeBreakBg)',
});

export const closing = style({
  backgroundColor: 'var(--secondaryLight)',
});

// Styles pour les contenus
export const timeSlot = style({
  background: theme.background.element,
  padding: '0.25rem 0.75rem',
  borderRadius: '20px',
  fontWeight: '700',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  fontSize: '0.9rem',
  color: theme.foreground.default,
  display: 'inline-block',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '0.8rem',
      padding: '0.2rem 0.6rem',
    }
  }
});

export const talkContent = style({
  width: '100%',
  position: 'relative',
});

export const talkTitle = style({
  fontSize: '1.25rem',
  fontWeight: '700',
  marginBottom: '0.5rem',
  color: theme.foreground.accent,
});

export const speakerName = style({
  fontSize: '1.1rem',
  fontWeight: '600',
  marginBottom: '1rem',
  color: theme.foreground.default,
});

export const shortDescription = style({
  fontSize: '0.95rem',
  fontWeight: '400',
  fontStyle: 'normal',
  color: theme.foreground.default,
  marginBottom: '1rem',
  lineHeight: '1.5',
});

// Styles pour les abstracts
export const abstractContainer = style({
  position: 'relative',
  margin: '0.5rem 0',
});

export const fullAbstract = style({
  fontSize: '0.95rem',
  color: theme.foreground.default,
  lineHeight: '1.8',
  padding: '0',
  whiteSpace: 'pre-line',
  background: 'transparent',
  borderRadius: '0',
  border: '0',
  height: '0',
  overflow: 'hidden',
  transition: 'all 0.4s ease-in-out',
  opacity: 0,
  margin: '0',
  visibility: 'hidden',
});

export const fullAbstractExpanded = style({
  height: 'auto',
  padding: '0.5rem 0',
  opacity: 1,
  margin: '0.5rem 0',
  border: '0',
  visibility: 'visible',
});

export const toggleButton = style({
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.35rem 0.75rem',
  margin: '0.5rem 0 0',
  backgroundColor: 'transparent',
  color: theme.foreground.dimmed,
  border: `1px solid var(--border-color, light-dark(#e5e7eb, #3a3a3a))`,
  borderRadius: '16px',
  fontWeight: '500',
  fontSize: '0.8rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: 'light-dark(rgba(231, 104, 12, 0.1), rgba(231, 104, 12, 0.2))',
    color: theme.foreground.accent,
  }
});
