import React from 'react';

import { Code, CodePane, Heading, Link, S as Span } from 'spectacle';
import styled from 'styled-components';

import { CodeSandboxLogo, Intro } from '../../components';

export const ThemingIntro = Intro('Theming', 'theming');

export const ThemeObject = () => (
  <div>
    <Heading size={2}>Theme object</Heading>
    <CodePane
      lang="jsx"
      source={`
export default {
  dark: {
    accent: 'blue',
    bg: '#222',
    text: '#eee'
  },
  light: {
    accent: 'blue',
    bg: '#eee',
    text: '#222'
  }
};
    `.trim()}
      textSize={32}
    />
  </div>
);

// export const AMoreUsefulExample = () => null;

// const statefulThemeExample = `
// import React from 'react';
// import { ThemeProvider } from ''
// import THEME from './theme';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       theme: 'light'
//     };
//   }

//   changeTheme = () => {
//     this.setState(prevState => {
//       theme: prevState.theme === 'light' ? 'dark' : 'light'
//     });
//   };

//   render() {
//     return (
//       <ThemeProvider theme={THEME[this.state.theme]}>
//         <SomeButtonToToggleTheme onClick={this.changeTheme} />
//       </ThemeProvider>
//     );
//   }
// }

// `.trim();

// AMoreUsefulExample.Props = {
//   code: statefulThemeExample,
//   ranges: [
//     { loc: [0, statefulThemeExample.length - 1], title: 'A more useful example' }
//   ]
// }

export const ThemeProvider = () => (
  <div>
    <Heading size={2}>
      <Code textColor="white">ThemeProvider</Code>
    </Heading>
    <CodePane
      lang="jsx"
      source={`
import { ThemeProvider } from 'styled-components';

import THEME from './theme';

function App() {
  return (
    <ThemeProvider theme={THEME.light}>
      <SomeStyledComponent />
    </ThemeProvider>
  );
}
    `.trim()}
      textSize={32}
    />
  </div>
);

export const ConsumingTheme = () => (
  <Heading size={2}>How to use theme?</Heading>
);

export const PropsInjectionRevisited = () => (
  <div>
    <Heading size={2}>Using props injection</Heading>
    <CodePane
      lang="jsx"
      source={require('./snippets/using-theme-prop').default}
      textSize={32}
    />
  </div>
);

export const AvailableToAnyChildren = () => (
  <Heading size={2}>
    Available to <Span type="italic">any</Span> child of ThemeProvider
  </Heading>
);

AvailableToAnyChildren.Props = {
  bgImage: ''
};

// TODO: use tree bg image

export const ThemingLessonCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const ServerRenderingIntro = Intro(
  'Server and Static Rendering',
  'server-and-static-rendering'
);

export const ServerRenderingCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const UtilitiesIntro = Intro('Utilities', 'utilities');

export const UtilitiesCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const StyleObjectsIntro = Intro('Style Objects', 'style-objects');

export const StyleObjectsCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const WhenToNotUseCSSInJsIntro = Intro(
  'When to Not Use CSS in JS',
  'when-to-not-use-css-in-js'
);

export const WhenToNotUseCSSInJsCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);
