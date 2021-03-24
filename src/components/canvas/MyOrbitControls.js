import React, { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { useFrame, useRender } from 'react-three-fiber';


const MyOrbitControls = ({ target }) => {
  
  const controls = useRef()

  useFrame(() => {
    if (controls.current) {
      controls.current.update()
    }
  })

  return (
    <>
      <OrbitControls
        ref={controls}
        target={target}
        enabled={true}
        enablePan={false}
        enableRotate={true}
        minDistance={.5}
        maxDistance={2}
        enableDamping={true}
        dampingFactor={0.07}
      />
    </>
  )
}

export default MyOrbitControls