import React from 'react';

import {
  Appear,
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
import styled from 'styled-components';
import DownIcon from 'react-icons/lib/fa/chevron-down';

import wearyIcon from 'asturur-noto-emoji/svg/emoji_u1f629.svg';
import tadaIcon from 'asturur-noto-emoji/svg/emoji_u1f389.svg';
import sweatIcon from 'asturur-noto-emoji/svg/emoji_u1f605.svg';
import sparklesIcon from 'asturur-noto-emoji/svg/emoji_u2728.svg';

import {
  CodeSandboxLogo,
  Conclusion,
  Emoji,
  EmotionLogo,
  Intro,
  JssLogo,
  LinariaLogo,
  Logo,
  SampleApp
} from '../../components';

const CSSModules = styled(Logo)`
  background-color: white;
`;

const StyledFill = styled(Fill)`
  > div {
    height: 100%;
  }
`;

export const CSSModulesIntro = Intro('CSS Modules', 'css-modules');

// export const AlternativeLibrariesExample = () => (
//   <Layout>
//     <Fill>
//       <Logo image={require('./images/vue.svg')} title="Vue" />
//     </Fill>
//     <Fill>
//       <Logo image={require('./images/angular.svg')} title="Angular" />
//     </Fill>
//     <Fill>
//       <Logo image={require('./images/jquery.svg')} title="jQuery" />
//     </Fill>
//   </Layout>
// );

// AlternativeLibrariesExample.Props = {
//   bgColor: 'black'
// };

export const CSSModulesSlide = () => (
  <CSSModules
    showTitle={false}
    image={require('./images/css-modules.png')}
    title="CSS Modules"
    maxHeight="50vh"
  />
);

CSSModulesSlide.Props = {
  bgColor: 'white'
};

export const CSSModulesWhatIsIt = () => (
  <Heading size={2}>What are they?</Heading>
);

export const CSSModulesCSS = () => (
  <div>
    <Heading size={2}>button.module.css</Heading>
    <CodePane
      lang="css"
      source={`
.container {
  border: none;
  padding: 0.5rem 1rem;
  outline: none;
}

.primary {
  background-color: blue;
  color: white;
}
    `.trim()}
      textSize={32}
    />
  </div>
);

CSSModulesCSS.Props = {
  bgColor: 'code'
};

export const CSSModulesJS = () => (
  <div>
    <Heading size={2}>button.js</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';
import styles from './button.css';

function Button({ children, primary }) {
  return (
    <button className={[styles.base, primary ? styles.primary : ''].join(' ')}>
      {children}
    </button>
  );
}
    `.trim()}
      textSize={32}
    />
  </div>
);

CSSModulesJS.Props = {
  bgColor: 'code'
};

export const CSSModulesUniqueTransform = () => (
  <div>
    <CodePane
      lang="jsx"
      source={`import styles from './button.css';`}
      textSize={32}
    />
    <CodePane
      lang="css"
      source={`
._23_aKvs-b8bW2Vg3fwHozO {
  border: none;
  padding: 0.5rem 1rem;
  outline: none;
}

._13LGdX8RMStbBE9w-t0gZ1 {
  background-color: blue;
  color: white;
}
    `.trim()}
      textSize={32}
      style={{ marginTop: '1rem' }}
    />
  </div>
);

CSSModulesUniqueTransform.Props = {
  bgColor: 'code'
};

export const CSSModulesImportStatement = () => (
  <div>
    <CodePane
      lang="jsx"
      source={`import styles from './button.css';`}
      textSize={32}
      theme="external"
    />
    <CodePane
      lang="json"
      source={JSON.stringify(
        {
          base: '_23_aKvs-b8bW2Vg3fwHozO',
          primary: '_13LGdX8RMStbBE9w-t0gZ1'
        },
        null,
        2
      )}
      textSize={32}
      style={{ marginTop: '1rem' }}
    />
  </div>
);

CSSModulesImportStatement.Props = {
  bgColor: 'code'
};

export const CSSModulesLifecycle = () => (
  <div>
    <Heading size={3} textColor="secondary">
      import .css
    </Heading>
    <DownIcon color="white" style={{ margin: '1rem' }} />
    <Heading size={3} textColor="secondary">
      Create unique classes
    </Heading>
    <DownIcon color="white" style={{ margin: '1rem' }} />
    <Heading size={3} textColor="secondary">
      Add generated class names to import
    </Heading>
  </div>
);

export const CSSModulesHowToUse = () => (
  <div>
    <Heading size={2}>How to use?</Heading>
    <List>
      <ListItem>Webpack css-loader</ListItem>
      <ListItem>react-scripts-cssmodules</ListItem>
      <ListItem>create-react-app v2 will support!</ListItem>
    </List>
  </div>
);

export const CSSModulesConclusion = Conclusion();

export const AutomatedToolingIntro = Intro(
  'Automated Tooling',
  'automated-tooling'
);

export const AutomatedToolingLibrariesFirst = () => (
  <Layout>
    <StyledFill>
      <Logo
        backgroundColor="white"
        textColor="black"
        maxHeight="17.5vh"
        image={require('./images/vue.svg')}
        title="Vue"
      />
    </StyledFill>
    <StyledFill>
      <Logo
        backgroundColor="white"
        textColor="black"
        maxHeight="22.5vh"
        image={require('./images/angular.svg')}
        title="Angular"
      />
    </StyledFill>
  </Layout>
);

AutomatedToolingLibrariesFirst.Props = {
  bgColor: 'white'
};

export const CSSInJsIsAutomatedTooling = () => (
  <Heading size={2}>
    CSS in JS <Span type="italic">is</Span> automated tooling
  </Heading>
);

// export const AutomatedToolingLibraries = () => (
//   <Layout>
//     <Fill>
//       <Logo
//         backgroundColor="white"
//         textColor="black"
//         maxHeight="20vh"
//         image={require('./images/vue.svg')}
//         title="Vue"
//       />
//     </Fill>
//     <Fill>
//       <Logo
//         backgroundColor="white"
//         textColor="black"
//         maxHeight="20vh"
//         image={require('./images/angular.svg')}
//         title="Angular"
//       />
//     </Fill>
//     <Fill>
//       <Logo
//         backgroundColor="white"
//         textColor="black"
//         image={require('./images/css-modules.png')}
//         maxHeight="25vh"
//       />
//     </Fill>
//   </Layout>
// );

// AutomatedToolingLibraries.Props = {
//   bgColor: 'white'
// };

export const WhatIsAutomatedTooling = () => (
  <Heading size={2} caps fit>
    What is automated tooling?
  </Heading>
);

WhatIsAutomatedTooling.Props = {
  bgImage: require('./images/automation.jpg'),
  bgDarken: 0.5
};

export const UsingToolsToYourAdvantage = () => (
  <Heading size={2} caps fit>
    Using tools to your advantage
  </Heading>
);

UsingToolsToYourAdvantage.Props = {
  bgImage: require('./images/tooling-optimized.jpg'),
  bgDarken: 0.5
};

export const VueExample = () => null;

VueExample.Props = {
  lang: 'markup',
  code: `
<template>
  <button class="button" v-on:click="handleClick()">Click me</Button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('clicked');
    }
  }
}
</script>

