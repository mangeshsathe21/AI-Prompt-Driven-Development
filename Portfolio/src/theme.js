import { createTheme } from '@mui/material/styles';

// ─── Strict color palette ────────────────────────────────────────────────────
const C = {
  bg:        '#0f0f11',   // page background, button text on filled
  primary:   '#729cc2',   // buttons, links, active states, highlights
  secondary: '#6b8dbb',   // icons, chip borders, timeline dots, hover
  heading:   '#9eaecf',   // headings and section titles
  body:      '#b8b0bf',   // body text and secondary text
};

// Transparent surface tints (no new hues)
const CARD_BG     = 'rgba(114,156,194,0.06)';
const CARD_BORDER = 'rgba(107,141,187,0.30)';
const DIVIDER     = 'rgba(107,141,187,0.20)';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: C.bg,
      paper:   CARD_BG,
    },
    primary: {
      main:         C.primary,
      contrastText: C.bg,
    },
    secondary: {
      main:         C.secondary,
      contrastText: C.bg,
    },
    text: {
      primary:   C.body,
      secondary: C.heading,
      disabled:  C.secondary,
    },
    divider: DIVIDER,
    // Override MUI semantic colours so nothing outside the palette appears
    error: {
      main:  C.secondary,
      light: C.body,
      dark:  C.primary,
      contrastText: C.bg,
    },
    warning: {
      main:  C.secondary,
      light: C.body,
      dark:  C.primary,
      contrastText: C.bg,
    },
    success: {
      main:  C.primary,
      light: C.body,
      dark:  C.secondary,
      contrastText: C.bg,
    },
    info: {
      main:  C.primary,
      light: C.body,
      dark:  C.secondary,
      contrastText: C.bg,
    },
    action: {
      active:           C.primary,
      hover:            'rgba(114,156,194,0.08)',
      selected:         'rgba(114,156,194,0.16)',
      disabled:         C.secondary,
      disabledBackground: 'rgba(107,141,187,0.12)',
    },
  },

  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { color: C.heading, fontWeight: 700 },
    h2: { color: C.heading, fontWeight: 700 },
    h3: { color: C.heading, fontWeight: 600 },
    h4: { color: C.heading, fontWeight: 600 },
    h5: { color: C.heading, fontWeight: 600 },
    h6: { color: C.heading, fontWeight: 600 },
    body1: { color: C.body },
    body2: { color: C.body },
    subtitle1: { color: C.body },
    subtitle2: { color: C.heading },
    caption:   { color: C.body },
  },

  shape: { borderRadius: 12 },

  components: {
    // ── CssBaseline ──────────────────────────────────────────────────────────
    MuiCssBaseline: {
      styleOverrides: {
        '*': { scrollBehavior: 'smooth' },
        body: { backgroundColor: C.bg, color: C.body },
        '::-webkit-scrollbar': { width: '6px' },
        '::-webkit-scrollbar-track': { background: C.bg },
        '::-webkit-scrollbar-thumb': { background: CARD_BORDER, borderRadius: '3px' },
        // Focus outline – accessible, palette-only
        '*:focus-visible': {
          outline: `2px solid ${C.primary}`,
          outlineOffset: '2px',
        },
      },
    },

    // ── AppBar ───────────────────────────────────────────────────────────────
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: `rgba(15,15,17,0.90)`,
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${CARD_BORDER}`,
          boxShadow: 'none',
        },
      },
    },

    // ── Buttons ──────────────────────────────────────────────────────────────
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
        },
        contained: {
          backgroundColor: C.primary,
          color: C.bg,
          boxShadow: 'none',
          '&:hover': { backgroundColor: C.secondary, boxShadow: 'none' },
        },
        outlined: {
          borderColor: C.primary,
          color: C.primary,
          '&:hover': {
            borderColor: C.secondary,
            color: C.secondary,
            backgroundColor: 'rgba(114,156,194,0.08)',
          },
        },
        text: {
          color: C.primary,
          '&:hover': { color: C.secondary, backgroundColor: 'rgba(114,156,194,0.08)' },
        },
      },
    },

    // ── Cards ────────────────────────────────────────────────────────────────
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: CARD_BG,
          border: `1px solid ${CARD_BORDER}`,
          boxShadow: 'none',
          transition: 'border-color 0.25s, transform 0.25s',
          '&:hover': {
            borderColor: C.primary,
            transform: 'translateY(-3px)',
          },
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: { '&:last-child': { paddingBottom: 16 } },
      },
    },

    // ── Paper ────────────────────────────────────────────────────────────────
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: CARD_BG,
          backgroundImage: 'none',
          border: `1px solid ${CARD_BORDER}`,
          boxShadow: 'none',
        },
      },
    },

    // ── Divider ──────────────────────────────────────────────────────────────
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: DIVIDER },
      },
    },

    // ── Chips ────────────────────────────────────────────────────────────────
    MuiChip: {
      styleOverrides: {
        root: {
          borderColor: C.secondary,
          color: C.body,
          backgroundColor: 'transparent',
          fontWeight: 500,
        },
        icon: { color: C.secondary },
      },
    },

    // ── TextField / Input ────────────────────────────────────────────────────
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': { borderColor: CARD_BORDER },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: C.secondary },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: C.primary },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: C.secondary },
        },
        input: { color: C.body },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: C.body,
          '&.Mui-focused': { color: C.primary },
          '&.Mui-error':   { color: C.secondary },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: C.body,
          '&.Mui-error': { color: C.secondary },
        },
      },
    },

    // ── Snackbar / Alert ─────────────────────────────────────────────────────
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: CARD_BG,
          border: `1px solid ${C.primary}`,
          color: C.heading,
        },
        icon: { color: C.primary },
      },
    },

    // ── Drawer ───────────────────────────────────────────────────────────────
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: C.bg,
          borderRight: `1px solid ${CARD_BORDER}`,
        },
      },
    },

    // ── IconButton ───────────────────────────────────────────────────────────
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: C.secondary,
          '&:hover': { color: C.primary, backgroundColor: 'rgba(114,156,194,0.08)' },
        },
      },
    },

    // ── Tooltip ──────────────────────────────────────────────────────────────
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: CARD_BG,
          border: `1px solid ${CARD_BORDER}`,
          color: C.body,
        },
      },
    },

    // ── Timeline (MUI Lab) ───────────────────────────────────────────────────
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          backgroundColor: C.secondary,
          boxShadow: 'none',
          border: `2px solid ${C.primary}`,
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: { backgroundColor: CARD_BORDER },
      },
    },
  },
});

export default theme;
export { C, CARD_BG, CARD_BORDER, DIVIDER };
