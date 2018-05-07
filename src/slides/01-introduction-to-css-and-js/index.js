import React from 'react';
import {
  Appear,
  Code,
  CodePane,
  ComponentPlayground,
  Heading,
  Layout,
  List,
  ListItem,
  Link,
  Fill,
  Text
} from 'spectacle';
import styled from 'styled-components';
import DownIcon from 'react-icons/lib/fa/chevron-down';
import RightIcon from 'react-icons/lib/fa/chevron-right';

import magicIcon from 'asturur-noto-emoji/svg/emoji_u2728.svg';
import waveIcon from 'asturur-noto-emoji/svg/emoji_u1f44b.svg';
import tadaIcon from 'asturur-noto-emoji/svg/emoji_u1f389.svg';
import thinkingIcon from 'asturur-noto-emoji/svg/emoji_u1f914.svg';
import flushedIcon from 'asturur-noto-emoji/svg/emoji_u1f633.svg';

import {
  Avatar,
  CodeSandboxLogo,
  Emoji,
  Example,
  Intro,
  ReactLogo,
  StyledComponentsLogo
} from '../../components';

import './index.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CenterFill = styled(Fill)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCodePane = styled(CodePane)`
  display: inline-block;
`;

const InlineStyleButtonComponent = ({ className, style }) => (
  <Example>
    <button
      style={{ backgroundColor: 'red', marginTop: 20, ...style }}
      className={className}
    >
      Click me
    </button>
  </Example>
);

export const IntroAll = Intro('Introduction');

export const Wave = () => <Emoji ariaLabel="Hello!" icon={waveIcon} />;

export const Prerequisites = () => (
  <div>
    <Heading size={2} caps>
      Prerequisites
    </Heading>
    <List>
      {['Basic CSS', 'Basic JavaScript', 'Basic React'].map((item, index) => (
        <Appear key={item}>
          <ListItem>{item}</ListItem>
        </Appear>
      ))}
    </List>
  </div>
);

export const Technologies = () => (
  <Layout>
    <CenterFill>
      <StyledComponentsLogo />
    </CenterFill>
    <CenterFill>
      <ReactLogo />
    </CenterFill>
  </Layout>
);

export const Building = () => (
  <div>
    <Heading size={2} caps textColor="white">
      What we'll be building
    </Heading>
    <List>
      {[
        'Buttons',
        'Forms',
        'Headers',
        'Footers',
        'Components of a larger blogging application'
      ].map((item, index) => (
        <Appear key={item}>
          <ListItem textColor="white">{item}</ListItem>
        </Appear>
      ))}
    </List>
  </div>
);

Building.Props = {
  bgImage: require('./assets/legos-optimized.jpeg'),
  bgDarken: 0.75
};

export const IntroInlineStyles = Intro('What CSS in JS Is');

export const InlineStyles = () => (
  <CodePane
    lang="html"
    source={require('./assets/inline-style').default}
    textSize={32}
  />
);

InlineStyles.Props = {
  bgColor: '#2a2734'
};

export const InlineStylesReact = () => (
  <CodePane
    lang="jsx"
    source={require('./assets/inline-style-react').default}
    textSize={32}
  />
);

InlineStylesReact.Props = {
  bgColor: '#2a2734'
};

export const StyledComponentsSection = () => (
  <div>
    <StyledComponentsLogo />
    <Appear>
      <CodePane
        lang="markup"
        source={`npm install styled-components --save`}
        textSize={32}
        style={{ marginTop: '2rem' }}
      />
    </Appear>
  </div>
);

export const StyledComponents = () => (
  <CodePane
    lang="jsx"
    source={require('./assets/styled-components').default}
    textSize={32}
  />
);

StyledComponents.Props = {
  bgColor: '#2a2734'
};

export const StyledComponentsPlayground = () => (
  <ComponentPlayground
    lang="jsx"
    code={require('./assets/styled-components-playground').default}
    scope={{ styled }}
  />
);

export const StyledComponentsHowItWorks = () => (
  <Container>
    <StyledCodePane
      lang="js"
      source="styled.div, styled.button, styled.h1, ..."
      textSize={32}
    />
    <DownIcon size={16} style={{ margin: '1rem 0' }} />
    <Emoji ariaLabel="Magic sparkles" icon={magicIcon} size={128} />
    <DownIcon size={16} style={{ margin: '1rem 0' }} />
    <StyledCodePane
      lang="jsx"
      source={`
