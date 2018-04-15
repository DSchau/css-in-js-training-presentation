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
import magicIcon from 'asturur-noto-emoji/svg/emoji_u2728.svg';
import waveIcon from 'asturur-noto-emoji/svg/emoji_u1f44b.svg';

import {
  Avatar,
  Emoji,
  ReactLogo,
  StyledComponentsLogo
} from '../../components';

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

export const Intro = () => (
  <Container>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      CSS in JS
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      with styled-components and React
    </Text>
    <Link href="https://dustinschau.com" target="_blank" rel="noopener">
      <Avatar />
    </Link>
  </Container>
);

Intro.Props = {
  bgImage:
    'https://images.pexels.com/photos/92905/pexels-photo-92905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  bgDarken: 0.6
};

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
