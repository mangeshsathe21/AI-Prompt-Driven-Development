import React from 'react';
import {
  Box, Container, Typography, Button, Stack, IconButton, Tooltip,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { personal } from '../data/resumeData';
import { C } from '../theme';

// Reusable fade-in keyframe
const fadeUp = {
  '@keyframes fadeUp': {
    from: { opacity: 0, transform: 'translateY(24px)' },
    to:   { opacity: 1, transform: 'translateY(0)' },
  },
};

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      component="section"
      aria-label="Hero introduction"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 10, md: 12 },
        pb: { xs: 8, md: 10 },
        // Subtle radial glow from palette primary
        background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(114,156,194,0.10) 0%, transparent 70%), ${C.bg}`,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }} textAlign={{ xs: 'center', md: 'left' }}>

          {/* Eyebrow label */}
          <Typography
            variant="overline"
            sx={{
              color: C.primary,
              letterSpacing: 4,
              fontSize: '0.75rem',
              fontWeight: 600,
              ...fadeUp,
              animation: 'fadeUp 0.6s ease both',
              animationDelay: '0.1s',
            }}
          >
            Hello, I&apos;m
          </Typography>

          {/* Name */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem' },
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
              color: C.heading,
              ...fadeUp,
              animation: 'fadeUp 0.6s ease both',
              animationDelay: '0.2s',
            }}
          >
            {personal.name}
          </Typography>

          {/* Title */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.4rem', md: '1.8rem' },
              fontWeight: 500,
              color: C.primary,
              ...fadeUp,
              animation: 'fadeUp 0.6s ease both',
              animationDelay: '0.3s',
            }}
          >
            {personal.title}
          </Typography>

          {/* Summary */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.15rem' },
              color: C.body,
              maxWidth: 520,
              lineHeight: 1.7,
              ...fadeUp,
              animation: 'fadeUp 0.6s ease both',
              animationDelay: '0.4s',
            }}
          >
            {personal.summary}
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              ...fadeUp,
              animation: 'fadeUp 0.6s ease both',
              animationDelay: '0.5s',
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={scrollToContact}
              aria-label="Scroll to contact section"
            >
              Contact Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<DownloadIcon />}
              href={personal.resumePdf}
              download
              aria-label="Download resume PDF"
            >
              Download Resume
            </Button>
          </Stack>

          {/* Social icons */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              ...fadeUp,
              animation: 'fadeUp 0.6s ease both',
              animationDelay: '0.6s',
            }}
          >
            <Tooltip title="LinkedIn">
              <IconButton
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                size="large"
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                size="large"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email">
              <IconButton
                href={`mailto:${personal.email}`}
                aria-label="Send email"
                size="large"
              >
                <EmailIcon />
              </IconButton>
            </Tooltip>
          </Stack>

        </Stack>
      </Container>
    </Box>
  );
}
