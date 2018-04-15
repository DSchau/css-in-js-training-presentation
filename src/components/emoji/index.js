import React from 'react';
import styled, { css } from 'styled-components';

const Image = styled.img`
  width: 256px;
  height: 256px;

  ${props =>
    props.size &&
    css`
      height: ${props.size}px;
      width: ${props.size}px;
    `} ${props =>
    props.css &&
    css`
      ${props.css};
    `};
`;

export function Emoji({ ariaLabel, className, icon, ...rest }) {
  return (
    <span role="img" aria-label={ariaLabel}>
      <Image src={icon} className={className} {...rest} />
    </span>
  );
}
