import React from 'react';

import {
  Appear,
  Code,
  ComponentPlayground,
  CodePane,
  Fill,
  Layout,
  Image,
  List,
  ListItem,
  Link,
  Heading,
  S as Span
} from 'spectacle';
import styled, { keyframes } from 'styled-components';
import Player from 'react-player';
import CommentIcon from 'react-icons/lib/fa/comment';

import magicIcon from 'asturur-noto-emoji/svg/emoji_u2728.svg';
import DownIcon from 'react-icons/lib/fa/chevron-down';

import './index.css';

import {
  Avatar,
  Button,
  ButtonGroup,
  CodeSandboxLogo,
  Conclusion,
  Emoji,
  Example,
  Intro,
  ReactLogo,
  StyledComponentsLogo
} from '../../components';

const GridContainer = styled.div`
  padding: 1rem;
  background-color: white;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const GridTri = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledCodePane = styled(CodePane)`
  display: inline-block;
  margin: 0.5rem !important;
`;

const StyledCode = styled(Code)`
  color: white !important;
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;
  background-color: #193441;
  border-radius: 5px;
  border: none;
  color: white;

  transition: 250ms ease-in-out;
`;

const Hello = ({ name }) => <h1>Hello {name}</h1>;

const Input = styled.input.attrs({
  type: props => props.type || 'text'
})`
  border: 1px solid blue;
`;

class StyledButtonInteractive extends React.Component {
  state = {
    clicks: 0
  };

  getStyle(clicks) {
    switch (clicks) {
      case 1:
        return { transform: 'scale(0.6)' };
      case 2:
        return { transform: 'scale(1.3)' };
      case 3:
        return { backgroundColor: '#204118' };
      default:
        return {};
    }
  }

  increment = () => {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  };

  render() {
    return (
      <div onClick={this.increment}>
        <Heading size={2} fit caps>
          The humble button
        </Heading>
        <StyledButton style={this.getStyle(this.state.clicks)}>
          Click Me
        </StyledButton>
      </div>
    );
  }
}

export const YourFirstStyledComponentIntro = Intro(
  'Your first styled component',
  'your-first-styled-component'
);

export const StyledButtonExample = () => <StyledButtonInteractive />;

export const UiMockup = () => (
  <GridContainer>
    <Heading size={4}>UI Mockups</Heading>
    <Grid>
      <Button>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Danger</Button>
      <Button disabled>Disabled</Button>
      <Button icon={CommentIcon}>with icon</Button>
      <Button icon={CommentIcon} secondary>
        secondary with icon
      </Button>
      <Button tiny>tiny button</Button>
      <Button icon={CommentIcon} tiny>
        tiny button with icon
      </Button>
    </Grid>
    <ButtonGroup>
      <Button secondary>uno</Button>
      <Button secondary>dos</Button>
      <Button secondary>tres</Button>
    </ButtonGroup>
  </GridContainer>
);

export const BloggingApp = () => null;

BloggingApp.Props = {
  bgImage: require('./images/blogging-app.png')
};

export const BloggingAppNewPost = () => null;

BloggingAppNewPost.Props = {
  bgImage: require('./images/blogging-app-new-post.png')
};

export const QuickAPIRevisit = () => (
  <CodePane
    lang="jsx"
    source={`
import styled from 'styled-components';

const Button = styled.button\`
  color: red;
\`;
  `.trim()}
    textSize={32}
  />
);

export const StyledComponentsHowItWorks = () => (
  <Container>
    <StyledCodePane
      lang="js"
      source={`
import styled from 'styled-components';

const Button = styled.button\`
  color: red;
\`;
      `.trim()}
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
  color: red;
}
</style>
    `.trim()}
      textSize={32}
    />
  </Container>
);

export const PrimaryButton = () => (
  <GridContainer>
    <Heading size={4} style={{ marginBottom: '1rem' }}>
      Primary button
    </Heading>
    <Button fullWidth>Save</Button>
  </GridContainer>
);

export const LessonOneCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/02-your-first-styled-component"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const YourFirstStyledComponentConclusion = Conclusion(
  'your-first-styled-component-conclusion'
);

export const TraditionalCSSIntro = Intro('Traditional CSS', 'traditional-css');

export const WhatDoIMean = () => (
  <Heading size={2} fit caps>
    What is <Span type="italic">traditional</Span> CSS
  </Heading>
);

export const DynamicStyles = () => (
  <div>
    <Heading size={2} fit caps>
      Pseudo styles
    </Heading>
    <StyledCodePane
      lang="css"
      source={`
