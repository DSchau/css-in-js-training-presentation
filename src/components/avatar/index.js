import React from 'react';
import styled, { css } from 'styled-components';
import { Heading, Image } from 'spectacle';

import avatar from './avatar.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
`;

const StyledImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

const Name = styled.h3`
  color: white;
  font-size: 16px;

  margin-left: 1rem;
`;

export function Avatar({ className, ...rest }) {
  return (
    <Container className={className} {...rest}>
      <StyledImage src={avatar} />
      <Name>Dustin Schau</Name>
    </Container>
  );
}
