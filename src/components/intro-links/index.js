import React from 'react';
import { GoToAction, Heading } from 'spectacle';

const dasherize = str =>
  str
    .toLowerCase()
    .split(' ')
    .join('-');

const Goto = props => (
  <GoToAction style={{ margin: '1rem' }} {...props}>
    {props.children}
  </GoToAction>
);

export function IntroLinks({ links, title }) {
  return (
    <React.Fragment>
      <Heading size={4} textColor="white">
        {title}
      </Heading>
      {links.map(link => (
        <Goto slide={dasherize(link)} key={link}>
          {link}
        </Goto>
      ))}
    </React.Fragment>
  );
}
