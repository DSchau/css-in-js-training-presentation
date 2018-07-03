import React from 'react';
import styled from 'styled-components';
import { Image } from 'spectacle';

import logo from './polished.png';

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

export function PolishedLogo({ showTitle = true }) {
  return (
    <Container>
      <Image src={logo} />
      {showTitle && <Title>polished</Title>}
    </Container>
  );
}
