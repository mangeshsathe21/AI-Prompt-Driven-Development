import React from 'react';
import {
  Box, Container, Typography, Stack, IconButton, Divider, Tooltip,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import { personal } from '../data/resumeData';
import { C, DIVIDER } from '../theme';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        borderTop: `1px solid ${DIVIDER}`,
        py: 4,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {/* Branding */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <CodeIcon sx={{ color: C.primary, fontSize: 18 }} aria-hidden="true" />
            <Typography variant="body2" sx={{ color: C.body, fontWeight: 500 }}>
              {personal.name}
            </Typography>
          </Stack>

          {/* Copyright */}
          <Typography variant="caption" sx={{ color: C.body, opacity: 0.7 }}>
            © {YEAR} MANGESH SATHE. Built with React &amp; MUI.
          </Typography>

          {/* Social icons */}
          <Stack direction="row" spacing={0.5}>
            <Tooltip title="LinkedIn">
              <IconButton
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                size="small"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                size="small"
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Email">
              <IconButton
                href={`mailto:${personal.email}`}
                aria-label="Send email"
                size="small"
              >
                <EmailIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