.button {
  background-color: red;
}
    `.trim()}
      textSize={32}
    />
    <Layout>
      <Fill>
        <StyledCodePane
          lang="css"
          source={`
.button:hover {
  background-color: blue;
}
            `.trim()}
          textSize={32}
        />
      </Fill>
      <Fill>
        <StyledCodePane
          lang="css"
          source={`
.button:active {
  background-color: white;
}
            `.trim()}
          textSize={32}
        />
      </Fill>
    </Layout>
    <button className="button">Hello!</button>
  </div>
);

export const Transitions = () => (
  <div>
    <Heading size={2} fit caps>
      Subtle Animations
    </Heading>
    <CodePane
      lang="css"
      source={`
.button {
  background-color: red;
  transition: 300ms ease-in-out;
}

.button:hover {
  background-color: blue;
}
    `.trim()}
      textSize={32}
    />
    <button className="button">Hello!</button>
    <button className="button animate">I animate!</button>
  </div>
);

export const HowDoesThisWork = () => (
  <Heading size={2} caps>
    How does this work with styled-components?
  </Heading>
);

export const PrettySimply = () => (
  <div>
    <Heading size={2}>Easy as pie</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';
import styled from 'styled-components';

export const Button = styled.button\`
  background-color: red;
  transition: 300ms ease-in-out;
  :hover {
    background-color: blue;
  }
\`;
    `.trim()}
      textSize={32}
    />
  </div>
);

export const MediaQueriesSimply = () => (
  <div>
    <Heading size={2}>Media queries, too!</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';
import styled from 'styled-components';

export const Form = styled.form\`
  width: 100%;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    max-width: 50%;
  }
\`;
    `.trim()}
      textSize={32}
    />
  </div>
);

export const UiMockupRoundTwo = () => (
  <GridContainer>
    <Heading size={4}>UI Mockups v2</Heading>
    <Grid>
      <Button>Primary</Button>
      <Button secondary hover>
        Primary Hover
      </Button>
      <Button secondary active>
        Primary Active
      </Button>
    </Grid>
  </GridContainer>
);

export const LessonTwoCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/03-traditional-css"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const InjectingPropsIntro = Intro('Injecting Props', 'injecting-props');

export const WhatAreProps = () => (
  <Heading size={2} fit caps>
    What are props?
  </Heading>
);

export const PropsInDetail = () => (
  <div>
    <Heading size={2}>Props in detail</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';
import Hello from './hello';

export function App() {
  return <Hello name="World" />;
}
    `.trim()}
      textSize={32}
    />
    <CodePane
      lang="json"
      source={JSON.stringify(
        {
          name: 'World'
        },
        null,
        2
      )}
      textSize={32}
      style={{ marginTop: '1rem' }}
    />
  </div>
);

export const PropsExample = () => (
  <div>
    <Heading size={2}>Hello Component</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';

export default function Hello(props) {
  return <h1>Hello {props.name}</h1>;
}
    `.trim()}
      textSize={32}
    />
    <Hello name="World" />
  </div>
);

export const PropsExampleDynamic = class extends React.Component {
  state = {
    name: 'World'
  };

  handleChange = ev => {
    this.setState({
      name: ev.target.value
    });
  };

  render() {
    return (
      <div>
        <Heading size={2} fit caps>
          Changing props
        </Heading>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <Hello name={this.state.name} />
      </div>
    );
  }
};

export const UiMockupRevisited = () => (
  <GridContainer>
    <Heading size={4}>UI Mockups</Heading>
    <Grid>
      <Button>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Danger</Button>
      <Button disabled>Disabled</Button>
      <Button icon={CommentIcon}>with icon</Button>
      <Button icon={CommentIcon} secondary>
        secondary with icon
      </Button>
      <Button tiny>tiny button</Button>
      <Button icon={CommentIcon} tiny>
        tiny button with icon
      </Button>
    </Grid>
    <ButtonGroup>
      <Button secondary>uno</Button>
      <Button secondary>dos</Button>
      <Button secondary>tres</Button>
    </ButtonGroup>
  </GridContainer>
);

export const TheNaiveApproach = () => (
  <div>
    <Heading size={2} caps fit>
      The <Span type="italic">naive</Span> approach
    </Heading>
    <CodePane
      lang="css"
      source={`
.button {
  background-color: green;
}

.secondary {
  background-color: white;
  color: green;
}

.destructive {
  background-color: red;
}
    `.trim()}
      textSize={32}
    />
  </div>
);