<style scoped>
.button {
  color: red;
}
</style>
  `.trim(),
  ranges: [
    { title: 'Vue SFC', loc: [0, 50] },
    { loc: [1, 2] },
    { loc: [4, 13] },
    { loc: [14, 19] },
    { title: 'scoped attribute 👌' }
  ]
};

export const AngularExample = () => null;

AngularExample.Props = {
  lang: 'typescript',
  code: `
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: \`<div><h1 class="message">Hello world</h1></div>\`,
  styleUrls: ['./app.css']
})
export class AppComponent {}
  `.trim(),
  ranges: [
    { title: 'Angular styleUrls', loc: [0, 50] },
    { loc: [4, 5] },
    { loc: [5, 6] },
    { title: 'Neat!' }
  ]
};

export const AngularCssExample = () => (
  <div>
    <Heading size={2}>app.css</Heading>
    <CodePane
      lang="css"
      source={`
.message {
  color: red;
}
    `.trim()}
      textSize={32}
    />
  </div>
);

AngularCssExample.Props = {
  bgColor: 'code'
};

export const TheGeneralApproach = () => (
  <Heading size={2} caps fit>
    The general approach
  </Heading>
);

TheGeneralApproach.Props = {
  bgImage: require('./images/approach-optimized.jpg'),
  bgDarken: 0.5
};

