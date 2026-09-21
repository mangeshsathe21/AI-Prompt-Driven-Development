import React, { useRef } from 'react';
import {
  Box, Container, Typography, Paper,
} from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
  TimelineDot, TimelineContent, TimelineOppositeContent,
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { experience } from '../data/resumeData';
import { C, CARD_BG, CARD_BORDER } from '../theme';
import useFadeIn from '../hooks/useFadeIn';

export default function Experience() {
  const ref = useRef(null);
  const visible = useFadeIn(ref);

  return (
    <Box
      id="experience"
      component="section"
      aria-labelledby="experience-heading"
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
          id="experience-heading"
          variant="h3"
          sx={{ mb: 1, fontSize: { xs: '1.6rem', md: '2rem' } }}
        >
          Experience
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: C.primary, borderRadius: 2, mb: 6 }} />

        <Timeline position="alternate-reverse" sx={{ p: 0 }}>
          {experience.map((job, index) => (
            <TimelineItem key={index}>
              {/* Date on opposite side */}
              <TimelineOppositeContent
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'flex-start',
                  pt: 2.5,
                  color: C.body,
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  flex: 0.3,
                }}
              >
                {job.period}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot aria-hidden="true">
                  <WorkIcon sx={{ fontSize: 16, color: C.primary }} />
                </TimelineDot>
                {index < experience.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent sx={{ pt: 1, pb: 4 }}>
                <Paper
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    bgcolor: CARD_BG,
                    border: `1px solid ${CARD_BORDER}`,
                  }}
                >
                  {/* Role */}
                  <Typography
                    variant="h6"
                    sx={{ color: C.heading, fontWeight: 700, fontSize: '1rem' }}
                  >
                    {job.role}
                  </Typography>

                  {/* Company */}
                  <Typography
                    variant="subtitle2"
                    sx={{ color: C.primary, fontWeight: 600, mb: 0.5 }}
                  >
                    {job.company}
                  </Typography>

                  {/* Period – shown inline on mobile (hidden from TimelineOppositeContent) */}
                  <Typography
                    variant="caption"
                    sx={{
                      display: { xs: 'block', sm: 'none' },
                      color: C.body,
                      fontStyle: 'italic',
                      mb: 1.5,
                    }}
                  >
                    {job.period}
                  </Typography>

                  {/* Achievements */}
                  <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', mt: 1.5 }}>
                    {job.bullets.map((bullet, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}
                      >
                        <FiberManualRecordIcon
                          aria-hidden="true"
                          sx={{ fontSize: 8, color: C.secondary, mt: '6px', flexShrink: 0 }}
                        />
                        <Typography variant="body2" sx={{ color: C.body, lineHeight: 1.7 }}>
                          {bullet}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
