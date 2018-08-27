import React from 'react';

import {
  Appear,
  CodePane,
  Fill,
  Heading,
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

import {
  CodeSandboxLogo,
  Conclusion,
  Emoji,
  Intro,
  Logo
} from '../../components';

const CSSModules = styled(Logo)`
  background-color: white;
`;

export const CSSModulesIntro = Intro('CSS Modules', 'css-modules');

export const AlternativeLibrariesExample = () => (
  <Layout>
    <Fill>
      <Logo image={require('./images/vue.svg')} title="Vue" />
    </Fill>
    <Fill>
      <Logo image={require('./images/angular.svg')} title="Angular" />
    </Fill>
    <Fill>
      <Logo image={require('./images/jquery.svg')} title="jQuery" />
    </Fill>
  </Layout>
);

AlternativeLibrariesExample.Props = {
  bgColor: 'black'
};

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

export const CSSModulesWhatIsIt = () => <Heading size={2}>What is it?</Heading>;

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

export const CSSInJsIsAutomatedTooling = () => (
  <Heading size={2}>
    CSS in JS <Span type="italic">is</Span> automated tooling
  </Heading>
);

export const AutomatedToolingLibraries = () => (
  <Layout>
    <Fill>
      <Logo
        backgroundColor="white"
        textColor="black"
        maxHeight="20vh"
        image={require('./images/vue.svg')}
        title="Vue"
      />
    </Fill>
    <Fill>
      <Logo
        backgroundColor="white"
        textColor="black"
        maxHeight="20vh"
        image={require('./images/angular.svg')}
        title="Angular"
      />
    </Fill>
    <Fill>
      <Logo
        backgroundColor="white"
        textColor="black"
        image={require('./images/css-modules.png')}
        maxHeight="25vh"
      />
    </Fill>
  </Layout>
);

AutomatedToolingLibraries.Props = {
  bgColor: 'white'
};

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

// export const AutomatedToolingCodeSandbox = () => (
//   <Link
//     href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
//     target="_blank"
//   >
//     <CodeSandboxLogo />
//   </Link>
// );

export const AutomatedToolingConclusion = Conclusion();

export const LibrariesOutsideReactIntro = Intro(
  'Libraries Outside React',
  'libraries-outside-react'
);

export const Mind = () => null;

Mind.Props = {
  bgImage: require('./images/mind-optimized.jpg'),
  bgDarken: 0.5
};

export const LibrariesOutsideReactCodeSandbox = () => (
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

export const WearySlide = () => (
  <Emoji ariaLabel="Weary, concerned" icon={wearyIcon} />
);

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

export const OtherLibrariesCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const OtherLibrariesConclusion = Conclusion();