export const SomeoneDownTheRoad = () => (
  <div>
    <CodePane
      lang="html"
      source={`
<p class="secondary">WHY IS THIS GREEN?!?!</p>
    `.trim()}
      textSize={32}
    />
    <p style={{ color: 'green', backgroundColor: 'white' }}>
      WHY IS THIS GREEN?!?!
    </p>
  </div>
);

export const GlobalByDefault = () => (
  <Heading size={2} caps>
    CSS is Global by default!
  </Heading>
);

export const WeCanDoBetter = () => (
  <Heading size={2} caps fit>
    We can do better
  </Heading>
);

export const UsingPropsStyledComponents = () => (
  <div>
    <Heading size={2}>Using props</Heading>
    <CodePane
      lang="jsx"
      source={require('./snippets/using-props').default}
      textSize={32}
    />
  </div>
);

export const PropsExampleStyled = () => (
  <div>
    <Heading size={2}>Example</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';
import Button from './button';

export default function App() {
  return (
    <div>
      <Button>Default</Button>
      <Button primary>Primary</Button>
    </div>
  );
}
    `.trim()}
      textSize={32}
    />
    <button className="padding" style={{ backgroundColor: 'green' }}>
      Default
    </button>
    <button
      className="padding"
      style={{ backgroundColor: 'white', color: 'green' }}
    >
      Primary
    </button>
  </div>
);

export const LessonPropInjcetion = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/04-prop-injection"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const InheritanceIntro = Intro(
  'Inheritance and Composition',
  'inheritance-and-composition'
);

export const TraditionalCSSComposition = () => (
  <Heading size={2} caps>
    Traditional CSS Composition
  </Heading>
);

export const TraditionalCSSCompositionExample = () => (
  <div>
    <Heading size={2}>CSS Composition</Heading>
    <CodePane
      lang="css"
      source={`
.alert {
  display: flex;
  align-items: center;
  font-size: 12px;
  background-color: #EEE;
}

.alert.danger {
  background-color: red;
  color: white;
}
    `.trim()}
      textSize={32}
    />
    <div className="alert-container">
      <div className="alert2">Regular alert</div>
      <div className="alert2 danger">Danger alert</div>
    </div>
  </div>
);

export const SimpleComposition = () => (
  <div>
    <Heading size={4} textColor="secondary">
      styled-components composition
    </Heading>
    <CodePane
      lang="jsx"
      source={`
import styled from 'styled-components';

export const Alert = styled.div\`
  // existing styles
\`;

export const AlertDanger = styled(Alert)\`
  // overridden styles
\`;
    `.trim()}
      textSize={32}
    />
  </div>
);

export const CssHelperComposition = () => (
  <div>
    <Heading size={2}>css helper</Heading>
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
  </div>
);

export const CssHelperCompositionUsage = () => (
  <div>
    <Heading size={2}>Consuming css helper</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';

import { TEXT_OVERFLOW } from '../util/mixins';

export const Alert = styled.div\`
  width: 250px;

  \${TEXT_OVERFLOW(250)};
\`;
    `.trim()}
      textSize={32}
    />
    <div className="alert ellipsis">I will be cut off after a single line!</div>
  </div>
);

export const LessonInheritanceAndComposition = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/05-inheritance-and-composition"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const AnimationIntro = Intro('Animation', 'animation');

export const NativeAnimation = () => (
  <Player
    url={require('./iOS Animations.mp4')}
    height={700}
    width="100%"
    playing
    loop
  />
);

export const WebToday = () => (
  <Heading size={2} caps>
    Animation on the web, today.
  </Heading>
);

export const AnimationWebOptions = () => (
  <List>
    <ListItem style={{ marginTop: '1rem' }}>
      CSS <StyledCode>transition</StyledCode>
    </ListItem>
    <Appear>
      <ListItem style={{ marginTop: '1rem' }}>
        CSS <StyledCode>keyframes</StyledCode>
      </ListItem>
    </Appear>
    <Appear>
      <ListItem style={{ marginTop: '1rem' }}>
        <StyledCode>WebAnimation</StyledCode> API
      </ListItem>
    </Appear>
    <Appear>
      <ListItem style={{ marginTop: '1rem' }}>Libraries</ListItem>
    </Appear>
  </List>
);

export const ProgressiveEnhancement = () => (
  <Heading size={2} caps>
    Progressive Enhancement
  </Heading>
);

