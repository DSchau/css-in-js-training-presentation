import React from 'react';
import { Heading, Text, Link } from 'spectacle';
import styled from 'styled-components';

import { Avatar } from '..';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Intro = subtitle => {
  const Inner = () => (
    <Container>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        CSS in JS
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
        with styled-components and React
      </Text>
      {subtitle && (
        <Heading size={3} textColor="secondary" style={{ marginTop: 20 }}>
          {subtitle}
        </Heading>
      )}
      <Link href="https://dustinschau.com" target="_blank" rel="noopener">
        <Avatar />
      </Link>
    </Container>
  );

  Inner.Props = {
    bgImage:
      'https://images.pexels.com/photos/92905/pexels-photo-92905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    bgDarken: 0.6
  };

  return Inner;
};
