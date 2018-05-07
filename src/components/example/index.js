import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  margin-top: 1rem;
`;

const Title = styled.h1`
  color: black;
  margin: 0;
  padding: 0;
  font-size: 28px;
`;

export function Example({ children, title = 'Example' }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
