export default `
import React from 'react';
import styled, { css } from 'styled-components';

export const Button = styled.button\`
  background-color: green;

  \${props => props.primary && css\`
    background-color: white;
    color: green;
  \`}
\`;
    `.trim();
