import React, { useRef, useState } from 'react';
import {
  Box, Container, Typography, Grid, Paper, TextField, Button,
  Stack, Snackbar, Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { personal } from '../data/resumeData';
import { C, CARD_BG, CARD_BORDER } from '../theme';
import useFadeIn from '../hooks/useFadeIn';

// Contact details list
const DETAILS = [
  { icon: <EmailIcon />, label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
  { icon: <PhoneIcon />, label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}` },
  { icon: <LocationOnIcon />, label: 'Location', value: personal.location, href: null },
];

// Simple field validation
function validate(fields) {
  const errors = {};
  if (!fields.name.trim())            errors.name    = 'Name is required.';
  if (!fields.email.trim())           errors.email   = 'Email is required.';
  else if (!/\S+@\S+\.\S+/.test(fields.email)) errors.email = 'Enter a valid email address.';
  if (!fields.message.trim())         errors.message = 'Message is required.';
  else if (fields.message.trim().length < 10)  errors.message = 'Message must be at least 10 characters.';
  return errors;
}

export default function Contact() {
  const ref = useRef(null);
  const visible = useFadeIn(ref);

  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [snackOpen, setSnackOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Simulate submission – no backend
    setFields({ name: '', email: '', message: '' });
    setErrors({});
    setSnackOpen(true);
  };

  return (
    <Box
      id="contact"
      component="section"
      aria-labelledby="contact-heading"
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
          id="contact-heading"
          variant="h3"
          sx={{ mb: 1, fontSize: { xs: '1.6rem', md: '2rem' } }}
        >
          Contact
        </Typography>
        <Box sx={{ width: 48, height: 3, bgcolor: C.primary, borderRadius: 2, mb: 6 }} />

        <Grid container spacing={5}>
          {/* Contact details */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: C.heading, fontWeight: 600, mb: 3, fontSize: '1rem' }}>
              Get in Touch
            </Typography>

            <Stack spacing={2.5}>
              {DETAILS.map(({ icon, label, value, href }) => (
                <Stack key={label} direction="row" spacing={2} alignItems="center">
                  <Box
                    aria-hidden="true"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: '10px',
                      bgcolor: 'rgba(114,156,194,0.10)',
                      border: `1px solid ${CARD_BORDER}`,
                      color: C.primary,
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: C.body, display: 'block' }}>
                      {label}
                    </Typography>
                    {href ? (
                      <Typography
                        component="a"
                        href={href}
                        variant="body2"
                        sx={{
                          color: C.primary,
                          textDecoration: 'none',
                          fontWeight: 500,
                          '&:hover': { color: C.secondary, textDecoration: 'underline' },
                        }}
                      >
                        {value}
                      </Typography>
                    ) : (
                      <Typography variant="body2" sx={{ color: C.heading, fontWeight: 500 }}>
                        {value}
                      </Typography>
                    )}
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>

          {/* Contact form */}
          <Grid item xs={12} md={8}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              sx={{ p: { xs: 3, md: 4 }, bgcolor: CARD_BG, border: `1px solid ${CARD_BORDER}` }}
            >
              <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    required
                    inputProps={{ 'aria-label': 'Your name' }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    required
                    inputProps={{ 'aria-label': 'Email address' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={5}
                    value={fields.message}
                    onChange={handleChange}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    required
                    inputProps={{ 'aria-label': 'Your message' }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    aria-label="Send message"
                    sx={{ px: 4 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={snackOpen}
        autoHideDuration={5000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="success"
          variant="outlined"
          sx={{ width: '100%' }}
        >
          Message sent! I&apos;ll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