export const Approach = () => (
  <div>
    <Heading size={3} textColor="secondary" fit>
      Write traditional CSS
    </Heading>
    <DownIcon color="white" style={{ margin: '1rem' }} />
    <Heading size={3} textColor="secondary" fit>
      Build tooling scopes selectors (unique hash)
    </Heading>
    <DownIcon color="white" style={{ margin: '1rem' }} />
    <Heading size={3} textColor="secondary" fit>
      Encapsulated CSS to the component{' '}
      <Emoji size={24} icon={tadaIcon} ariaLabel="tada" />
    </Heading>
  </div>
);

export const UseWhatsAvailableToYou = () => (
  <Heading size={2} caps fit>
    Use the available tools
  </Heading>
);

UseWhatsAvailableToYou.Props = {
  bgImage: require('./images/blocks-optimized.jpg'),
  bgDarken: 0.5
};

export const AutomatedToolingCodeSandbox = () => (
  <Layout>
    <Fill>
      <Link
        href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/15-automated-tooling/vue-example"
        target="_blank"
      >
        <CodeSandboxLogo title="CodeSandbox (Vue)" />
      </Link>
    </Fill>
    <Fill>
      <Link
        href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/15-automated-tooling/angular-example"
        target="_blank"
      >
        <CodeSandboxLogo title="CodeSandbox (Angular)" />
      </Link>
    </Fill>
  </Layout>
);

export const AutomatedToolingConclusion = Conclusion();

export const OtherLibrariesIntro = Intro(
  'Alternative Libraries',
  'alternative-libraries'
);

export const Mind = () => null;

Mind.Props = {
  bgImage: require('./images/mind-optimized.jpg'),
  bgDarken: 0.5
};

export const ChoiceIsGood = () => (
  <Heading size={2} caps fit>
    Choice is good!
  </Heading>
);

export const Emotion = () => <EmotionLogo showTitle={true} />;

Emotion.Props = {
  bgColor: 'white'
};

export const EmotionSyntax = () => (
  <div>
    <Heading size={2} fit>
      objects or string literals!
    </Heading>
    <Layout>
      {[
        `
import styled from 'react-emotion';

const Container = styled.div({
  display: 'flex',
  alignItems: 'center'
});
          `.trim(),
        `
import styled from 'react-emotion';

const Container = styled.div\`
  display: flex;
  align-items: center;
\`;
          `.trim()
      ].map(snippet => (
        <Fill key={snippet} style={{ margin: '0.25em' }}>
          <CodePane lang="jsx" source={snippet} textSize={32} />
        </Fill>
      ))}
    </Layout>
  </div>
);

EmotionSyntax.Props = {
  bgColor: 'code'
};

