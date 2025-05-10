import { style } from '@vanilla-extract/css';
import { theme } from '../theme.css';

export const timelineContainer = style({
  border: theme.border,
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  backgroundColor: theme.background.element,
  marginBottom: '2.5rem',
  maxWidth: '100%', // Assurer que le planning n'excède pas le conteneur parent
});

export const timelineHeader = style({
  display: 'grid',
  gridTemplateColumns: '130px 1fr',
  backgroundColor: theme.background.element,
  color: theme.foreground.default,
  fontWeight: '600',
  borderBottom: `2px solid ${theme.foreground.accent}`,
  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    }
  }
});

export const headerColumn = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.75rem',
  backgroundColor: theme.background.element,
});

export const timeColumnHeader = style({
  gridColumn: '1 / 2',
});

export const contentColumnHeader = style({
  gridColumn: '2 / 3',
});

export const headerLabel = style({
  fontSize: '1.1rem',
  fontWeight: '700',
  color: theme.foreground.accent,
  position: 'relative',
  paddingBottom: '4px',
});

