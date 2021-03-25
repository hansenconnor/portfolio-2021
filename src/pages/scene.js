import React, { useState, memo, Suspense, useEffect, useRef } from 'react'
// import { VRCanvas, DefaultXRControllers } from '@react-three/xr'
// import { Stats } from '@react-three/drei'
// import { PerspectiveCamera } from '@react-three/drei'
// import { OrbitControls } from '@react-three/drei'
// import { Controls } from 'react-three-gui';
import { Canvas, useFrame, useResource, useUpdate, useThree, extend } from 'react-three-fiber'
// import { Controls, withControls } from 'react-three-gui';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
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
// import MyOrbitControls from '../components/canvas/MyOrbitControls'
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

// extend({ OrbitControls });
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


// const CameraControls = () => {
//   // Get a reference to the Three.js Camera, and the canvas html element.
//   // We need these to setup the OrbitControls class.
//   // https://threejs.org/docs/#examples/en/controls/OrbitControls

//   // const {
//   //   camera,
//   //   gl: { domElement }
//   // } = useThree();
//   const camera = useRef();
//   // Ref to the controls, so that we can update them on every frame using useFrame
//   const controls = useRef();
//   useFrame(state => controls.current.update());
//   return (
//     <>
//       <PerspectiveCamera fov={40} near={0.1} zoom={1} ref={camera} position={cameraPosition} />
//       <orbitControls
//         ref={controls}
//         camera={camera.current}
//         enableZoom
//         enableDamping
//         dampingFactor={0.1}
//         rotateSpeeed={0.5}
//         minPolarAngle={0}
//       />
//     </>
//   );
// };



const AppCanvas = memo(({onCreated}) => {
  const [pixelRatio/*, setPixelRatio*/] = useState(window.devicePixelRatio)
//   const [pixelRatio/*, setPixelRatio*/] = useQueryState('pixelRatio', window.devicePixelRatio)
  const [enableShadowMap/*, setEnableShadowMap*/] = useState(false)
//   const [enableShadowMap/*, setEnableShadowMap*/] = useQueryState('shadowMap', false)

  // useControl('Pixel ratio', { type: 'number', state: [pixelRatio, setPixelRatio], min: 0, max: window.devicePixelRatio, group: 'Renderer' });
  // useControl('Shadows enabled', { type: 'boolean', state: [enableShadowMap, setEnableShadowMap], group: 'Renderer' });
  // const showFPS = useControl('Show FPS', { type: 'boolean', value: false, group: 'Environment' });

  // const controls = useRef()
  // const camera = useResource()

  return (
    <Canvas
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      pixelRatio={Math.min(pixelRatio, 1.6)}
      noEvents
      colorManagement
      // shadowMap={{
      //   enabled: enableShadowMap,
      //   type: PCFSoftShadowMap
      // }}
      concurrent
      onCreated={({gl, ...props}) => {
        gl.debug.checkShaderErrors = false
        gl.setClearColor(0xffffff, 0)
        onCreated({ gl, ...props })
        setTimeout(() => gl.domElement.parentNode.style.opacity = 1, 0)
      }}
      style={{
        opacity: 0,
        width: "100%",
        height: "100%"
      }}
    >
      
      {/* <CameraControls /> */}
      <Suspense fallback={null}>
        <Scene center={[0,0,0]} enableShadowMap={enableShadowMap}/>
        {/* <PerspectiveCamera fov={40} near={0.1} zoom={1} ref={camera} position={cameraPosition} /> */}
        {/* <MyOrbitControls target={cameraTarget} /> */}
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

function AppScene() {  
//   const showControls = useState(false)
//   const showControls = useUIStore(s => s.showControls)
  const [gl, setGL] = useState()  
  
//   const isAboutOpen = useState(false)
//   const isAboutOpen = useUIStore(s => s.aboutOpen)
  


  return (
    <AppCanvas onCreated={({gl}) => setGL(gl)}/>
  );
}



export default AppScene;