"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DataDust() {
  const pointsRef1 = useRef<THREE.Points>(null);
  const pointsRef2 = useRef<THREE.Points>(null);

  // Deep Field Particles (Corpus Universe - Restrained Faint Dust)
  const { positions1, colors1 } = useMemo(() => {
    const count = 420;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 28;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 24 - 4;

      // Deep indigo to muted slate-blue palette
      const mix = Math.random();
      if (mix < 0.6) {
        cols[i * 3] = 0.08;     // Deep navy/indigo
        cols[i * 3 + 1] = 0.14;
        cols[i * 3 + 2] = 0.38;
      } else if (mix < 0.9) {
        cols[i * 3] = 0.12;    // Muted slate-blue
        cols[i * 3 + 1] = 0.28;
        cols[i * 3 + 2] = 0.55;
      } else {
        cols[i * 3] = 0.25;    // Subtle twilight violet
        cols[i * 3 + 1] = 0.18;
        cols[i * 3 + 2] = 0.45;
      }
    }

    return { positions1: pos, colors1: cols };
  }, []);

  // Active Signal Particles (Faint Ambient Sparks)
  const { positions2, colors2 } = useMemo(() => {
    const count = 110;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.8;

      pos[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta);

      // Restrained soft cyan and subtle blue
      if (Math.random() < 0.2) {
        cols[i * 3] = 0.15;     // Soft cyan accent
        cols[i * 3 + 1] = 0.45;
        cols[i * 3 + 2] = 0.75;
      } else {
        cols[i * 3] = 0.10;     // Subtle deep blue
        cols[i * 3 + 1] = 0.30;
        cols[i * 3 + 2] = 0.60;
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
          size={0.038}
          vertexColors
          transparent
          opacity={0.18}
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
          size={0.040}
          vertexColors
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
