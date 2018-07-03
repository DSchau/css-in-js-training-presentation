import React from 'react';

import { Appear, Code, CodePane, Fill, Heading, Image, Layout, Link, S as Span } from 'spectacle';
import styled from 'styled-components';
import Player from 'react-player';

import DownIcon from 'react-icons/lib/fa/chevron-down';
import HTMLIcon from 'react-icons/lib/fa/html5';
import BrowserIcon from 'react-icons/lib/md/web-asset';
import ServerIcon from 'react-icons/lib/fa/server';
import screamIcon from 'asturur-noto-emoji/svg/emoji_u1f631.svg';
import cryIcon from 'asturur-noto-emoji/svg/emoji_u1f62d.svg';

import { CodeSandboxLogo, Emoji, Intro, PolishedLogo, ReactLogo } from '../../components';

export const ThemingIntro = Intro('Theming', 'theming');

export const YouTubeTwitterDarkMode = () => (
  <Player
    url={require('./video/dark-mode.mp4')}
    height={700}
    width="100%"
    playing
    loop
  />
);

export const Customization = () => (
    <Heading size={2} caps fit>Customization</Heading>
);

Customization.Props = {
  bgImage: require('./images/customize.jpg'),
  bgDarken: 0.5
};

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

export const ThemeHierarchy = () => (
  <Image src={require('./images/hierarchy.svg')} />
);

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

export const JspSlide = () => (
  <div>
    <Heading size={2}>JSPs</Heading>
    <CodePane lang="html" source={`
<p>Counting to three:</p>
<% for (int i=1; i<4; i++) { %>
    <p>This number is <%= i %>.</p>
<% } %>
<p>OK.</p>
    `.trim()} textSize={32} />
  </div>
);

export const CrySlide = () => (
  <Emoji ariaLabel="Dear god no" icon={cryIcon} />
);

export const WhatIsServerRendering = () => (
  <Heading size={2} caps fit>What is server side rendering?</Heading>
);

WhatIsServerRendering.Props = {
  bgImage: require('./images/server.jpg'),
  bgDarken: 0.5
};

export const CurrentModel = () => (
  <div>
    <Heading size={2}>Server rendering</Heading>
    <Layout>
      <Fill>
        <div style={{ height: 150 }}>
          <ReactLogo background={false} showTitle={false} />
        </div>
        <DownIcon />
        <div><HTMLIcon size={100} /></div>
        <DownIcon />
        <div><BrowserIcon size={128} /></div>
      </Fill>
      <Appear>
        <Fill>
          <div><ServerIcon size={128} /></div>
          <DownIcon />
          <div style={{ height: 150 }}>
            <ReactLogo background={false} showTitle={false} />
          </div>
          <DownIcon />
          <div><HTMLIcon size={100} /></div>
          <DownIcon />
          <div><BrowserIcon size={128} /></div>
        </Fill>
      </Appear>
    </Layout>
  </div>
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

export const TheJavaScriptInCSSInJs = () => (
  <Heading size={2}>CSS in <Span type="italic">JavaScript</Span></Heading>
);

export const FullPowerOfNPMEcosystem = () => (
  <Heading size={2} caps>Libraries, utilities, <Span type="italic">Oh my!</Span></Heading>
);

FullPowerOfNPMEcosystem.Props = {
  bgImage: require('./images/library.jpeg'),
  bgDarken: 0.5
};

export const PolishedExample = () => (
  <PolishedLogo />
);

export const UtilitiesCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const StyleObjectsIntro = Intro('Style Objects', 'style-objects');

export const AuthoringCSSExample = () => (
  <div>
    <Heading size={2} style={{ position: 'relative' }}>CSS-like syntax</Heading>
    <Layout>
      <Fill marginRight="1rem">
        <CodePane lang="css" source={`
.button {
  background-color: blue;
  color: white;
}

.button:hover {
  background-color: white;
  color: blue;
}
        `.replace(/^\n+/, '')} textSize={32} style={{ paddingRight: '1rem' }} />
        <Heading size={4} textColor="white"><Span type="italic">Traditional</Span> CSS</Heading>
      </Fill>
      <Fill>
        <CodePane lang="jsx" source={`
const Button = styled.div\`
  background-color: blue;
  color: white;

  :hover {
    background-color: white;
    color: blue;
  }
\`;
        `.trim()} textSize={32} />
        <Heading size={4} textColor="white">styled-components</Heading>
      </Fill>
    </Layout>
  </div>
);

export const StyleObjectExample = () => (
  <div>
    <Heading size={2}>Style as an object</Heading>
    <CodePane lang="jsx" source={`
import styled from 'styled-components';

const Button = styled.button({
  backgroundColor: 'blue',
  ':hover': {
    backgroundColor: 'white'
  }
});
    `.trim()} textSize={32} />
  </div>
);

export const NotInlineStyles = () => (
  <Heading size={1} caps fit>style object !== inline styles</Heading>
);

NotInlineStyles.Props = {
  bgColor: 'black'
};

export const StyleObjectsCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const WhenToNotUseCSSInJsIntro = Intro(
  'When Not To Use CSS in JS',
  'when-not-to-use-css-in-js'
);

export const Scream = () => <Emoji ariaLabel="Scream!" icon={screamIcon} />

export const WhenToNotUseCSSInJsCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);
