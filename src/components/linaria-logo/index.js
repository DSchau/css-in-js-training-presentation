import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const Image = styled.img`
  max-height: ${props => props.maxHeight};
`;

export function LinariaLogo({ maxHeight = '35vh' }) {
  return (
    <Container>
      <Image src={require('./linaria.png')} maxHeight={maxHeight} />
    </Container>
  );
}
