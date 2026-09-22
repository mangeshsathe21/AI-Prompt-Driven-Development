import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  Box, Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import { personal } from '../data/resumeData';
import { C } from '../theme';

// Nav links mapped to section ids — tooltip describes the destination
const NAV_LINKS = [
  { label: 'Home',       href: '#home',       tooltip: 'Go to top'                    },
  { label: 'About',      href: '#about',      tooltip: 'About me'                     },
  { label: 'Experience', href: '#experience', tooltip: 'Work history & achievements'  },
  { label: 'Skills',     href: '#skills',     tooltip: 'Technologies & tools I use'   },
  { label: 'Projects',   href: '#projects',   tooltip: 'Things I\'ve built'            },
  { label: 'Education',  href: '#education',  tooltip: 'Degrees & certifications'     },
  { label: 'Contact',    href: '#contact',    tooltip: 'Get in touch'                 },
];

const DRAWER_WIDTH = 260;

// 1 px orange underline colour — separate from the palette so the accent
// is intentionally distinct from the blue primary tones.
const UNDERLINE_COLOR = '#ff6b2b';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navButton = (link) => {
    const isActive = activeSection === link.href.slice(1);
    return (
      // Tooltip on every desktop nav item
      <Tooltip key={link.href} title={link.tooltip} placement="bottom" arrow>
        <Button
          onClick={() => handleNavClick(link.href)}
          aria-current={isActive ? 'page' : undefined}
          sx={{
            color: isActive ? C.primary : C.body,
            fontWeight: isActive ? 600 : 400,
            fontSize: '0.875rem',
            px: 1.5,
            // 1 px orange underline — always present, highlighted when active
            borderBottom: `1px solid ${isActive ? UNDERLINE_COLOR : 'transparent'}`,
            borderRadius: 0,
            // Smooth underline reveal on hover
            transition: 'color 0.2s, border-color 0.2s',
            '&:hover': {
              color: C.primary,
              backgroundColor: 'transparent',
              borderBottom: `1px solid ${UNDERLINE_COLOR}`,
            },
          }}
        >
          {link.label}
        </Button>
      </Tooltip>
    );
  };

  return (
    <>
      <AppBar position="fixed" component="header" role="banner">
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>

          {/* Logo / Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            <Tooltip title="Portfolio home" placement="bottom" arrow>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
                onClick={() => handleNavClick('#home')}
              >
                <CodeIcon sx={{ color: C.primary, fontSize: 22 }} />
                <Typography
                  variant="h6"
                  component="span"
                  sx={{ color: C.heading, fontWeight: 700, fontSize: '1rem', letterSpacing: 0.5 }}
                >
                  {personal.name}
                </Typography>
              </Box>
            </Tooltip>
          </Box>

          {/* Desktop nav */}
          <Box
            component="nav"
            aria-label="Primary navigation"
            sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}
          >
            {NAV_LINKS.map(navButton)}
          </Box>

          {/* Mobile hamburger */}
          <Tooltip title="Open menu" placement="left" arrow>
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: C.body }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
        PaperProps={{ sx: { width: DRAWER_WIDTH } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1.5 }}>
          <Tooltip title="Close menu" placement="left" arrow>
            <IconButton aria-label="Close navigation menu" onClick={() => setDrawerOpen(false)}>
              <CloseIcon sx={{ color: C.body }} />
            </IconButton>
          </Tooltip>
        </Box>

        <List component="nav" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <ListItem key={link.href} disablePadding>
                <Tooltip title={link.tooltip} placement="right" arrow>
                  <ListItemButton
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? 'page' : undefined}
                    sx={{
                      px: 3,
                      py: 1.25,
                      // Orange left accent bar on active item in drawer
                      borderLeft: isActive
                        ? `3px solid ${UNDERLINE_COLOR}`
                        : '3px solid transparent',
                      '&:hover': { backgroundColor: 'rgba(114,156,194,0.08)' },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        sx: {
                          color: isActive ? C.primary : C.body,
                          fontWeight: isActive ? 600 : 400,
                          fontSize: '0.95rem',
                        },
                      }}
                    />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
