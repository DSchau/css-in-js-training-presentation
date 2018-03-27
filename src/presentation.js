// Import React
import React from "react";
import { Deck } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import "web-animations-js";
import "normalize.css";

import makeSlideDeck from "./slides";

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {makeSlideDeck()}
      </Deck>
    );
  }
}
