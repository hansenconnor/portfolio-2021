import React, { useState, memo, Suspense } from 'react'
// import { VRCanvas, DefaultXRControllers } from '@react-three/xr'
// import { Stats } from '@react-three/drei'
// import { Controls } from 'react-three-gui';
import { Canvas } from 'react-three-fiber'
// import { Controls, withControls } from 'react-three-gui';
// import { PCFSoftShadowMap } from 'three';
// import { Perf } from 'r3f-perf'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// import copy from 'copy-to-clipboard';

// import XRPackage from './XRPackage'
import Scene from '../components/canvas/Scene'
import MyOrbitControls from '../components/canvas/MyOrbitControls'
// import { useQueryState } from './useQueryState'
// import VRButton from './components/ui/VRButton'
// import RemixCTA from './components/ui/RemixCTA'
// import Gallery from './components/ui/Gallery/'
// import Remixer from './components/ui/Remixer/'
// import BackLink from './components/ui/BackLink'
// import AboutOverlay from './components/ui/AboutOverlay'
// import Loader from './components/ui/Loader'

// import { useUIStore } from './store'

// import './App.scss';

// polyfill this way for react-three-gui
(async () => {
  if ('ResizeObserver' in window === false) {
    // Loads polyfill asynchronously, only if required.
    const module = await import('@juggle/resize-observer');
    window.ResizeObserver = module.ResizeObserver;
  }
})();

// const CanvasWithControls = withControls(VRCanvas);

// function CopyToClipboard() {
//   useControl('Copy blob URL', { type: 'button', onClick: () => {
//     return copy(window.location.protocol + '//' + window.location.host + '/view' + window.location.search)
//   }});
//   return null
// }

const iconPosition = [0, 1.6, 0]
const cameraTarget = [0, 1.58, 0]
const cameraPosition = [0, iconPosition[1], .7]





const AppCanvas = memo(({onCreated}) => {
  const [pixelRatio/*, setPixelRatio*/] = useState(window.devicePixelRatio)
//   const [pixelRatio/*, setPixelRatio*/] = useQueryState('pixelRatio', window.devicePixelRatio)
  const [enableShadowMap/*, setEnableShadowMap*/] = useState(false)
//   const [enableShadowMap/*, setEnableShadowMap*/] = useQueryState('shadowMap', false)

  // useControl('Pixel ratio', { type: 'number', state: [pixelRatio, setPixelRatio], min: 0, max: window.devicePixelRatio, group: 'Renderer' });
  // useControl('Shadows enabled', { type: 'boolean', state: [enableShadowMap, setEnableShadowMap], group: 'Renderer' });
  // const showFPS = useControl('Show FPS', { type: 'boolean', value: false, group: 'Environment' });

  return (
    <Canvas
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      }}
      pixelRatio={Math.min(pixelRatio, 1.6)}
      noEvents
      colorManagement
      camera={{
        fov: 40,
        near: 0.1,
        position: cameraPosition,
        zoom: 1,
      }}
      // shadowMap={{
      //   enabled: enableShadowMap,
      //   type: PCFSoftShadowMap
      // }}
      concurrent
      onCreated={({gl, ...props}) => {
        gl.debug.checkShaderErrors = false
        gl.setClearColor('#141518', 1.0)
        onCreated({ gl, ...props })
        setTimeout(() => gl.domElement.parentNode.style.opacity = 1, 0)
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
      }}
    >
      <Suspense fallback={null}>
        <Scene center={iconPosition} enableShadowMap={enableShadowMap}/>
        <MyOrbitControls target={cameraTarget} cameraPosition={cameraPosition} />
      </Suspense>

      {/* { showFPS && (
        <Stats/>
      )} */}
      {/* <Perf/> */}
      {/* <DefaultXRControllers/> */}
      {/* <XRPackage onStarted={() => console.log("Chimera session started")}/> */}
      {/* <CopyToClipboard /> */}      
    </Canvas>
  )
})

function App() {  
//   const showControls = useState(false)
//   const showControls = useUIStore(s => s.showControls)
  const [gl, setGL] = useState()  
  
//   const isAboutOpen = useState(false)
//   const isAboutOpen = useUIStore(s => s.aboutOpen)
  


  return (
    <div className="App">
        <AppCanvas onCreated={({gl}) => setGL(gl)}/>
      {/* <Controls.Provider>  
        <AppCanvas onCreated={({gl}) => setGL(gl)}/> */}

        {/* <div className={'AppUI ' + (isAboutOpen ? 'hidden' : '')}> */}
          

          {/* <VRButton gl={gl} /> */}

        {/* </div> */}

        {/* <AboutOverlay /> */}

        {/* { (showControls && !isAboutOpen) &&
          <Controls
            title="Blob Mixer"
            collapsed={true}
            anchor={'bottom_right'}
            defaultClosedGroups={['Renderer', 'Lights', 'Blob Material', 'Blob Noise', 'Blob Surface Noise', 'Blob Geometry', 'Environment', 'Floor', 'Spotlight#1', 'Spotlight#2', 'Spotlight#3', 'Spotlight#4', 'Spotlight#5', 'Camera', 'Post-processing']}
            style={{
              maxHeight: 'min(90vh, 80vw)',
              borderRadius: '0px',
              background: '#000',
              color: '#fff',
              fontFamily: 'Aften Screen',
            }}
            className="GUI"
          />
        } */}
      {/* </Controls.Provider> */}
      {/* Loader doubles FPS.. whaaaat */}
      {/* <Loader/> */}
    </div>
  );
}



export default App;