import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const Container = styled.button`
  background-color: #468966;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  padding: 16px 32px;
  margin: 8px;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;

  ${props =>
    props.secondary &&
    css`
      color: #468966;
      background-color: white;
      border-color: #468966;
    `}

  ${props =>
    props.tiny &&
    css`
      font-size: 16px;
      padding: 8px 16px;
    `}

  ${props =>
    props.destructive &&
    css`
      color: white;
      background-color: #8e2800;
    `}

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background-color: #ccc;
      color: #666;
      border-color: #999;
    `}

  ${props =>
    props.icon &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${props =>
    props.grouped &&
    css`
      border-radius: 0;
      margin: 8px 0;
    `}

  ${props =>
    props.first &&
    css`
      border-right-width: 0;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      margin-left: 8px;
    `}

  ${props =>
    props.last &&
    css`
      border-left-width: 0;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      margin-right: 8px;
    `}

  ${props =>
    props.hover &&
    css`
      background-color: ${lighten(0.2, '#468966')};
      color: white;
    `}

  ${props =>
    props.active &&
    css`
      background-color: ${darken(0.1, '#468966')};
      border-color: ${darken(0.2, '#468966')};
      color: white;
      transform: translateY(4px);
    `}
`;

const withStyle = Icon => styled(Icon)`
  margin-left: 0.5rem;

  ${props =>
    props.secondary &&
    css`
      color: #468966 !important;
    `};
`;

export function Button({ children, icon: CustomIcon, secondary, ...rest }) {
  const Icon = CustomIcon ? withStyle(CustomIcon) : false;
  return (
    <Container secondary={secondary} icon={!!Icon} {...rest}>
      {children}
      {Icon && <Icon color="white" secondary={secondary} />}
    </Container>
  );
}

export * from './button-group';
