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
        mat.opacity = 0.45 + pulse * 0.35;
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
          emissive="#1e1b4b"
          emissiveIntensity={0.6}
          roughness={0.18}
          metalness={0.88}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
          wireframe={false}
        />
      </mesh>

      {/* Authority Cage - Icosahedral Edges */}
      <lineSegments ref={cageRef}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(1.85, 1)]} />
        <lineBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Outer Semantic Cage */}
      <lineSegments>
        <edgesGeometry args={[new THREE.DodecahedronGeometry(2.35, 0)]} />
        <lineBasicMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Orbital Index Ring 1 - Electric Blue Precision Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.8, 0.018, 16, 100]} />
        <meshBasicMaterial
          color="#0066ff"
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbital Index Ring 2 - Lime Signal Accent */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.2, 0.014, 16, 100]} />
        <meshBasicMaterial
          color="#a3e635"
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbital Index Ring 3 - Deep Violet Meridian */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.6, 0.012, 16, 100]} />
        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Central Core Point Light with Lime/Electric Blue Hue */}
      <pointLight
        color="#38bdf8"
        intensity={3.5}
        distance={9}
        decay={2}
      />
      <pointLight
        color="#a3e635"
        intensity={1.8}
        distance={6}
        decay={2}
      />
    </group>
  );
}