export const CssHelper = () => (
  <div>
    <Heading size={2} fit>
      The css prop
    </Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';

export function App() {
  return <h1 css={{
    color: 'red',
    '@media only screen and (min-width: 480px)': {
      color: 'blue'
    }
  }}>Hello World</h1>
}
    `.trim()}
      textSize={32}
    />
  </div>
);

CssHelper.Props = {
  bgColor: 'code'
};

export const NamingIsHard = () => (
  <div>
    <Heading size={2} caps fit>
      Naming is{' '}
      <Span type="underline" textColor="white">
        hard.
      </Span>
    </Heading>
    <Heading size={3} caps fit textColor="secondary">
      Sometimes it's nice to not think about it!
    </Heading>
  </div>
);

export const ContainerHell = () => (
  <div>
    <Heading size={2} fit>
      Container containers
    </Heading>
    <CodePane
      lang="jsx"
      source={`
import styled from 'styled-components';

export function App() {
  return (
    <Container>
      <ImageContainer><Image /><ImageContainer>
      <PostContainer>
        <Post {...details} />
      </PostContainer>
    </Container>
  );
}
    `.trim()}
      textSize={32}
    />
  </div>
);

ContainerHell.Props = {
  bgColor: 'code'
};

export const ContainerImproved = () => (
  <div>
    <Heading size={2} fit>
      <Span type="italic">Possibly</Span> improved?
    </Heading>
    <CodePane
      lang="jsx"
      source={`
export function App() {
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div css={{ maxWidth: '100%' }}><Image /><div>
      <div css={{ display: 'flex', height: '100%' }}>
        <Post {...details} />
      </div>
    </div>
  );
}
    `.trim()}
      textSize={32}
    />
  </div>
);

ContainerImproved.Props = {
  bgColor: 'code'
};

export const Jss = () => <JssLogo />;

Jss.Props = {
  bgColor: 'black'
};

export const JssPros = () => (
  <div>
    <Heading size={2}>JSS Benefits</Heading>
    <List>
      <ListItem>Highly pluggable</ListItem>
      <ListItem>Unopinionated</ListItem>
      <ListItem>Used by material-ui</ListItem>
    </List>
  </div>
);

export const JssExample = () => (
  <div>
    <Heading size={2}>JSS example</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  button: {
    color: 'green'
  }
}

function Button({classes}) {
  return <button className={classes.button}>My Button</button>
}

export default injectSheet(styles)(Button)
    `.trim()}
      textSize={26}
    />
  </div>
);

JssExample.Props = {
  bgColor: 'code'
};

export const LinariaLogoSlide = () => (
  <div>
    <LinariaLogo />
    <Heading size={2} caps fit textColor="black">
      <Span type="underline">Zero runtime</Span> CSS in JS Library
    </Heading>
  </div>
);

LinariaLogoSlide.Props = {
  bgColor: 'white'
};

export const OverwhelmedYet = () => (
  <div>
    <Heading size={2} caps fit>
      Feeling overwhelmed?
    </Heading>
    <Emoji icon={sweatIcon} ariaLabel="Sweat smile" />
    <Appear>
      <Heading size={3} textColor="secondary" caps fit>
        Don't fret!
      </Heading>
    </Appear>
  </div>
);

export const CssInJsPlaygroundExample = () => (
  <div>
    <Heading size={2} fit>
      CSS in JS Playground
    </Heading>
    <Link
      href="https://www.cssinjsplayground.com"
      target="_blank"
      rel="noopener"
    >
      <Image src={require('./images/cssinjsplayground-optimized.png')} />
    </Link>
  </div>
);

CssInJsPlaygroundExample.Props = {
  bgColor: 'black'
};

export const OtherLibrariesConclusion = Conclusion();

export const LibrariesOutsideReactIntro = Intro(
  'Libraries Outside React',
  'libraries-outside-react'
);

export const TheRealWorld = () => (
  <Heading size={2} caps fit>
    The Real World
  </Heading>
);

TheRealWorld.Props = {
  bgImage: require('./images/boss-optimized.jpg'),
  bgDarken: 0.5
};

export const OtherLibrariesImage = () => (
  <div>
    <Heading size={2} caps fit>
      <Span type="italic">Other</Span> libraries
    </Heading>
    <Span type="italic">
      That do <Span type="underline">not</Span> require React!
    </Span>
  </div>
);

