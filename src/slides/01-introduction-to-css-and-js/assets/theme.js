export const THEME = `
export const THEME = {
  primary: '#fff000',
  secondary: 'blue',
  alert: 'yellow'
};
`;

export const EXAMPLE = `
import React from 'react'
import styled from 'styled-components';
import { THEME } from './theme';

const Alert = styled.p\`
  background-color: \${THEME.alert};
\`;  
`;
