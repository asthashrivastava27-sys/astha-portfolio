"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DataDust() {
  const pointsRef1 = useRef<THREE.Points>(null);
  const pointsRef2 = useRef<THREE.Points>(null);

  // Deep Field Particles (Corpus Universe)
  const { positions1, colors1 } = useMemo(() => {
    const count = 900;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 24 - 4;

      // Indigo to muted electric blue palette
      const mix = Math.random();
      if (mix < 0.6) {
        cols[i * 3] = 0.15;     // Deep indigo
        cols[i * 3 + 1] = 0.2;
        cols[i * 3 + 2] = 0.6;
      } else if (mix < 0.9) {
        cols[i * 3] = 0.22;    // Electric blue
        cols[i * 3 + 1] = 0.55;
        cols[i * 3 + 2] = 0.95;
      } else {
        cols[i * 3] = 0.55;    // Muted violet
        cols[i * 3 + 1] = 0.35;
        cols[i * 3 + 2] = 0.85;
      }
    }

    return { positions1: pos, colors1: cols };
  }, []);

  // Active Signal Particles (Crawl Pulse)
  const { positions2, colors2 } = useMemo(() => {
    const count = 320;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2.0 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.8;

      pos[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta);

      // Electric blue with rare lime sparks
      if (Math.random() < 0.2) {
        cols[i * 3] = 0.64;     // Lime accent
        cols[i * 3 + 1] = 0.9;
        cols[i * 3 + 2] = 0.2;
      } else {
        cols[i * 3] = 0.22;     // Electric blue
        cols[i * 3 + 1] = 0.74;
        cols[i * 3 + 2] = 0.98;
      }
    }

    return { positions2: pos, colors2: cols };
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (pointsRef1.current) {
      pointsRef1.current.rotation.y = time * 0.015;
      pointsRef1.current.rotation.x = Math.sin(time * 0.05) * 0.03;
    }

    if (pointsRef2.current) {
      pointsRef2.current.rotation.y = -time * 0.04;
      pointsRef2.current.rotation.z = time * 0.02;
    }
  });

  return (
    <group>
      {/* Deep Background Matrix */}
      <points ref={pointsRef1}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions1, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors1, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          vertexColors
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      {/* Active Signal Core Swarm */}
      <points ref={pointsRef2}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions2, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors2, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
