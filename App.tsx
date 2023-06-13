import React from 'react';
import PianoUI from './components/piano-ui-container';
import { CameraTargetContextProvider } from './context/piano-track-context'

export default function App(){

  return(
    <CameraTargetContextProvider>
        <PianoUI />
    </CameraTargetContextProvider>
  );
}