export const AnimationWebOptionsRevisited = () => (
  <List>
    <ListItem style={{ marginTop: '1rem' }}>
      CSS <StyledCode>transition</StyledCode>
    </ListItem>
    <ListItem style={{ marginTop: '1rem' }}>
      CSS <StyledCode>keyframes</StyledCode>
    </ListItem>
    <ListItem style={{ marginTop: '1rem' }}>
      <Span type="strikethrough">
        <StyledCode>WebAnimation</StyledCode> API
      </Span>
    </ListItem>
    <ListItem style={{ marginTop: '1rem' }}>
      <Span type="strikethrough">Libraries</Span>
    </ListItem>
  </List>
);

export const TransitionsHeading = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <Heading size={2}>
      <StyledCode>transition</StyledCode>
    </Heading>
    <CodePane
      lang="css"
      source={`
.box {
  width: 150px;
  height: 150px;

  transition: 300ms ease-in-out;
}

.box:hover {
  transform: rotate(180deg) scale(1.5);
}
    `.trim()}
      textSize={32}
    />
    <div className="box" />
  </div>
);

export const KeyframeAnimationExample = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <Heading size={2}>
      <StyledCode>@keyframes</StyledCode>
    </Heading>
    <CodePane
      lang="css"
      source={`
.blink {
  animation: blink 1s steps(5, start) infinite;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
      `.trim()}
      textSize={32}
    />
    <h1 className="blink">What have I done!?!?</h1>
  </div>
);

export const TheProblemWithKeyframes = () => (
  <Heading size={2} caps>
    The problem with keyframes animation
  </Heading>
);

export const GlobalsAgain = () => (
  <Heading size={2} fit caps>
    globals
  </Heading>
);

export const TheKeyframesHelper = () => (
  <div>
    <Heading size={2}>The keyframes utility</Heading>
    <Layout>
      <CodePane
        lang="jsx"
        source={`
import { keyframes } from 'styled-components';

export const BLINK = keyframes\`
  to {
    visibility: hidden;
  }
\`;
            `.trim()}
        textSize={32}
      />
    </Layout>
  </div>
);

export const AnimationHowItWorks = () => (
  <Container style={{ marginTop: '-10rem' }}>
    <StyledCodePane
      lang="js"
      source={`
import { keyframes } from 'styled-components';

export const BLINK = keyframes\`
  to {
    visibility: hidden;
  }
\`;
      `.trim()}
      textSize={32}
    />
    <DownIcon size={16} style={{ margin: '1rem 0' }} />
    <Emoji ariaLabel="Magic sparkles" icon={magicIcon} size={128} />
    <DownIcon size={16} style={{ margin: '1rem 0' }} />
    <StyledCodePane
      lang="jsx"
      source={`
<style data-styled-components="">
@keyframes ktEnzR {
  to{
    visibility:hidden;
  }
}
</style>
    `.trim()}
      textSize={32}
    />
  </Container>
);

export const UsingTheAnimation = () => (
  <div>
    <Heading size={2}>Using a keyframes animation</Heading>
    <Layout>
      <CodePane
        lang="jsx"
        source={`
import React from 'react';
import styled from 'styled-components';

import { BLINK } from './animations';

const Title = styled.h1\`
  animation: \${BLINK} 1s steps(5, start) infinite;
\`;
              `.trim()}
        textSize={32}
      />
    </Layout>
  </div>
);

export const AnimationCodeSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/06-animation"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const UsageWithExistingLibrariesIntro = Intro(
  'Usage with Existing Libraries',
  'usage-with-existing-libraries'
);

export const ComponentLibrariesExamples = () => null;

ComponentLibrariesExamples.Props = {
  bgImage: require('./images/libraries.jpeg')
};

export const BootstrapExample = () => (
  <div>
    <Heading size={2}>Bootstrap Markup</Heading>
    <CodePane
      lang="html"
      source={`
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
    `.trim()}
      textSize={32}
    />
  </div>
);

export const BootstrapExampleHtml = () => (
  <div>
    <Heading size={2}>Resulting Style</Heading>
    <div className="alert alert-success">
      A simple success alert—check it out!
    </div>
    <div className="alert alert-danger">
      A simple danger alert—check it out!
    </div>
    <div className="alert alert-warning">
      A simple warning alert—check it out!
    </div>
    <div className="alert alert-info">A simple info alert—check it out!</div>
  </div>
);

export const LetsUseProps = () => (
  <Heading size={2} caps>
    Let's use props to our advantage
  </Heading>
);

