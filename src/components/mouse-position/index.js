import React, { Component } from 'react';
import styled from 'styled-components';
import { hsl } from 'polished';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 600px;
  width: 600px;

  background-color: ${props => props.backgroundColor || 'white'};
  color: white;

  transition: background-color 125ms linear;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;

  color: white;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);

  span {
    display: block;
  }
`;

const Subtitle = styled.h2`
  margin: 0;
  padding: 0;

  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
`;

const Count = styled.span`
  background-color: black;
  color: white;

  padding: 0.5rem 1rem;
`;

export class MousePosition extends Component {
  state = { x: 0, y: 0, maxX: 0, maxY: 0 };

  componentDidMount() {
    const {
      height: maxY,
      width: maxX,
      top,
      y
    } = this.node.getBoundingClientRect();
    this.setState({
      maxX: maxX + y,
      maxY: maxY + top
    });
    this.node.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    this.node.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = ev => {
    this.setState({
      x: ev.pageX,
      y: ev.pageY
    });
  };

  render() {
    const { maxX, maxY, x, y } = this.state;

    const rgb = hsl({
      hue: 360 * (x / maxX),
      saturation: y / maxY,
      lightness: 0.5
    });

    return (
      <Container
        innerRef={node => (this.node = node)}
        style={{ backgroundColor: rgb }}
      >
        <Title>
          <span>X: {x}</span> <span>Y: {y}</span>
        </Title>
      </Container>
    );
  }
}

export class MousePositionBad extends Component {
  state = { x: 0, y: 0, maxX: 0, maxY: 0, rules: 0 };

  componentDidMount() {
    const {
      height: maxY,
      width: maxX,
      top,
      y
    } = this.node.getBoundingClientRect();
    this.setState({
      maxX: maxX + y,
      maxY: maxY + top
    });
    this.node.addEventListener('mousemove', this.handleMouseMove);
    const rules = document.querySelector('style[data-styled-components]').sheet
      .rules.length;
    this.interval = window.setInterval(() => {
      this.setState({
        rules:
          document.querySelector('style[data-styled-components]').sheet.rules
            .length - rules
      });
    }, 1000);
  }

  componentWillUnmount() {
    this.node.removeEventListener('mousemove', this.handleMouseMove);
    window.clearInterval(this.interval);
  }

  handleMouseMove = ev => {
    this.setState({
      x: ev.pageX,
      y: ev.pageY
    });
  };

  render() {
    const { maxX, maxY, x, y, rules } = this.state;

    const rgb = hsl({
      hue: 360 * (x / maxX),
      saturation: y / maxY,
      lightness: 0.5
    });

    return (
      <Container innerRef={node => (this.node = node)} backgroundColor={rgb}>
        <Title>
          <span>X: {x}</span> <span>Y: {y}</span>
        </Title>
        <Subtitle>
          <Count>{rules}</Count> rule({rules > 0 ? 's' : ''}) created
        </Subtitle>
      </Container>
    );
  }
}
