import React from 'react';
import { Appear, List, ListItem, Notes, Slide, SlideSet } from 'spectacle';
import marked from 'marked';
import dasherize from 'lodash.kebabcase';
import { CodeSlide } from '@dschau/spectacle-code-slide';

import * as Intro from './01-introduction-to-css-and-js';
import * as RealWorldUsage from './02-real-world-usage';

export default function makeSlides() {
  return [Intro, RealWorldUsage].map((Slides, rootIndex) => {
    return (
      <SlideSet key={rootIndex}>
        {Object.keys(Slides).map((key, index) => {
          const id = dasherize(key);
          const Content = Slides[key];
          const Props = Content && Content.Props ? Content.Props : {};
          const iteratorKey = `${rootIndex}-${index}`;
          if (Props.code) {
            const { ranges = [], ...props } = Content.Props;
            return (
              <CodeSlide id={id} key={iteratorKey} ranges={ranges} {...props} />
            );
          }
          return (
            <Slide key={iteratorKey} {...Content.Props || Content.props}>
              <Notes>
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked((Props.notes || '').trim())
                  }}
                />
              </Notes>
              {typeof Content === 'function' ? <Content /> : Content}
            </Slide>
          );
        })}
      </SlideSet>
    );
  });
}