export const IntroducingAttrs = () => (
  <div>
    <Heading size={2}>
      <StyledCode>attrs</StyledCode>
    </Heading>
    <CodePane
      lang="css"
      source={`
import React from 'react';
import styled from 'styled-components';

export const Input = styled.input.attrs({
  type: props => props.type || 'text'
})\`
  border: 1px solid blue;
\`;
    `.trim()}
      textSize={32}
    />
  </div>
);

export const UsingComponentDefaults = () => (
  <div>
    <Heading size={2}>Using component</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';

import { Input } from './input';

export function App() {
  return (
    <div>
      <Input name="username" placeholder="Username" />
      <Input name="password" type="password" />
    </div>
  );
}
    `.trim()}
      textSize={32}
    />
  </div>
);

export const ExampleComponentDefaults = () => (
  <div>
    <Heading size={2}>Output</Heading>
    <Input name="username" placeholder="Username" />
    <Input name="password" type="password" />
  </div>
);

export const GeneratingClassname = () => (
  <div>
    <Heading size={2}>Let's bring it back to Bootstrap</Heading>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';
import styled from 'styled-components';

export const Alert = styled.div.attrs({
  className: props => \`\${props.className} alert alert-\${props.type || 'info'}\`
})\`;
    `.trim()}
      textSize={32}
    />
  </div>
);

export const BootstrapExampleCompleted = () => (
  <div>
    <CodePane
      lang="jsx"
      source={`
import React from 'react';
import styled from 'styled-components';

import { Alert } from './alert';

export function App() {
  return (
    <Alert type="danger">I'm a danger alert! Rawrrr</Alert>
  );
}
    `.trim()}
      textSize={32}
    />
    <div className="alert alert-danger">I'm a danger alert! Rawrrr</div>
  </div>
);

export const UsageWithExistingLibrariesSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/07-usage-with-existing-libraries"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);

export const InjectingGlobals = Intro('Injecting Globals', 'injecting-globals');

export const ImportantOverride = () => (
  <div>
    <Heading size={1} fit>
      <Code textColor="white">!important</Code>
    </Heading>
    <CodePane
      lang="css"
      source={`
p {
  color: black !important;
}
    `.trim()}
      textSize={32}
      style={{ marginTop: '1rem' }}
    />
  </div>
);

export const GlobalCSSDiagram = () => (
  <div>
    <Heading size={2}>CSS Globals</Heading>
    <div style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
      <CodePane
        lang="css"
        source={`
p {
  color: red;
  background-color: white;
}
      `.trim()}
        textSize={32}
        style={{ margin: '1rem 0', marginRight: '0.5rem' }}
      />
      <CodePane
        lang="css"
        source={`
p {
  font-style: italic;
}
      `.trim()}
        textSize={32}
        style={{ margin: '1rem 0' }}
      />
    </div>
    <p className="red italic">
      This text is red and italic, even though I probably only wanted one or the
      other
    </p>
  </div>
);

export const StackingStyles = () => (
  <Image src={require('./images/stacking.png')} />
);

export const WhenToUse = () => (
  <Heading size={2} caps>
    When to use?
  </Heading>
);

export const WhenToUseReasons = () => (
  <List>
    <ListItem>Unified style across whole app for certain elements</ListItem>
    <Appear>
      <ListItem>CSS Resets</ListItem>
    </Appear>
    <Appear>
      <ListItem>Component that cannot be styled</ListItem>
    </Appear>
  </List>
);

export const InjectGlobalApi = () => (
  <div>
    <Heading size={2}>injectGlobal</Heading>
    <CodePane
      lang="jsx"
      source={`
import { injectGlobal } from 'styled-components';

injectGlobal\`
  p {
    color: red;
  }

  h1 {
    font-size: 18px;
    margin: 0;
  }
\`;

    `.trim()}
      textSize={32}
    />
  </div>
);

export const UseWithCaution = () => (
  <div>
    <Heading size={2} caps textColor="black">
      Use with caution
    </Heading>
    <Heading size={4} textColor="black">
      It's an <Span type="italic">escape hatch</Span>
    </Heading>
  </div>
);

UseWithCaution.Props = {
  bgColor: 'gold'
};

export const InjectingGlobalsSandbox = () => (
  <Link
    href="https://codesandbox.io/s/github/DSchau/styled-components-units/tree/master/08-injecting-globals"
    target="_blank"
  >
    <CodeSandboxLogo />
  </Link>
);
