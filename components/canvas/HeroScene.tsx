"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import SearchCore from "./SearchCore";
import SearchGraph from "./SearchGraph";
import SignalSplines from "./SignalSplines";
import DataDust from "./DataDust";
import SignalScene from "./SignalScene";
import CameraRig from "./CameraRig";
import { useSceneStore } from "@/stores/useSceneStore";

export default function HeroScene() {
  const worldRef = useRef<THREE.Group>(null);
  const scrollProgress = useSceneStore((s) => s.scrollProgress);

  useFrame(() => {
    if (worldRef.current) {
      // Gentle spatial rotation as the user scrolls down the portfolio
      worldRef.current.rotation.y = scrollProgress * 0.35;
    }
  });

  return (
    <>
      {/* Cinematic Fog for atmospheric depth */}
      <color attach="background" args={["#030712"]} />
      <fogExp2 attach="fog" args={["#040817", 0.038]} />

      {/* Cinematic Multi-Source Lighting */}
      <ambientLight intensity={0.45} color="#0d1b3e" />

      {/* Electric Blue Key Light */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={2.2}
        color="#38bdf8"
      />

      {/* Muted Violet Fill Light */}
      <directionalLight
        position={[-6, -4, -3]}
        intensity={1.5}
        color="#7c3aed"
      />

      {/* Deep Navy Rim Light */}
      <pointLight
        position={[0, -6, 2]}
        intensity={2.8}
        color="#1e1b4b"
        distance={14}
      />

      {/* Ambient Signal Accent Light */}
      <pointLight
        position={[0, -2, -8]}
        intensity={2.5}
        color="#a3e635"
        distance={16}
        decay={2}
      />

      {/* Dynamic Camera Rig with Mouse Parallax & Scroll Interpolation */}
      <CameraRig />

      {/* Living 3D Search & Signal Universe */}
      <group ref={worldRef}>
        <SearchCore position={[0, 0, 0]} />
        <SearchGraph />
        <SignalSplines />
        <DataDust />
        <SignalScene />
      </group>
    </>
  );
}
