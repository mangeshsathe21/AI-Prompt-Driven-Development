import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// Section components
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Experience from './components/Experience';
import Skills     from './components/Skills';
import Projects   from './components/Projects';
import Education  from './components/Education';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline injects global resets and dark background */}
      <CssBaseline />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content – offset by AppBar height */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}