<style data-styled-components="">
.sc-fAjcbJ {
  background-color: red;
}
</style>
    `.trim()}
      textSize={32}
    />
  </Container>
);

export const MagicExplanation = () => (
  <Container>
    <CodePane
      lang="js"
      source={require('./assets/insert-rule').default}
      textSize={32}
    />
  </Container>
);

// export const ThemeExample = () => (
//   <Container>
//     <CodePane
//       lang="jsx"
//       source={require('./assets/theme').THEME}
//       textSize={32}
//     />
//     <CodePane
//       lang="jsx"
//       source={require('./assets/theme').EXAMPLE}
//       textSize={32}
//       style={{ marginTop: 20 }}
//     />
//   </Container>
// );

// export const MediaQueryExample = () => (
//   <Container>
//     <CodePane
//       lang="jsx"
//       source={require('./assets/helper').TRUNCATE}
//       textSize={32}
//     />
//     <CodePane
//       lang="jsx"
//       source={require('./assets/helper').EXAMPLE}
//       textSize={32}
//       style={{ marginTop: 20 }}
//     />
//   </Container>
// );

export const IntroWhatCSSInJsIsNot = Intro('What CSS in JS is Not');

// export const InlineStyleExampleExtend = () => (
//   <Link href="https://codesandbox.io/s/zxkz6owmv3" target="_blank">
//     <CodeSandboxLogo />
//   </Link>
// );

export const InlineStyleButton = () => (
  <div>
    <Heading size={2} fit>
      Inline styled button
    </Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';

export default function Button({ className }) {
  return <button style={{ backgroundColor: 'red' }} className={className}>Click me</button>
}
    `.trim()}
      textSize={32}
      style={{ marginTop: '1rem' }}
    />
    <InlineStyleButtonComponent />
  </div>
);

export const InlineStyleButtonOverride = () => (
  <div>
    <Heading size={2} fit>
      Attempt to override
    </Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';
import './button.css';

import Button from './button';

export default function CustomButton() {
  return <Button className="button" />
}
    `.trim()}
      textSize={32}
      style={{ marginTop: '1rem' }}
    />
    <CodePane
      lang="css"
      source={`
.button {
  background-color: blue;
}
    `.trim()}
      textSize={32}
      style={{ marginTop: 20 }}
    />
  </div>
);

export const InlineButtonStyleOverrideResult = () => (
  <div>
    <Heading size={2} fit>
      Attempt failed!
    </Heading>
    <InlineStyleButtonComponent className="button" />
  </div>
);

export const InlineStyleButtonOverrideFixed = () => (
  <div>
    <Heading size={2} fit>
      Try, try again!
    </Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';
import './button.css';

import Button from './button';

export default function CustomButton() {
  return <Button className="button" />
}
    `.trim()}
      textSize={32}
      style={{ marginTop: '1rem' }}
    />
    <CodePane
      lang="css"
      source={`
.button {
  background-color: blue !important;
}
    `.trim()}
      textSize={32}
      style={{ marginTop: 20 }}
    />
  </div>
);

export const InlineButtonStyleOverrideResultFixed = () => (
  <div>
    <Heading size={2} fit>
      It's fixed!
    </Heading>
    <InlineStyleButtonComponent style={{ backgroundColor: 'blue' }} />
  </div>
);

export const Tada = () => (
  <Emoji ariaLabel="Tada celebration" icon={tadaIcon} />
);

export const ThisSucks = () => (
  <Heading size={1} fit caps>
    This is not ideal
  </Heading>
);

export const NotAsPowerful = () => (
  <div>
    <Heading size={2} fit>
      Hover effects
    </Heading>
    <CodePane
      lang="css"
      source={`
.button {
  background-color: blue;
}

.button:hover {
  background-color: white;
}
    `.trim()}
      textSize={32}
    />
    <Example>
      <button className="hover-button">Hover me</button>
    </Example>
  </div>
);

export const MediaQueries = () => (
  <div>
    <Heading size={2} fit>
      Media Queries
    </Heading>
    <CodePane
      lang="css"
      source={`
@media only screen and (min-width: 768px) {
  .button {
    max-width: 200px;
  }
}
    `.trim()}
      textSize={32}
    />
  </div>
);

export const ThinkingFace = () => (
  <Emoji ariaLabel="Thinking face" icon={thinkingIcon} />
);

export const NotAsPowerfulSucks = () => (
  <Heading size={1} caps fit>
    This also is not ideal
  </Heading>
);

export const CognitiveShift = () => (
  <div>
    <CodePane
      lang="css"
      source={`
.button {
  background-color: blue;
  color: white;
  text-align: center;
  text-transform: uppercase;
}
    `.trim()}
      textSize={32}
    />
    <CodePane
      lang="jsx"
      source={`
import React from 'react';

export default function Button() {
  return <button style={{
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  }}>Click me</button>
}
    `.trim()}
      textSize={32}
      style={{ marginTop: 20 }}
    />
  </div>
);

export const WeCanDoBetter = () => (
  <Heading size={1} fit caps>
    We can do better!
  </Heading>
);

export const IntroGettingStarted = Intro('Set up');

export const InstallInstructions = () => (
  <CodePane source={`npm install styled-components --save`} textSize={32} />
);

export const PackageExample = () => (
  <CodePane
    source={JSON.stringify(
      {
        dependencies: {
          'styled-components': '^3.0.0'
        }
      },
      null,
      2
    )}
    textSize={32}
    lang="json"
  />
);

export const NodeModulesExample = () => (
  <CodePane
    source={`
node_modules/
  styled-components/
    dist/
      styled-components.js
    package.json
    `.trim()}
    textSize={32}
    lang="markup"
  />
);

export const LessonOneCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/01-getting-started-with-styled-components"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);
