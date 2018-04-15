export default `
import React from 'react';
import styled from 'styled-components';

const Button = styled.button\`
  background-color: red;
\`;

export default function CustomButton() {
  return <Button>Click me</Button>;
}
`.trim();
