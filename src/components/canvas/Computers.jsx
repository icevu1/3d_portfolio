import React, { Suspense } from "react";

import { Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from "@react-three/drei";
import Loader from "../Loader";



const Computers = () => {
  const server = useGLTF("/server3D/scene.gltf", true);
  return (
    <mesh>
      <hemisphereLight intensity={5.30} />
      <pointLight  intensity={5} />
      <spotLight intensity={5} 
      position={[-20, 50, 10]} 
      angle={0.12} 
      penumbra={1} 
      castShadow
      shadow-mapSize={1024} />
      <primitive 
        object={server.scene}
        scale={2}
        // scale={0.02} for laptop
        position={[-2,-3.25, 0]} // [-1,-1.25, 0] for laptop
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
