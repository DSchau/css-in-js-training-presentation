// Import React
import React from 'react';
import { Deck } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import 'web-animations-js';
import 'normalize.css';

import makeSlideDeck from './slides';

const theme = createTheme(
  {
    primary: '#225378',
    secondary: '#ACF0F2',
    tertiary: '#F3FFE2',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="bar"
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
      >
        {makeSlideDeck()}
      </Deck>
    );
  }
}
