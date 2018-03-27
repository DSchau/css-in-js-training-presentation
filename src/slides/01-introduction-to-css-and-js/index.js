import React, { Fragment } from "react";
import { Heading, Text } from "spectacle";
import styled from "react-emotion";
import Document from "react-icons/lib/md/insert-drive-file";
import Code from "react-icons/lib/md/code";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Intro = () => (
  <Fragment>
    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
      CSS in JS Training
    </Heading>
    <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
      Dustin Schau
    </Text>
  </Fragment>
);

export const CSSInJsDiagram = () => (
  <Container>
    <Document size={256} />
    <Code size={256} />
  </Container>
);
