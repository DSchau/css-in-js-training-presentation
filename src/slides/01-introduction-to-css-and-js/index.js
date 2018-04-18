import React from 'react';
import {
  Code,
  CodePane,
  ComponentPlayground,
  Heading,
  Layout,
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

import exampleImage from './assets/example-image.jpg';

import {
  Avatar,
  CodeSandboxLogo,
  Emoji,
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
  <button
    style={{ backgroundColor: 'red', marginTop: 20, ...style }}
    className={className}
  >
    Click me
  </button>
);

export const IntroAll = Intro();

export const Wave = () => <Emoji ariaLabel="Hello!" icon={waveIcon} />;

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

export const IntroInlineStyles = Intro('What CSS in JS Is');

export const InlineStyles = () => (
  <CodePane
    lang="jsx"
    source={require('./assets/inline-style').default}
    textSize={24}
  />
);

InlineStyles.Props = {
  bgColor: '#2a2734'
};

export const InlineStylesPlayground = () => (
  <ComponentPlayground
    lang="jsx"
    code={require('./assets/inline-style-playground').default}
  />
);

export const Spectrum = () => (
  <Layout style={{ display: 'flex', alignItems: 'center' }}>
    <Fill>Inline Styles</Fill>
    <Fill>
      <RightIcon size={16} />
    </Fill>
    <Fill>Inline style libraries</Fill>
    <Fill>
      <RightIcon size={16} />
    </Fill>
    <Fill>Injection libraries</Fill>
  </Layout>
);

export const StyledComponentsSection = () => <StyledComponentsLogo />;

export const StyledComponents = () => (
  <CodePane
    lang="jsx"
    source={require('./assets/styled-components').default}
    textSize={24}
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
      textSize={24}
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
      textSize={24}
    />
  </Container>
);

export const MagicExplanation = () => (
  <Container>
    <CodePane
      lang="js"
      source={require('./assets/insert-rule').default}
      textSize={24}
    />
  </Container>
);

export const ThemeExample = () => (
  <Container>
    <CodePane
      lang="jsx"
      source={require('./assets/theme').THEME}
      textSize={24}
    />
    <CodePane
      lang="jsx"
      source={require('./assets/theme').EXAMPLE}
      textSize={24}
      style={{ marginTop: 20 }}
    />
  </Container>
);

export const MediaQueryExample = () => (
  <Container>
    <CodePane
      lang="jsx"
      source={require('./assets/helper').TRUNCATE}
      textSize={24}
    />
    <CodePane
      lang="jsx"
      source={require('./assets/helper').EXAMPLE}
      textSize={24}
      style={{ marginTop: 20 }}
    />
  </Container>
);

export const InlineStyleExampleExtend = () => (
  <Link href="https://codesandbox.io/s/zxkz6owmv3" target="_blank">
    <CodeSandboxLogo />
  </Link>
);

export const IntroWhatCSSInJsIsNot = Intro(); // Intro('What CSS in JS Is Not');

export const InlineStyleButton = () => (
  <div>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';

export default function Button({ className }) {
  return <button style={{ backgroundColor: 'red' }} className={className}>Click me</button>
}
    `.trim()}
      textSize={24}
    />
    <InlineStyleButtonComponent />
  </div>
);

export const InlineStyleButtonOverride = () => (
  <div>
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
      textSize={24}
    />
    <CodePane
      lang="css"
      source={`
.button {
  background-color: blue;
}
    `.trim()}
      textSize={24}
      style={{ marginTop: 20 }}
    />
  </div>
);

export const InlineButtonStyleOverrideResult = () => (
  <InlineStyleButtonComponent className="button" />
);

export const InlineStyleButtonOverrideFixed = () => (
  <div>
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
      textSize={24}
    />
    <CodePane
      lang="css"
      source={`
.button {
  background-color: blue !important;
}
    `.trim()}
      textSize={24}
      style={{ marginTop: 20 }}
    />
  </div>
);

export const InlineButtonStyleOverrideResultFixed = () => (
  <InlineStyleButtonComponent style={{ backgroundColor: 'blue' }} />
);

export const Tada = () => (
  <Emoji ariaLabel="Tada celebration" icon={tadaIcon} />
);

export const ThisSucks = () => (
  <Heading size={1} fit caps>
    This kind of sucks
  </Heading>
);

export const NotAsPowerful = () => (
  <div>
    <button className="hover-button">Hover me</button>
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
      textSize={24}
    />
  </div>
);

export const ThinkingFace = () => (
  <Emoji ariaLabel="Thinking face" icon={thinkingIcon} />
);

export const NotAsPowerfulSucks = () => (
  <Heading size={1} caps fit>
    This also kind of sucks
  </Heading>
);

export const VendorPrefixing = () => (
  <CodePane
    lang="jsx"
    source={require('./assets/vendor-prefixing').default}
    textSize={24}
  />
);

export const VendorPrefixingDemo = () => (
  <ComponentPlayground
    lang="jsx"
    code={`
function GrayImage({ src }) {
  return <img src={src} style={{ filter: 'grayscale(0.5)', maxWidth: '100%' }} />;
}

render(<GrayImage src={imageSrc} />)
  `.trim()}
    scope={{
      imageSrc:
        'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }}
  />
);

export const AutoPrefixingIsNotIdeal = () => (
  <Heading size={1} fit caps>
    Autoprefixing kind of sucks
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
      textSize={24}
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
      textSize={24}
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
  <CodePane source={`npm install styled-components --save`} textSize={24} />
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
    textSize={24}
    lang="json"
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
