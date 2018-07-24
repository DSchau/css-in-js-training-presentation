import React from 'react';

import {
  Appear,
  Code,
  CodePane,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  S as Span
} from 'spectacle';
import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { Flex, Box } from 'grid-styled/emotion';
import Player from 'react-player';

import DownIcon from 'react-icons/lib/fa/chevron-down';
import HTMLIcon from 'react-icons/lib/fa/html5';
import BrowserIcon from 'react-icons/lib/md/web-asset';
import ServerIcon from 'react-icons/lib/fa/server';
import screamIcon from 'asturur-noto-emoji/svg/emoji_u1f631.svg';
import cryIcon from 'asturur-noto-emoji/svg/emoji_u1f62d.svg';
import fireIcon from 'asturur-noto-emoji/svg/emoji_u1f525.svg';
import sweatIcon from 'asturur-noto-emoji/svg/emoji_u1f605.svg';

import {
  CodeSandboxLogo,
  Conclusion,
  Emoji,
  Intro,
  MousePosition,
  MousePositionBad,
  PolishedLogo,
  ReactLogo
} from '../../components';
import { FADE_IN_ANIMATION } from '../../style/animations';

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
  <Heading size={2} caps fit>
    Customization
  </Heading>
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
    <CodePane
      lang="html"
      source={`
<p>Counting to three:</p>
<% for (int i=1; i<4; i++) { %>
    <p>This number is <%= i %>.</p>
<% } %>
<p>OK.</p>
    `.trim()}
      textSize={32}
    />
  </div>
);

export const CrySlide = () => <Emoji ariaLabel="Dear god no" icon={cryIcon} />;

export const WhatIsServerRendering = () => (
  <Heading size={2} caps fit>
    What is server side rendering?
  </Heading>
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
        <div>
          <HTMLIcon size={100} />
        </div>
        <DownIcon />
        <div>
          <BrowserIcon size={128} />
        </div>
      </Fill>
      <Appear>
        <Fill>
          <div>
            <ServerIcon size={128} />
          </div>
          <DownIcon />
          <div style={{ height: 150 }}>
            <ReactLogo background={false} showTitle={false} />
          </div>
          <DownIcon />
          <div>
            <HTMLIcon size={100} />
          </div>
          <DownIcon />
          <div>
            <BrowserIcon size={128} />
          </div>
        </Fill>
      </Appear>
      <Appear>
        <Fill>
          <div>
            <ServerIcon size={64} />
          </div>
          <DownIcon size={16} />
          <div style={{ height: 80 }}>
            <ReactLogo background={false} showTitle={false} />
          </div>
          <DownIcon size={16} />
          <div>
            <HTMLIcon size={60} />
          </div>
          <DownIcon size={16} />
          <div>
            <BrowserIcon size={64} />
          </div>
          <DownIcon size={16} />

          <div style={{ height: 80 }}>
            <ReactLogo background={false} showTitle={false} />
          </div>
          <DownIcon size={16} />
          <div>
            <HTMLIcon size={60} />
          </div>
        </Fill>
      </Appear>
    </Layout>
  </div>
);

export const Hydration = () => (
  <div>
    <Heading size={2}>Hydration</Heading>
    <CodePane
      lang="jsx"
      source={`
import ReactDOM from 'react-dom';

ReactDOM.hydrate(
  <App />,
  document.getElementById('root')
);
    `.trim()}
      textSize={32}
    />
  </div>
);

export const WhyServerRender = () => (
  <Heading size={2} caps fit>
    Why server render?
  </Heading>
);

WhyServerRender.Props = {
  bgImage: require('./images/why-optimized.jpg'),
  bgDarken: 0.5
};

export const BlazingPerformance = () => (
  <Heading size={2} caps fit>
    Maximize Performance
  </Heading>
);

BlazingPerformance.Props = {
  bgImage: require('./images/blazing-optimized.jpg'),
  bgDarken: 0.5
};

export const QuickerTTI = () => (
  <Heading size={2} caps fit>
    Quicker <Span type="underline">T</Span>ime <Span type="underline">T</Span>o{' '}
    <Span type="underline">I</Span>nteractive
  </Heading>
);

export const SEO = () => (
  <Heading size={2} caps fit>
    Search engine Optimization
  </Heading>
);

SEO.Props = {
  bgImage: require('./images/seo-optimized.jpg'),
  bgDarken: 0.5
};

export const WhatTheSearchEngineSees = () => (
  <div>
    <Heading size={2} fit>
      Search Engine View
    </Heading>
    <CodePane
      lang="html"
      source={`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">
    <title>Your Awesome Blog</title>
  </head>
  <body>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
  </body>
</html>

    `.trim()}
      textSize={24}
    />
  </div>
);

