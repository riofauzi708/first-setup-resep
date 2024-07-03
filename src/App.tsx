import React from 'react';
import { MantineProvider } from '@mantine/core';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Navbar />
      <Hero />
      <Footer />
    </MantineProvider>
  );
};

export default App;
