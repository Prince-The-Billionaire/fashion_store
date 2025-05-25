"use client";

import React, {useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { gsap } from "gsap";
import { FaPlay } from "react-icons/fa";

// Load the GLB room scene
function RoomModel() {
  const { scene } = useGLTF("/room.glb");
  return <primitive object={scene} />;
}

// Camera controller with GSAP animation
function CameraController({ startExperience }: { startExperience: boolean }) {
  const { camera } = useThree();
//   const initialPos = useRef([0, 5, 10]);
  const targetPos = [30, 2.2, 30]; // raise camera higher for mannequin view

  useFrame(() => {
    if (startExperience) {
      gsap.to(camera.position, {
        duration: 2,
        x: targetPos[0],
        y: targetPos[1],
        z: targetPos[2] + 2.5,
        ease: "power2.out"
      });
    }
  });

  return null;
}

const Experience3D = () => {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative w-full h-[600px]">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [10, 150, 300], fov: 20 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <RoomModel />
          <Environment files="/interior.exr" background />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={!started} enableRotate={true} />
        <CameraController startExperience={started} />
      </Canvas>

      {/* Experience Button */}
      {!started && (
        <button
          onClick={() => setStarted(true)}
          className="absolute inset-0 m-auto bg-amber-500 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:bg-amber-600 transition-all z-10"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <FaPlay /> Enter 3D Experience
        </button>
      )}
    </div>
  );
};

export default Experience3D;
