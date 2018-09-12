import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg``;

const Text = styled.text`
  fill: black;
  font-size: 24px;
`;

export function SampleApp(props) {
  return (
    <Svg width={500} height={545} {...props}>
      <path
        fill="#66b2ff"
        stroke="#fff"
        strokeWidth={5}
        pointerEvents="none"
        d="M2.5 2.5h495v100H2.5z"
      />
      <switch transform="translate(206 39)">
        <foreignObject
          pointerEvents="all"
          width={87}
          height={26}
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          overflow="visible"
        >
          <div
            style={{
              lineHeight: 1.2,
              verticalAlign: 'top',
              width: 89,
              overflowWrap: 'normal',
              textAlign: 'center'
            }}
            display="inline-block"
            fontSize={12}
            fontFamily="Montserrat"
            color="#000"
            whiteSpace="nowrap"
          >
            <div
              style={{ textAlign: 'inherit' }}
              display="inline-block"
              textDecoration="inherit"
            >
              <Text>Header</Text>
            </div>
          </div>
        </foreignObject>
        <text
          x={44}
          y={19}
          textAnchor="middle"
          fontSize={12}
          fontFamily="Montserrat"
        >
          [Not supported by viewer]
        </text>
      </switch>
      <path
        fill="#e0f2ff"
        stroke="#fff"
        strokeWidth={5}
        pointerEvents="none"
        d="M2.5 112.5h115v360H2.5z"
      />
      <switch transform="translate(13 279)">
        <foreignObject
          pointerEvents="all"
          width={93}
          height={26}
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          overflow="visible"
        >
          <div
            style={{
              lineHeight: 1.2,
              verticalAlign: 'top',
              width: 93,
              overflowWrap: 'normal',
              textAlign: 'center'
            }}
            display="inline-block"
            fontSize={12}
            fontFamily="Montserrat"
            color="#000"
            whiteSpace="nowrap"
          >
            <div
              style={{ textAlign: 'inherit' }}
              display="inline-block"
              textDecoration="inherit"
            >
              <Text>Sidebar</Text>
            </div>
          </div>
        </foreignObject>
        <text
          x={47}
          y={19}
          textAnchor="middle"
          fontSize={12}
          fontFamily="Montserrat"
        >
          [Not supported by viewer]
        </text>
      </switch>
      <path
        fill="#bccbd6"
        stroke="#fff"
        strokeWidth={5}
        pointerEvents="none"
        d="M127.5 112.5h370v360h-370z"
      />
      <switch transform="translate(264 279)">
        <foreignObject
          pointerEvents="all"
          width={96}
          height={26}
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          overflow="visible"
        >
          <div
            style={{
              lineHeight: 1.2,
              verticalAlign: 'top',
              width: 98,
              overflowWrap: 'normal',
              textAlign: 'center'
            }}
            display="inline-block"
            fontSize={12}
            fontFamily="Montserrat"
            color="#000"
            whiteSpace="nowrap"
          >
            <div
              style={{ textAlign: 'inherit' }}
              display="inline-block"
              textDecoration="inherit"
            >
              <Text>Content</Text>
            </div>
          </div>
        </foreignObject>
        <text
          x={48}
          y={19}
          textAnchor="middle"
          fontSize={12}
          fontFamily="Montserrat"
        >
          [Not supported by viewer]
        </text>
      </switch>
      <path
        fill="#f33"
        stroke="#fff"
        strokeWidth={5}
        pointerEvents="none"
        d="M192.5 132.5h240v70h-240z"
      />
      <switch transform="translate(283 154)">
        <foreignObject
          pointerEvents="all"
          width={58}
          height={26}
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          overflow="visible"
        >
          <div
            style={{
              lineHeight: 1.2,
              verticalAlign: 'top',
              width: 60,
              overflowWrap: 'normal',
              textAlign: 'center'
            }}
            display="inline-block"
            fontSize={12}
            fontFamily="Montserrat"
            color="#000"
            whiteSpace="nowrap"
          >
            <div
              style={{ textAlign: 'inherit' }}
              display="inline-block"
              textDecoration="inherit"
            >
              <span fontSize={24}>Alert</span>
            </div>
          </div>
        </foreignObject>
        <text
          x={29}
          y={19}
          textAnchor="middle"
          fontSize={12}
          fontFamily="Montserrat"
        >
          [Not supported by viewer]
        </text>
      </switch>
      <path
        fill="#0f37ff"
        stroke="#fff"
        strokeWidth={5}
        pointerEvents="none"
        d="M2.5 482.5h495v60H2.5z"
      />
      <switch transform="translate(211 499)">
        <foreignObject
          pointerEvents="all"
          width={77}
          height={26}
          requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          overflow="visible"
        >
          <div
            style={{
              lineHeight: 1.2,
              verticalAlign: 'top',
              width: 78,
              overflowWrap: 'normal',
              textAlign: 'center'
            }}
            display="inline-block"
            fontSize={12}
            fontFamily="Montserrat"
            color="#000"
            whiteSpace="nowrap"
          >
            <div
              style={{ textAlign: 'inherit' }}
              display="inline-block"
              textDecoration="inherit"
            >
              <Text>Footer</Text>
            </div>
          </div>
        </foreignObject>
        <text
          x={39}
          y={19}
          textAnchor="middle"
          fontSize={12}
          fontFamily="Montserrat"
        >
          [Not supported by viewer]
        </text>
      </switch>
    </Svg>
  );
}
