import React, { useRef } from 'react';
import {
  Box, Container, Typography, Grid, Paper, Chip, Stack,
} from '@mui/material';
import { skills } from '../data/resumeData';
import { C, CARD_BG, CARD_BORDER } from '../theme';
import useFadeIn from '../hooks/useFadeIn';

// Icon per group
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PeopleIcon from '@mui/icons-material/People';

const GROUP_ICONS = {
  Frontend:         <WebIcon fontSize="small" sx={{ color: C.primary }} />,
  Backend:          <StorageIcon fontSize="small" sx={{ color: C.primary }} />,
  'Cloud & DevOps': <CloudIcon fontSize="small" sx={{ color: C.primary }} />,
  'Soft Skills':    <PeopleIcon fontSize="small" sx={{ color: C.primary }} />,
};

export default function Skills() {
  const ref = useRef(null);
  const visible = useFadeIn(ref);

  return (
    <Box
      id="skills"
      component="section"
      aria-labelledby="skills-heading"
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          id="skills-heading"
          variant="h3"
          sx={{ mb: 1, fontSize: { xs: '1.6rem', md: '2rem' } }}
        >
          Skills
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: C.primary, borderRadius: 2, mb: 6 }} />

        <Grid container spacing={3}>
          {skills.map((group) => (
            <Grid item xs={12} sm={6} key={group.group}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: CARD_BG,
                  border: `1px solid ${CARD_BORDER}`,
                }}
              >
                {/* Group heading */}
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2.5 }}>
                  {GROUP_ICONS[group.group]}
                  <Typography variant="h6" sx={{ color: C.heading, fontWeight: 600, fontSize: '0.95rem' }}>
                    {group.group}
                  </Typography>
                </Stack>

                {/* Skill chips */}
                <Box
                  role="list"
                  aria-label={`${group.group} skills`}
                  sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
                >
                  {group.items.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      role="listitem"
                      variant="outlined"
                      size="small"
                      sx={{ fontSize: '0.78rem' }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
