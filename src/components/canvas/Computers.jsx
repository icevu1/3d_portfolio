import React, { Suspense } from "react";

import { Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from "@react-three/drei";
import Loader from "../Loader";



const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf", true);
  const laptop = useGLTF("/laptop/scene.gltf", true);
  return (
    <mesh>
      <hemisphereLight intensity={0.30} />
      <pointLight  intensity={1} />
      <spotLight intensity={1} 
      position={[-20, 50, 10]} 
      angle={0.12} 
      penumbra={1} 
      castShadow
      shadow-mapSize={1024} />
      <primitive 
        object={laptop.scene}
        scale={0.02}
        position={[-1,-1.25, 0]}
        rotation={[0,Math.PI / 2, 0]}
       />
    </mesh>
  );
};

const ComputersCanvas = () => {
  
    return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};


export default ComputersCanvas;