OtherLibrariesImage.Props = {
  bgImage: require('./images/library-optimized.jpeg'),
  bgDarken: 0.5
};

export const OtherLibrariesWhy = () => (
  <div>
    <Heading size={2} caps>
      Why?
    </Heading>
    <List>
      <ListItem>Not using React</ListItem>
      <ListItem>
        Reserve right to switch frameworks (e.g. React -> Vue)
      </ListItem>
      <ListItem>Want something different, pluggable, and/or unique</ListItem>
    </List>
  </div>
);

export const OtherLibrariesGeneralApproach = () => (
  <div>
    <Heading size={3} textColor="secondary" fit>
      Apply a unique attribute to element
    </Heading>
    <DownIcon color="white" style={{ margin: '1rem' }} />
    <Heading size={3} textColor="secondary" fit>
      Prepend selectors with unique class/element
    </Heading>
    <DownIcon color="white" style={{ margin: '1rem' }} />
    <Heading size={4} textColor="secondary" fit>
      Scoped styles
    </Heading>
  </div>
);

export const OtherLibrariesConcreteExample = () => (
  <div>
    <Heading size={2} caps>
      app.css
    </Heading>
    <CodePane
      lang="css"
      source={`
.message {
  font-family: sans-serif;
  color: #444;
}
    `.trim()}
      textSize={32}
    />
  </div>
);

OtherLibrariesConcreteExample.Props = {
  bgColor: 'code'
};

export const OtherLibrariesRemember = () => (
  <div>
    <Heading size={2} caps fit textColor="black">
      Remember
    </Heading>
    <Heading size={2} caps fit textColor="black">
      CSS is{' '}
      <Span type="italic" textColor="red">
        global
      </Span>{' '}
      by default
    </Heading>
  </div>
);

OtherLibrariesRemember.Props = {
  bgColor: 'white'
};

export const OtherLibrariesAppLayout = () => <SampleApp />;

OtherLibrariesAppLayout.Props = {
  bgColor: 'black'
};

export const OtherLibrariesFooterExample = () => (
  <div>
    <Heading size={2} caps>
      footer.html
    </Heading>
    <CodePane
      lang="markup"
      source={`
<footer class="footer">
  <p class="message">Copyright &copy; 2018 Some Company, Inc.</p>
</footer>
    `.trim()}
      textSize={32}
    />
    <div>
      <footer style={{ backgroundColor: '#0F37FF' }}>
        <p style={{ color: '#222' }}>
          Copyright &copy; 2018 Some Company, Inc.
        </p>
      </footer>
    </div>
  </div>
);

OtherLibrariesFooterExample.Props = {
  bgColor: 'code'
};

export const OtherLibrariesHtmlExample = () => (
  <div>
    <Heading size={2} caps>
      app.html
    </Heading>
    <CodePane
      lang="markup"
      source={`
<!-- this is the root component -->
<div id="app">
  <p class="message">Hello World!</p>
  <header-component></header-component>
  <content-component></content-component>
  <footer-component></footer-component>
</div>
    `.trim()}
      textSize={32}
    />
  </div>
);

OtherLibrariesHtmlExample.Props = {
  bgColor: 'code'
};

export const OtherLibrariesTheMagic = () => (
  <div>
    <Heading size={2} caps>
      <Emoji ariaLabel="magic" icon={sparklesIcon} fontSize={'inherit'} />
    </Heading>
    <Layout>
      <Fill style={{ margin: '1rem' }}>
        <CodePane
          lang="markup"
          source={`
<div id="app" app-123456>
  <p class="message">Hello World!</p>
</div>
        `.trim()}
          textSize={32}
        />
      </Fill>
      <Fill style={{ margin: '1rem' }}>
        <CodePane
          lang="css"
          source={`[app-123456] .message {
  font-family: sans-serif;
  color: #444;
}`}
          textSize={32}
        />
      </Fill>
    </Layout>
  </div>
);

export const OtherLibrariesOutsideReactConclusion = Conclusion();
