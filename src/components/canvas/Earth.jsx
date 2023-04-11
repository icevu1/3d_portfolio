import React, { Suspense } from "react";

import { Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from "@react-three/drei";
import Loader from "../Loader";

const Earth = () => {
  const earth = useGLTF("/galaxy/scene.gltf", true);
  return (
    <primitive object={earth.scene} scale={.1} position-y={0} position-x={0} >
      
    </primitive>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ fov: 45, near: 0.1, far: 1000, position: [-16, 12, 24] }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, 0, 0]}
        />
        <Earth />
      </Suspense>
    </Canvas>
  )
  }
export default EarthCanvas;