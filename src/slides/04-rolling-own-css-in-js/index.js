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

export const CompetingLibraries = () => (
  <Heading size={2} caps textColor="white">
    Competing Libraries
  </Heading>
);

CompetingLibraries.Props = {
  bgImage: require('./images/libraries.jpg'),
  bgDarken: 0.5
};

export const CSSModulesSlide = () => (
  <CSSModules
    showTitle={false}
    image={require('./images/css-modules.png')}
    title="CSS Modules"
  />
);

export const CSSModulesWhatIsIt = () => <Heading size={2}>What is it?</Heading>;

export const CSSModulesCSS = () => (
  <div>
    <Heading size={2}>button.css</Heading>
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
      <Logo image={require('./images/vue.svg')} title="Vue" />
    </Fill>
    <Fill>
      <Logo image={require('./images/angular.svg')} title="Angular" />
    </Fill>
    <Fill>
      <Logo
        backgroundColor="white"
        textColor="black"
        image={require('./images/css-modules.png')}
        title="CSS Modules"
      />
    </Fill>
  </Layout>
);

export const WhatIsAutomatedTooling = () => (
  <Heading size={2} caps fit>
    What is automated tooling?
  </Heading>
);

WhatIsAutomatedTooling.Props = {
  bgImage: require('./images/automation.jpg'),
  bgDarken: 0.5
};

export const AutomatedToolingCodeSandbox = () => (
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
