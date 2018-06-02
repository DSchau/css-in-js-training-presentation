import React from 'react';

import { Heading, Link, S as Span } from 'spectacle';
import styled from 'styled-components';

import { CodeSandboxLogo, Intro } from '../../components';

export const CSSModulesIntro = Intro('CSS Modules', 'css-modules');

export const CSSModulesCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const AutomatedToolingIntro = Intro(
  'Automated Tooling',
  'automated-tooling'
);

export const AutomatedToolingCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const OtherLibrariesIntro = Intro(
  'Alternative Libraries',
  'alternative-libraries'
);

export const OtherLibrariesCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const LibrariesOutsideReactIntro = Intro(
  'Libraries Outside React',
  'libraries-outside-react'
);

export const LibrariesOutsideReactCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);
