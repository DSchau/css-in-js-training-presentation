import React from 'react';
import styled from 'styled-components';
import { Image } from 'spectacle';

import logo from './react.svg';
import { SPIN } from './animations';

const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const SpinningImage = styled(Image)`
  animation: ${SPIN} infinite 20s linear;
`;

const Title = styled.h1`
  font-size: 32px;
  color: white;
`;

export function ReactLogo({ showTitle = true }) {
  return (
    <Container>
      <SpinningImage src={logo} />
      {showTitle && <Title>React</Title>}
    </Container>
  );
}