export const HowToServerRender = () => (
  <Heading size={2} caps fit>
    <Span type="italic">How</Span> to server render?
  </Heading>
);

export const MostCommonApproaches = () => (
  <div>
    <Heading size={2} fit>
      Most common approaches
    </Heading>
    <List>
      <ListItem>Roll your own with express/NodeJS backend</ListItem>
      <Appear>
        <ListItem>Next.js</ListItem>
      </Appear>
      <Appear>
        <ListItem>GatsbyJS</ListItem>
      </Appear>
    </List>
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
  <Heading size={2}>
    CSS in <Span type="italic">JavaScript</Span>
  </Heading>
);

export const FullPowerOfNPMEcosystem = () => (
  <Heading size={2} caps>
    Libraries, utilities, <Span type="italic">Oh my!</Span>
  </Heading>
);

FullPowerOfNPMEcosystem.Props = {
  bgImage: require('./images/library.jpeg'),
  bgDarken: 0.5
};

export const PolishedIntro = () => <PolishedLogo />;

export const QuickRevisit = () => (
  <div>
    <Heading size={2}>Remember this?</Heading>
    <CodePane
      lang="jsx"
      source={`
const THEME = {
  dark: {
    base: {
      bg: '#222',
      color: '#eee'
    },
  }
  light: {
    base: {
      bg: '#FFF',
      color: '#222'
    }
  }
};
    `.trim()}
      textSize={32}
    />
  </div>
);

export const PolishedMethods = () => (
  <div>
    <Heading size={2}>darken & lighten</Heading>
    <CodePane
      lang="jsx"
      source={`
import { darken, lighten } from 'polished';

const DARK_BASE = {
  bg: '#222',
  color: '#eee'
};

const LIGHT_BASE = {
  bg: lighten(0.75, DARK_BASE.bg),
  color: darken(0.75, DARK_BASE.color)
};
    `.trim()}
      textSize={32}
    />
  </div>
);

class PolishedThemingExample extends React.Component {
  static DARK_THEME = {
    bg: '#222',
    color: '#eee',
    theme: 'dark'
  };

  static LIGHT_THEME = {
    bg: polished.lighten(0.75, PolishedThemingExample.DARK_THEME.bg),
    color: polished.darken(0.85, PolishedThemingExample.DARK_THEME.color),
    theme: 'light'
  };

  state = {
    ...PolishedThemingExample.DARK_THEME
  };

  toggleTheme = () => {
    this.setState(prevState => {
      if (prevState.theme === 'dark') {
        return PolishedThemingExample.LIGHT_THEME;
      }
      return PolishedThemingExample.DARK_THEME;
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: this.state.bg,
            color: this.state.color,
            height: 200,
            width: 200
          }}
        >
          {this.state.theme}
        </div>
        <button style={{ marginTop: '1rem' }} onClick={this.toggleTheme}>
          Toggle
        </button>
      </div>
    );
  }
}

export const PolishedExample = () => (
  <div>
    <Heading size={2} fit>
      Let's look at an example
    </Heading>
    <PolishedThemingExample />
  </div>
);

export const AllMethods = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '33% 33% 33%',
      gridColumnGap: '1em',
      gridRowGap: '1em'
    }}
  >
    {[
      'clearFix',
      'ellipsis',
      'fontFace',
      'placeholder',
      'radialGradient',
      'adjustHue',
      'complement',
      'darken',
      'desaturate',
      'grayscale',
      'lighten',
      'mix',
      'rgba',
      'saturate',
      'you get the idea!'
    ].map((item, index) => {
      const Wrapper = index === 0 ? React.Fragment : Appear;
      return (
        <Wrapper key={item}>
          <Heading size={3} fit textColor="white">
            {item}
          </Heading>
        </Wrapper>
      );
    })}
  </div>
);

export const FullPowerOfNPMEcosystemRevisited = () => (
  <Heading size={2} caps fit>
    The full power of the NPM Ecosystem
  </Heading>
);

FullPowerOfNPMEcosystemRevisited.Props = {
  bgImage: require('./images/power-optimized.jpg'),
  bgDarken: 0.5
};

export const GridStyled = () => (
  <div>
    <Heading size={2}>grid-styled</Heading>
    <CodePane
      lang="jsx"
      source={`
import { Flex, Box } from 'grid-styled'

const App = () => (
  <Flex>
    <Box width={1/2} px={2}>
      Half width
    </Box>
    <Box width={1/2} px={2}>
      Half width
    </Box>
  </Flex>
)
    `.trim()}
      textSize={32}
    />
  </div>
);

