import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image as SpectacleImage } from 'spectacle';

const Container = styled.div`
  background-color: ${props => props.backgroundColor || 'black'};
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const Image = styled.img`
  max-height: ${props => props.maxHeight || '15vh'};
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 0;
  margin-top: 0.5rem;
  color: ${props => props.textColor || 'white'};
`;

export function Logo({
  image,
  maxHeight,
  title,
  showTitle,
  textColor,
  ...rest
}) {
  return (
    <div style={{ margin: '1rem' }}>
      <Container {...rest}>
        <Image src={image} maxHeight={maxHeight} />
        {showTitle && <Title textColor={textColor}>{title}</Title>}
      </Container>
    </div>
  );
}

Logo.defaultProps = {
  showTitle: true
};

Logo.propTypes = {
  showTitle: PropTypes.bool
};
