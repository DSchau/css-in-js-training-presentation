import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

export function ButtonGroup({ children }) {
  return (
    <Container>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          first: index === 0,
          fullWidth: true,
          grouped: true,
          last: index + 1 === children.length
        })
      )}
    </Container>
  );
}
