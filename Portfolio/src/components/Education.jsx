import React, { useRef } from 'react';
import {
  Box, Container, Typography, Grid, Paper, Stack, Chip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import { education, certifications } from '../data/resumeData';
import { C, CARD_BG, CARD_BORDER } from '../theme';
import useFadeIn from '../hooks/useFadeIn';

export default function Education() {
  const ref = useRef(null);
  const visible = useFadeIn(ref);

  return (
    <Box
      id="education"
      component="section"
      aria-labelledby="education-heading"
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
          id="education-heading"
          variant="h3"
          sx={{ mb: 1, fontSize: { xs: '1.6rem', md: '2rem' } }}
        >
          Education & Certifications
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: C.primary, borderRadius: 2, mb: 6 }} />

        <Grid container spacing={4}>
          {/* Education */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h5"
              component="h3"
              sx={{ color: C.heading, fontWeight: 600, fontSize: '1rem', mb: 3 }}
            >
              Education
            </Typography>

            {education.map((edu) => (
              <Paper
                key={edu.degree}
                sx={{ p: 3, bgcolor: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
              >
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <SchoolIcon aria-hidden="true" sx={{ color: C.primary, mt: 0.3 }} />
                  <Box>
                    <Typography variant="h6" sx={{ color: C.heading, fontWeight: 700, fontSize: '0.95rem' }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2" sx={{ color: C.primary, fontWeight: 600, mt: 0.25 }}>
                      {edu.institution}
                    </Typography>
                    <Typography variant="caption" sx={{ color: C.body, display: 'block', mt: 0.25 }}>
                      {edu.period}
                    </Typography>
                    {edu.detail && (
                      <Typography variant="body2" sx={{ color: C.body, mt: 1, lineHeight: 1.6 }}>
                        {edu.detail}
                      </Typography>
                    )}
                  </Box>
                </Stack>
              </Paper>
            ))}
          </Grid>

          {/* Certifications */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h5"
              component="h3"
              sx={{ color: C.heading, fontWeight: 600, fontSize: '1rem', mb: 3 }}
            >
              Certifications
            </Typography>

            <Stack spacing={2}>
              {certifications.map((cert) => (
                <Paper
                  key={cert.name}
                  sx={{ p: 2.5, bgcolor: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <VerifiedIcon aria-hidden="true" sx={{ color: C.primary, flexShrink: 0 }} />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1" sx={{ color: C.heading, fontWeight: 600, fontSize: '0.9rem' }}>
                        {cert.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: C.body }}>
                        {cert.issuer}
                      </Typography>
                    </Box>
                    <Chip
                      label={cert.year}
                      variant="outlined"
                      size="small"
                      sx={{ fontSize: '0.72rem' }}
                    />
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
