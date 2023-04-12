import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as THREE from 'three';

const Stars = (props) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y -= delta / 10;
    ref.current.rotation.x -= delta / 15;
  });

  const generateRandomPointsInSphere = (numPoints, radius) => {
    const points = new Float32Array(numPoints * 3);
    const tempVector = new THREE.Vector3();

    for (let i = 0; i < numPoints; i++) {
      tempVector.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
      tempVector.normalize().multiplyScalar(radius * Math.random());
      points[i * 3] = tempVector.x;
      points[i * 3 + 1] = tempVector.y;
      points[i * 3 + 2] = tempVector.z;
    }

    return points;
  };

  const sphere = generateRandomPointsInSphere(5000, 1.2);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          size={0.002}
          sizeAttenuation={true}
          color="#f272c8"
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