export const GridStyledExample = () => (
  <Flex alignItems="center" justifyContent="center">
    <Box
      width={1 / 2}
      px={2}
      style={{ color: 'black', backgroundColor: 'white', padding: '150px 0' }}
    >
      Half width
    </Box>
    <Box
      width={1 / 2}
      px={2}
      style={{ color: 'black', backgroundColor: 'white', padding: '150px 0' }}
    >
      Half width
    </Box>
  </Flex>
);

export const StyledSystem = () => (
  <div>
    <Heading size={2}>styled-system</Heading>
    <CodePane
      lang="jsx"
      source={`
import { space, width, fontSize, color } from 'styled-system';

const Box = styled.div\`
  \${space}
  \${width}
  \${fontSize}
  \${color}
\`;
    `.trim()}
      textSize={32}
    />
  </div>
);

export const StyledSystemThemeProvider = () => (
  <div>
    <Heading size={2}>Using ThemeProvider</Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={`export const theme = {
  colors: {
    black: '#000e1a',
    blue: '#007ce0'
  }
  // additional theme keys
};



      `}
          textSize={24}
        />
      </Fill>
      <Fill style={{ marginLeft: '1rem' }}>
        <CodePane
          lang="jsx"
          source={`
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App = props => (
  <ThemeProvider theme={theme}>
    {/* styled elements */}
  </ThemeProvider />
);
    `.trim()}
          textSize={24}
        />
      </Fill>
    </Layout>
  </div>
);

export const StyledSystemBox = () => (
  <div>
    <Heading size={2}>Box</Heading>
    <CodePane
      lang="jsx"
      source={`
<Box width={1 / 2} />
<Box fontSize={4} />
<Box m={2} />
<Box color="blue" bg="black" />
    `.trim()}
      textSize={32}
    />
  </div>
);

export const World = () => null;

World.Props = {
  bgImage: require('./images/world-optimized.jpg')
};

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
    <Heading size={2} style={{ position: 'relative' }}>
      CSS-like syntax
    </Heading>
    <Layout>
      <Fill marginRight="1rem">
        <CodePane
          lang="css"
          source={`
.button {
  background-color: blue;
  color: white;
}

.button:hover {
  background-color: white;
  color: blue;
}
        `.replace(/^\n+/, '')}
          textSize={32}
          style={{ paddingRight: '1rem' }}
        />
        <Heading size={4} textColor="white">
          <Span type="italic">Traditional</Span> CSS
        </Heading>
      </Fill>
      <Fill>
        <CodePane
          lang="jsx"
          source={`
const Button = styled.div\`
  background-color: blue;
  color: white;

  :hover {
    background-color: white;
    color: blue;
  }
\`;
        `.trim()}
          textSize={32}
        />
        <Heading size={4} textColor="white">
          styled-components
        </Heading>
      </Fill>
    </Layout>
  </div>
);

export const StyleObjectExample = () => (
  <div>
    <Heading size={2}>Style as an object</Heading>
    <CodePane
      lang="jsx"
      source={`
import styled from 'styled-components';

const Button = styled.button({
  backgroundColor: 'blue',
  ':hover': {
    backgroundColor: 'white'
  }
});
    `.trim()}
      textSize={32}
    />
  </div>
);

export const NotInlineStyles = () => (
  <Heading size={1} caps fit>
    style object !== inline styles
  </Heading>
);

NotInlineStyles.Props = {
  bgColor: 'black'
};

export const ButWhy = () => (
  <Heading size={1} caps fit>
    &hellip; but why?
  </Heading>
);

ButWhy.Props = {
  bgImage: require('./images/why-two-optimized.jpg'),
  bgDarken: 0.5
};

