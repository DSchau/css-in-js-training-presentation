import React from 'react';
import styled from 'styled-components';
import { GoToAction } from 'spectacle';

const Goto = props => (
  <GoToAction style={{ margin: '1rem' }} {...props}>
    {props.children}
  </GoToAction>
);

export const IntroGoTo = () => (
  <div>
    <Goto slide={'introduction'}>Intro to CSS in JS</Goto>
    <Goto slide={'what-css-in-js-is'}>What CSS in JS Is</Goto>
    <Goto slide={'what-css-in-js-is-not'}>What CSS in JS Is Not</Goto>
    <Goto slide={'setup'}>Setup</Goto>
    <Goto slide={'your-first-styled-component'}>
      Your first styled component
    </Goto>
    <Goto slide={'traditional-css'}>Traditional CSS</Goto>
    <Goto slide={'injecting-props'}>Injecting Props</Goto>
    <Goto slide={'inheritance-and-composition'}>
      Inheritance and Composition
    </Goto>
    <Goto slide={'animation'}>Animation</Goto>
    <Goto slide={'usage-with-existing-libraries'}>
      Usage with Existing Libraries
    </Goto>
    <Goto slide={'injecting-globals'}>Injecting Globals</Goto>
  </div>
);
