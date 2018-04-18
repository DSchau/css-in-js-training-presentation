export const TRUNCATE = `
export function truncate(width) {
  return \`
    width: \${width}px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  \`;
}
`;

export const EXAMPLE = `
import React from 'react';
import styled from 'styled-components';

import { truncate } from './util';

const Message = styled.p\`
  \${truncate(250)};
\`;  
`;
