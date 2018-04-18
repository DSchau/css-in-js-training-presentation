export default `
import React from 'react';

export function GrayImage({ src }) {
  return <img src={src} style={{ filter: 'grayscale(0.5)', maxWidth: '100%' }} />;
}
`.trim();
