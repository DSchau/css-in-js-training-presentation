import React from 'react';

import { IntroLinks } from '../../components';

export const IntroductionToCSSInJsSectionIntro = () => (
  <IntroLinks
    links={[
      'Introduction',
      'What CSS in JS Is',
      'What CSS in JS Is Not',
      'Setup'
    ]}
    title="Introduction to CSS in JS"
  />
);

export const RealWorldUsageSectionIntro = () => (
  <IntroLinks
    links={[
      'Your first styled component',
      'Traditional CSS',
      'Injecting Props',
      'Inheritance and Composition',
      'Animation',
      'Usage with Existing Libraries',
      'Injecting Globals'
    ]}
    title="Real World Usage"
  />
);

export const AdvancedCSSInJsSectionIntro = () => (
  <IntroLinks
    links={[
      'Theming',
      'Server and Static Rendering',
      'Utilities',
      'Style Objects',
      'When to Not Use CSS in JS'
    ]}
    title="Advanced CSS in JS"
  />
);

export const RollingOwnCSSInJsSectionIntro = () => (
  <IntroLinks
    links={[
      'CSS Modules',
      'Automated Tooling',
      'Alternative Libraries',
      'Libraries Outside React'
    ]}
    title="Rolling Your Own CSS in JS"
  />
);

export const WrapUpSectionIntro = () => (
  <IntroLinks links={['Drawbacks', 'Next Steps', 'Wrap Up']} title="Wrap Up" />
);
