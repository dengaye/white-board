import React from 'react';
import { RecoilRoot } from 'recoil';

import CanvasContainer from './modules/canvas';
import BottomFeature from './modules/bottom-feature';
import LeftFeature from './modules/left-feature/index';
import RightFeature from './modules/right-feature';
import PreviewWindow from './components/preview-window';

export default function Container() {
  return (
    <RecoilRoot>
      <CanvasContainer />
      <BottomFeature />
      <LeftFeature />
      <RightFeature />
      <PreviewWindow />
    </RecoilRoot>
  );
}
