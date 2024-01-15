import { useGLTF } from "@react-three/drei";

export function ModelBase() {
  const { nodes, materials } = useGLTF("/base.glb");
  return (
    <group  dispose={null}>
      <mesh
        castShadow
        receiveShadow
        //@ts-expect-error Error on useGlf types
        geometry={nodes.Cylinder_0.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI/2.8, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/base.glb");
