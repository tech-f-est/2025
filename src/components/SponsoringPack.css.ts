import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { card } from "../utils.css";
import { theme } from "../theme.css";

export const contact = style({
  display: "block",

  cursor: "pointer",
  textDecoration: "none",

  color: theme.foreground.accent,
  fontWeight: 500,
  textAlign: "center",

  padding: theme.spacing.small,
  border: theme.border,
  borderColor: theme.foreground.accent,
  background: theme.background.element,
  borderRadius: 8,

  transition: theme.transition,

  ":hover": {
    background: theme.foreground.accent,
    color: theme.foreground.default,
  },
});

export const pack = style([
  card(),
  {
    transition: theme.transition,
    transitionDuration: ".5s",

    background: theme.background.element,

    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.large,

    selectors: {
      [`&:has(${contact}:hover)`]: {
        borderColor: theme.foreground.accent,
        boxShadow: `0px 0px 12px ${theme.foreground.accent}`,
      },
    },
  },
]);

export const packTitle = style({
  fontSize: '2rem',
  fontWeight: '700',
  textAlign: 'center',
  position: 'relative',
  marginBottom: '0.75rem',
  color: theme.foreground.accent,
  padding: '0 0 0.75rem 0',
  
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    backgroundColor: theme.foreground.accent,
    borderRadius: '2px',
  }
});

export const price = style({
  fontWeight: '700',
  fontSize: '2.5em',
  textAlign: 'center',
  color: theme.foreground.default,
  marginBottom: '0.5rem',
  letterSpacing: '-0.03em',
  
  selectors: {
    '&::after': {
      content: 'HT',
      fontSize: '0.4em',
      verticalAlign: 'super',
      marginLeft: '0.2rem',
      fontWeight: '500',
      color: theme.foreground.dimmed,
    },
  },
});

export const features = style({
  listStyle: 'none',
  padding: '1.5rem',
  margin: '0',
  backgroundColor: 'light-dark(rgba(0,0,0,0.02), rgba(255,255,255,0.03))',
  borderRadius: '10px',
});

export const feature = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.75rem 0',
  borderBottom: `1px solid light-dark(rgba(0,0,0,0.06), rgba(255,255,255,0.08))`,
  
  ':last-child': {
    borderBottom: 'none',
    paddingBottom: 0
  },
  
  ':first-child': {
    paddingTop: 0
  },
});

export const featureLabel = style({
  fontWeight: '500',
  color: theme.foreground.default,
});

export const featureValue = style({
  fontWeight: '600',
  color: theme.foreground.accent,
  backgroundColor: 'light-dark(rgba(231, 104, 12, 0.1), rgba(231, 104, 12, 0.2))',
  padding: '0.3rem 0.8rem',
  borderRadius: '20px',
  fontSize: '0.9rem',
});

export const packBadge = style({
  position: 'absolute',
  top: '-12px',
  right: '20px',
  backgroundColor: 'light-dark(#6B8E23, #8FBC8F)',
  color: 'white',
  fontSize: '0.8rem',
  fontWeight: '600',
  padding: '0.25rem 0.75rem',
  borderRadius: '20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
  letterSpacing: '0.02em',
});

// Variants pour chaque niveau de pack
export const packVariants = {
  jaumont: style({
    borderTop: '4px solid light-dark(#6B8E23, #8FBC8F)',
    position: 'relative',
  }),
  bergamote: style({
    borderTop: '4px solid light-dark(#2A6B9C, #64A0D0)',
    position: 'relative',
    transform: 'scale(1.02)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  }),
  stanislas: style({
    borderTop: '4px solid light-dark(#9C2A2A, #E67373)',
    position: 'relative',
    transform: 'scale(1.05)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  }),
};

export const recommendedBadge = style({
  position: 'absolute',
  top: '-12px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'light-dark(#2A6B9C, #64A0D0)',
  color: 'white',
  fontSize: '0.8rem',
  fontWeight: '700',
  padding: '0.3rem 1rem',
  borderRadius: '20px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
});

export const premiumBadge = style({
  position: 'absolute',
  top: '-12px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'linear-gradient(135deg, #FF8C00, #E7680C)',
  color: 'white',
  fontSize: '0.8rem',
  fontWeight: '700',
  padding: '0.3rem 1rem',
  borderRadius: '20px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
});

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

export const details = styleVariants({
  on: {},
  off: { color: theme.foreground.dimmed },
});
globalStyle(`${details.on} em`, {
  fontStyle: "normal",
  fontWeight: 700,
});
