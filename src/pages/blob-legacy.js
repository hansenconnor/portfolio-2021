import * as THREE from 'three'
import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useResource } from 'react-three-fiber'
import { EffectComposer, SSAO } from 'react-postprocessing'
import { NoiseShader } from '../shaders/NoiseShader'
import { StarShader } from '../shaders/StarShader'
import { StarShader2 } from '../shaders/StarShader2'

function Blob({ count = 1, mouse, blobColor }) {
  const mesh = useRef()
  const start = Date.now()

  useFrame((state, delta) => {
      mesh.current.material.uniforms.time.value = (0.5 / 1000) * (Date.now() - start)
      mesh.current.material.uniforms.iTime.value = (0.5 / 1000) * (Date.now() - start)
    //   mesh.current.material.time += delta
    //   NoiseShader.uniforms['time'].value = (0.4 / 1000) * (Date.now() - start)
    // mat.uniforms['time'].value = (options.perlin.speed / 1000) * (Date.now() - start);
    // console.log(mesh.current.material.time)
  })

  return (
      <mesh scale={[2, 2, 2]} ref={mesh}>
        {/* <sphereBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <shaderMaterial
            attach="material"
            side={THREE.DoubleSide}
            uniforms={NoiseShader.uniforms}
            vertexShader={NoiseShader.vertexShader}
            fragmentShader={NoiseShader.fragmentShader}
        ></shaderMaterial> */}
        {/* <boxBufferGeometry args={[1, 1, 1]} /> */}
        <icosahedronBufferGeometry args={[1,200]} />
        <shaderMaterial args={[StarShader2]}></shaderMaterial> 
        {/* <meshStandardMaterial color={'hotpink'} /> */}
      </mesh>
  )
}

function Lights() {
    const [ref, light] = useResource()
    return (
      <>
        <ambientLight intensity={1.5} />
        <directionalLight
          ref={ref}
          intensity={0.6}
          position={[10, 10, 10]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        {light && <directionalLightHelper args={[light, 5]} />}
      </>
    )
  }
  

function BlobScene() {
  return (
    <Canvas
        className="min-h-screen"
        shadowMap
        gl={{ alpha: false, antialias: false }}
        camera={{ position: [0, 0, 20], near: 0.01, far: 10000, fov: 60 }}
        onCreated={(state) => state.gl.setClearColor('#f0f0f0')}>
        <Blob />
        <Lights />
        {/* <EffectComposer multisampling={0}>
            <SSAO samples={31} radius={20} intensity={40} luminanceInfluence={0.1} color="black" />
        </EffectComposer> */}
    </Canvas>
  )
}

export default BlobScene
