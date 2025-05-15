import { style } from "@vanilla-extract/css";
import { card } from "../utils.css";
import { theme } from "../theme.css";

export const speaker = style([
  card(),
  {
    transition: theme.transition,
    transitionDuration: ".5s",

    background: theme.background.element,

    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.large,

    selectors: {
      [`&:hover`]: {
        borderColor: theme.foreground.accent,
        boxShadow: `0px 0px 12px ${theme.foreground.accent}`,
      },
    },
  },
]);

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

export const emptyState = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5em",
  color: theme.foreground.default,
  height: "100%",
  width: "100%",
  padding: theme.spacing.medium,
  position: "relative",
  "::before": {
    content: "'?'",
    position: "absolute",
    fontSize: "3em",
    color: theme.foreground.dimmed,
    opacity: 0.7,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export const speakerCard = style({
  backgroundColor: theme.background.element,
  borderRadius: '12px',
  padding: '2rem',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  marginBottom: '2.5rem',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: '1px solid light-dark(rgba(0,0,0,0.05), rgba(255,255,255,0.05))',
  
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
  }
});

export const speakerHeader = style({
  display: 'flex',
  gap: '1.5rem',
  marginBottom: '1.5rem',
  
  '@media': {
    '(max-width: 640px)': {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }
  }
});

export const avatarContainer = style({
  flexShrink: 0,
  width: '120px', 
  height: '120px',
  position: 'relative'
});

export const avatar = style({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '3px solid',
  borderColor: theme.foreground.accent,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
});

export const avatarPlaceholder = style({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.foreground.accent,
  color: 'white',
  fontSize: '2.5rem',
  fontWeight: '700',
  textTransform: 'uppercase',
  border: '3px solid',
  borderColor: theme.foreground.accent,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
});

export const speakerInfo = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const speakerName = style({
  fontSize: '1.75rem',
  fontWeight: '700',
  color: theme.foreground.default,
  marginBottom: '0.5rem',
});

export const speakerTitle = style({
  fontSize: '1.1rem',
  color: theme.foreground.dimmed,
  marginBottom: '1rem',
});

export const speakerCompany = style({
  fontWeight: '600',
  color: theme.foreground.default,
});

export const socialLinks = style({
  display: 'flex',
  gap: '0.75rem',
  marginTop: '0.5rem',
  
  '@media': {
    '(max-width: 640px)': {
      justifyContent: 'center',
    }
  }
});

export const socialLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  color: theme.foreground.dimmed,
  backgroundColor: 'light-dark(rgba(0,0,0,0.04), rgba(255,255,255,0.05))',
  transition: 'all 0.2s ease',
  
  ':hover': {
    color: theme.foreground.accent,
    backgroundColor: 'light-dark(rgba(231, 104, 12, 0.1), rgba(231, 104, 12, 0.2))',
    transform: 'translateY(-3px)',
  }
});

export const speakerBio = style({
  fontSize: '1.05rem',
  lineHeight: '1.7',
  color: theme.foreground.default,
  marginBottom: '2rem',
  paddingBottom: '1.5rem',
  borderBottom: '1px solid light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.1))',
});

export const talkSection = style({
  marginTop: '1rem',
});

export const talkTitle = style({
  fontSize: '1.25rem',
  fontWeight: '700',
  color: theme.foreground.default,
  marginBottom: '1rem',
});

export const talkLink = style({
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
});

export const talkCard = style({
  padding: '1.5rem',
  borderRadius: '8px',
  backgroundColor: 'light-dark(rgba(0,0,0,0.02), rgba(255,255,255,0.03))',
  border: '1px solid light-dark(rgba(0,0,0,0.08), rgba(255,255,255,0.08))',
  transition: 'all 0.2s ease',
  
  ':hover': {
    backgroundColor: 'light-dark(rgba(231, 104, 12, 0.05), rgba(231, 104, 12, 0.1))',
    borderColor: theme.foreground.accent,
  }
});

export const talkName = style({
  fontSize: '1.2rem',
  fontWeight: '700',
  color: theme.foreground.accent,
  marginBottom: '0.75rem',
});

export const talkDescription = style({
  fontSize: '1rem',
  color: theme.foreground.default,
  marginBottom: '1.5rem',
  lineHeight: '1.6',
});

export const talkMeta = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  
  '@media': {
    '(max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '0.75rem',
    }
  }
});

export const talkTime = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: theme.foreground.dimmed,
  fontSize: '0.95rem',
});

export const viewTalkButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: theme.foreground.accent,
  fontSize: '0.95rem',
  fontWeight: '500',
  transition: 'transform 0.2s ease',
  
  ':hover': {
    transform: 'translateX(4px)',
  }
});
