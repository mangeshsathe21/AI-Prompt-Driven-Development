import React, { useRef } from 'react';
import {
  Box, Container, Typography, Grid, Paper, Stack, Avatar,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { about, stats, personal } from '../data/resumeData';
import { C, CARD_BG, CARD_BORDER } from '../theme';
import useFadeIn from '../hooks/useFadeIn';

export default function About() {
  const ref = useRef(null);
  const visible = useFadeIn(ref);

  // Get initials from name
  const initials = personal.name.split(' ').map((n) => n[0]).join('');

  return (
    <Box
      id="about"
      component="section"
      aria-labelledby="about-heading"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <Typography
          id="about-heading"
          variant="h3"
          sx={{ mb: 1, fontSize: { xs: '1.6rem', md: '2rem' } }}
        >
          About Me
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: C.primary, borderRadius: 2, mb: 6 }} />

        <Grid container spacing={5} alignItems="center">
          {/* Avatar + name column */}
          <Grid item xs={12} md={4}>
            <Stack alignItems="center" spacing={3}>
              <Avatar
                aria-label={`${personal.name} avatar`}
                sx={{
                  width: 140,
                  height: 140,
                  bgcolor: 'rgba(114,156,194,0.15)',
                  border: `2px solid ${C.primary}`,
                  fontSize: '2.8rem',
                  fontWeight: 700,
                  color: C.primary,
                }}
              >
                {initials}
              </Avatar>
              <Box textAlign="center">
                <Typography variant="h5" sx={{ color: C.heading, fontWeight: 700 }}>
                  {personal.name}
                </Typography>
                <Typography variant="body2" sx={{ color: C.primary, mt: 0.5 }}>
                  {personal.title}
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Bio + stats column */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.9, color: C.body, mb: 4, whiteSpace: 'pre-line' }}
            >
              {about}
            </Typography>

            {/* Stats row */}
            <Grid container spacing={2}>
              {stats.map((stat) => (
                <Grid item xs={6} sm={3} key={stat.label}>
                  <Paper
                    sx={{
                      p: 2.5,
                      textAlign: 'center',
                      bgcolor: CARD_BG,
                      border: `1px solid ${CARD_BORDER}`,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: C.primary, fontWeight: 800, fontSize: '1.8rem' }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: C.body, fontSize: '0.75rem', mt: 0.5, display: 'block' }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
