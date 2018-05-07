import React from 'react';
import styled from 'styled-components';
import { Image } from 'spectacle';

import logo from './code-sandbox.svg';

const Container = styled.div`
  background-color: #1c2022;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const StyledImage = styled(Image)`
  min-height: 100px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
`;

export function CodeSandboxLogo({ title = 'Code Sandbox' }) {
  return (
    <Container>
      <StyledImage src={logo} />
      <Title>{title}</Title>
    </Container>
  );
}
