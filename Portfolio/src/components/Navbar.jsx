import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  Box, useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import { personal } from '../data/resumeData';
import { C } from '../theme';

// Nav links mapped to section ids
const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

const DRAWER_WIDTH = 260;

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
      <Button
        key={link.href}
        onClick={() => handleNavClick(link.href)}
        aria-current={isActive ? 'page' : undefined}
        sx={{
          color: isActive ? C.primary : C.body,
          fontWeight: isActive ? 600 : 400,
          fontSize: '0.875rem',
          px: 1.5,
          '&:hover': { color: C.primary, backgroundColor: 'transparent' },
        }}
      >
        {link.label}
      </Button>
    );
  };

  return (
    <>
      <AppBar position="fixed" component="header" role="banner">
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
          {/* Logo / Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            <CodeIcon sx={{ color: C.primary, fontSize: 22 }} />
            <Typography
              variant="h6"
              component="span"
              sx={{ color: C.heading, fontWeight: 700, fontSize: '1rem', letterSpacing: 0.5 }}
            >
              {personal.name}
            </Typography>
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
          <IconButton
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: C.body }}
          >
            <MenuIcon />
          </IconButton>
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
          <IconButton aria-label="Close navigation menu" onClick={() => setDrawerOpen(false)}>
            <CloseIcon sx={{ color: C.body }} />
          </IconButton>
        </Box>

        <List component="nav" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  sx={{
                    px: 3,
                    py: 1.25,
                    borderLeft: isActive ? `3px solid ${C.primary}` : '3px solid transparent',
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
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
