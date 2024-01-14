
import { useRef, useState } from 'react';

import { useFrame } from '@react-three/fiber'
import { useGLTF, Decal, useTexture } from "@react-three/drei";
import type { Mesh } from "three";

export function Model() {
  const { nodes, materials } = useGLTF("/scene.glb");
  const sceneRef = useRef<Mesh>(null)
  const [isAnimating, setIsAnimating] = useState(true)

  const texture = useTexture("works/solissolutions.png")

  useFrame((_, delta) => {
    if(!sceneRef.current?.rotateY) return
    if(!isAnimating) return
    sceneRef.current.rotateY(0.8 * delta)
  })

  const Iphone = () => (
    <>
      <mesh
        receiveShadow
        //@ts-expect-error Error on useGlf types
        geometry={nodes.Object_4.geometry} 
        material={materials["Material.001"]}
      >
        <Decal scale={[4.05, 1, 1.91]}>
          <meshBasicMaterial
            map={texture} 
            polygonOffset
            polygonOffsetFactor={-1}
          />
        </Decal>
      </mesh>
      <mesh
        receiveShadow
        //@ts-expect-error Error on useGlf types
        geometry={nodes.Object_5.geometry}
        material={materials["Material.002"]}
      />
    </>
  )

  return (
    <mesh
      ref={sceneRef}
      dispose={null}    
      onPointerEnter={() => {
        setIsAnimating(false)
      }}
      onPointerLeave={() => {
        setIsAnimating(true)
      }}
    >
    <group>
      <group position={[0.162, 0.17, -0.483]} scale={0.601}>
        <group 
          rotation={[0, 0, -Math.PI / 2]}
          scale={1.15}
        >
          <Iphone />
        </group>
        <group
          position={[-0.539, -0.567, 1.607]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={1.15}
        >
          <Iphone />
        </group>
      </group>
    </group>
    </mesh>
  );
}

useGLTF.preload("/scene.glb");
