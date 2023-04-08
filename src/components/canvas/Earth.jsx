import React, { Suspense } from "react";

import { Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from "@react-three/drei";
import Loader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf", true);
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} position-x={0} >
      
    </primitive>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
  }
export default EarthCanvas;