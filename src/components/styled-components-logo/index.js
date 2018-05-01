import React from 'react';
import styled from 'styled-components';
import { Image } from 'spectacle';

import logo from './styled-components.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export function StyledComponentsLogo() {
  return (
    <Container>
      <Image src={logo} />
    </Container>
  );
}
