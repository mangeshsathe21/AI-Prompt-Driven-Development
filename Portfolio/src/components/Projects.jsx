import React, { useRef } from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  CardActions, Chip, Button, Stack,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projects } from '../data/resumeData';
import { C, CARD_BORDER } from '../theme';
import useFadeIn from '../hooks/useFadeIn';

export default function Projects() {
  const ref = useRef(null);
  const visible = useFadeIn(ref);

  return (
    <Box
      id="projects"
      component="section"
      aria-labelledby="projects-heading"
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
          id="projects-heading"
          variant="h3"
          sx={{ mb: 1, fontSize: { xs: '1.6rem', md: '2rem' } }}
        >
          Projects
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: C.primary, borderRadius: 2, mb: 6 }} />

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} key={project.title}>
              <Card
                component="article"
                aria-label={project.title}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ color: C.heading, fontWeight: 700, mb: 1.5, fontSize: '1rem' }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: C.body, lineHeight: 1.7, mb: 2.5 }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tech chips */}
                  <Box
                    role="list"
                    aria-label="Technologies used"
                    sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}
                  >
                    {project.tech.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        role="listitem"
                        variant="outlined"
                        size="small"
                        sx={{ fontSize: '0.7rem', height: 22 }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2, pt: 0, gap: 1 }}>
                  {project.live && (
                    <Button
                      variant="outlined"
                      size="small"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LaunchIcon sx={{ fontSize: '0.9rem !important' }} />}
                      aria-label={`Live demo of ${project.title}`}
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button
                    variant={project.live ? 'text' : 'outlined'}
                    size="small"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon sx={{ fontSize: '0.9rem !important' }} />}
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