export const StyleObjectReasons = () => (
  <div>
    <List>
      <ListItem>Easier to understand</ListItem>
      <ListItem>Feels more JavaScript-y (trust me, it's a word)</ListItem>
      <ListItem>Easier to compose</ListItem>
      <ListItem>Easier to test</ListItem>
    </List>
  </div>
);

export const ASimpleExampleComparison = () => (
  <div>
    <Heading size={2} fit>
      Simple comparison
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="jsx"
          source={`
import { css } from 'styled-components';

export const TEXT_OVERFLOW = (width = 250) => css\`
  width: \${width}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
\`;
        `.trim()}
          textSize={32}
        />
      </Fill>
      <Fill>
        <CodePane
          lang="jsx"
          source={`export const TEXT_OVERFLOW = (width = 250) => ({
  width,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});


        `}
          textSize={32}
          style={{ marginLeft: '1rem' }}
        />
      </Fill>
    </Layout>
  </div>
);

export const ABitMoreComplex = () => (
  <div>
    <Heading size={2} caps fit>
      Now just a <Span type="italic">bit</Span> more complex
    </Heading>
    <Emoji ariaLabel="Sweating" icon={sweatIcon} />
  </div>
);

export const AComparisonStyleObjectsCss = () => (
  <div>
    <Heading size={2}>The css helper</Heading>
    <CodePane
      lang="jsx"
      source={`
import { css } from 'styled-components';

export const MEDIA = {
  greaterThan(breakpoint) {
    return (...args) => {
      return css\`
        @media only screen and (min-width: \${breakpoint}px) {
          \${css(...args)}
        }
      \`
    };
  }
};
        `.trim()}
      textSize={32}
    />
  </div>
);

export const AComparisonStyleObjectsStyleObject = () => (
  <div>
    <Heading size={2}>style object</Heading>
    <CodePane
      lang="jsx"
      source={`
export const MEDIA = {
  greaterThan(breakpoint) {
    return (...args) => {
      return {
        [\`@media only screen and (min-width: \${breakpoint}px)\`]: args.reduce(
          (merged, arg) => Object.assign(merged, arg),
          {}
        )
      };
    };
  }
};
    `.trim()}
      textSize={32}
    />
  </div>
);

export const UsageMediaQueryHelper = () => (
  <div>
    <Heading size={2}>Using helper</Heading>
    <CodePane
      lang="jsx"
      source={`
import { MEDIA } from './util';

const Container = styled.div({
  ...MEDIA.greaterThan(400)({
    display: 'flex'
  }, {
    alignItems: 'center',
    justifyContent: 'center'
  })
});
    `.trim()}
      textSize={32}
    />
  </div>
);

export const MediaQueryEndResult = () => (
  <div>
    <Heading size={2}>End result</Heading>
    <CodePane
      lang="css"
      source={`
@media only screen and (min-width: 400px) {
  .sc-12341 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
    `.trim()}
      textSize={32}
    />
  </div>
);

// export const StyleObjectsCodeSandbox = () => (
//   <Link
//     href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
//     target="_blank"
//   >
//     <CodeSandboxLogo />
//   </Link>
// );

export const ConclusionStyleObjects = Conclusion();

export const WhenToNotUseCSSInJsIntro = Intro(
  'When Not To Use CSS in JS',
  'when-not-to-use-css-in-js'
);

export const Scream = () => <Emoji ariaLabel="Scream!" icon={screamIcon} />;

export const SeveralScenariosWhenNotToUse = () => (
  <Heading size={2}>When props are rapidly changing</Heading>
);

export const RapidlyChangingProps = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <MousePosition />
  </div>
);

export const DoNotDoItThisWay = () => (
  <Heading size={2} textColor="black" caps fit>
    Do not do it this way!
  </Heading>
);

DoNotDoItThisWay.Props = {
  bgColor: 'gold'
};

export const RapidlyChangingPropsExample = () => (
  <div>
    <Heading size={2} fit>
      Rapidly changing props
    </Heading>
    <CodePane
      lang="jsx"
      source={`
import React, { Component } from 'react';

const Container = styled.div\`
  background-color: \${props => props.backgroundColor};
\`;

export class Example extends Component {
  componentDidMount() {
    window.addEventListener('mousemove', ev => {
      this.setState({
        x: ev.pageX,
        y: ev.pageY
      });
    });
  }

  render() {
    return <Container backgroundColor={\`hsl(\${360 * (this.state.x / window.innerWidth)}, \${100 * (this.state.y / window.innerHeight)}%, 50%)\`}
  }
}
    `.trim()}
      textSize={24}
    />
  </div>
);

export const MousePositionBadExample = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <MousePositionBad />
  </div>
);

export const StyledComponentsWarning = () => (
  <Code style={{ color: 'white', display: 'block', whiteSpace: 'pre-line' }}>
    {`
Over 200 classes were generated for component styled.div. 
Consider using the attrs method, together with a style object for frequently changed styles.
  `.trim()}
  </Code>
);

export const WayBetterToUseAnInlineStyle = () => (
  <div>
    <Heading size={2}>Inline style</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';

export class Example extends Component {
  render() {
    return <Container style={{ hsl: \`hsl(\${360 * (ev.pageX / window.innerWidth)}, \${100 * (ev.pageY / window.innerHeight)}%, 50%)\` }} />
  }
}
    `.trim()}
      textSize={32}
    />
  </div>
);

export const PerformanceParamount = () => (
  <Heading size={2} fit caps>
    When performance is paramount
  </Heading>
);

// export const WhenToNotUseCSSInJsCodeSandbox = () => (
//   <Link
//     href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
//     target="_blank"
//   >
//     <CodeSandboxLogo />
//   </Link>
// );

export const ConclusionCSSInJS = Conclusion();
