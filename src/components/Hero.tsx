import React from 'react';
import { Container, Title, Text, Button, Group } from '@mantine/core';

const Hero: React.FC = () => {
  return (
    <Container>
      <Title>
        Temukan Resep Masakan Favorit Anda
      </Title>
      <Text size="lg" mb={30}>
        Jelajahi berbagai resep masakan dari seluruh dunia.
      </Text>
      <Group>
        <Button size="md">Mulai Sekarang</Button>
      </Group>
    </Container>
  );
};

export default Hero;
