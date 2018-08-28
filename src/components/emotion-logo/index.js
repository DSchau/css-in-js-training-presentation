import React from 'react';
import styled from 'styled-components';
import { Image } from 'spectacle';

import logo from './emotion-optimized.png';

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 32px;
  color: black;
`;

export function EmotionLogo({ maxHeight = '35vh', showTitle = true }) {
  return (
    <Container>
      <Image src={logo} style={{ maxHeight }} />
      {showTitle && <Title>emotion</Title>}
    </Container>
  );
}
