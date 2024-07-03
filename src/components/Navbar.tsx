import React from 'react';
import { Container, Grid, Text, Button } from '@mantine/core';

const Navbar: React.FC = () => {
  return (
    <Container size="xl">
      <Grid align="center" justify="space-between" style={{ height: 60 }}>
        <Text size="lg">
          Resep Masakan
        </Text>
        <Button variant="outline" color="dark">
          Sign In
        </Button>
      </Grid>
    </Container>
  );
};

export default Navbar;
