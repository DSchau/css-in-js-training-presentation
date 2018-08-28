import React from 'react';
import styled from 'styled-components';

import { Logo } from './logo';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 32px;
  color: white;
`;

export function JssLogo({ maxHeight = '35vh' }) {
  return <Logo style={{ maxHeight }} />;
}
