"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SearchCore({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const outerGroupRef = useRef<THREE.Group>(null);
  const innerPolyRef = useRef<THREE.Mesh>(null);
  const cageRef = useRef<THREE.LineSegments>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (outerGroupRef.current) {
      outerGroupRef.current.rotation.y += delta * 0.12;
      outerGroupRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.12;
    }

    if (innerPolyRef.current) {
      innerPolyRef.current.rotation.x = time * 0.18;
      innerPolyRef.current.rotation.z = time * 0.14;
    }

    if (cageRef.current) {
      cageRef.current.rotation.x = -time * 0.08;
      cageRef.current.rotation.y = -time * 0.1;
      const pulse = (Math.sin(time * 2.5) + 1) * 0.5;
      const mat = cageRef.current.material as THREE.LineBasicMaterial;
      if (mat) {
        mat.opacity = 0.11 + pulse * 0.07;
      }
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = 1.1;
      ring1Ref.current.rotation.y = time * 0.22;
      ring1Ref.current.rotation.z = Math.sin(time * 0.5) * 0.2;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -0.8;
      ring2Ref.current.rotation.y = -time * 0.18;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = 0.4;
      ring3Ref.current.rotation.z = time * 0.15;
    }
  });

  return (
    <group ref={outerGroupRef} position={position}>
      {/* Dynamic Inner Core - Faceted Knowledge Seed */}
      <mesh ref={innerPolyRef}>
        <octahedronGeometry args={[1.35, 1]} />
        <meshPhysicalMaterial
          color="#0d1b3e"
          emissive="#1e2955"
          emissiveIntensity={0.28}
          roughness={0.2}
          metalness={0.35}
          clearcoat={1}
          clearcoatRoughness={0.15}
          reflectivity={0.8}
          transparent
          opacity={0.42}
          depthWrite={false}
          wireframe={false}
        />
      </mesh>

      {/* Authority Cage - Icosahedral Edges */}
      <lineSegments ref={cageRef}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(1.85, 1)]} />
        <lineBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Outer Semantic Cage */}
      <lineSegments>
        <edgesGeometry args={[new THREE.DodecahedronGeometry(2.35, 0)]} />
        <lineBasicMaterial
          color="#4f46e5"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Orbital Index Ring 1 - Deep Blue Precision Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.8, 0.016, 16, 100]} />
        <meshBasicMaterial
          color="#1d4ed8"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbital Index Ring 2 - Muted Cyan Signal Accent */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.2, 0.012, 16, 100]} />
        <meshBasicMaterial
          color="#0284c7"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbital Index Ring 3 - Deep Indigo Meridian */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.6, 0.010, 16, 100]} />
        <meshBasicMaterial
          color="#4338ca"
          transparent
          opacity={0.09}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Central Core Ambient Point Light (Restrained & Subtle) */}
      <pointLight
        color="#0284c7"
        intensity={0.5}
        distance={8}
        decay={2}
      />
      <pointLight
        color="#38bdf8"
        intensity={0.25}
        distance={5}
        decay={2}
      />
    </group>
  );
}
