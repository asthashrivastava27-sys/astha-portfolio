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
      <color attach="background" args={["#020617"]} />
      <fogExp2 attach="fog" args={["#020617", 0.046]} />

      {/* Cinematic Multi-Source Lighting - Restrained Ambient Tech */}
      <ambientLight intensity={0.18} color="#0a152e" />

      {/* Electric Blue Key Light */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={0.55}
        color="#38bdf8"
      />

      {/* Muted Violet Fill Light */}
      <directionalLight
        position={[-6, -4, -3]}
        intensity={0.35}
        color="#6366f1"
      />

      {/* Deep Navy Rim Light */}
      <pointLight
        position={[0, -6, 2]}
        intensity={0.65}
        color="#1e1b4b"
        distance={14}
      />

      {/* Ambient Signal Accent Light */}
      <pointLight
        position={[0, -2, -8]}
        intensity={0.5}
        color="#38bdf8"
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
