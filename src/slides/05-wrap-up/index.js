import React from 'react';

import { Heading, Link, S as Span } from 'spectacle';
import styled from 'styled-components';

import { CodeSandboxLogo, Intro } from '../../components';

export const DrawbacksIntro = Intro('Drawbacks', 'drawbacks');

export const DrawbacksCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const NextStepsIntro = Intro('Next Steps', 'next-steps');

export const NextStepsCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const WrapUpIntro = Intro('Wrap Up', 'wrap-up');

export const WrapUpCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);
