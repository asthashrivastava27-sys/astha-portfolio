"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { sceneStore, SignalType } from "@/stores/useSceneStore";

interface SignalClusterConfig {
  id: string;
  stream: "DISCOVER" | "ENGAGE" | "CONVERT" | "GROW";
  type: SignalType;
  label: string;
  metricValue: string;
  metricLabel: string;
  description: string;
  position: [number, number, number];
  color: string;
  glowColor: string;
  shape: "octa" | "tetra" | "icosa";
}

const CLUSTERS: SignalClusterConfig[] = [
  {
    id: "cluster-discover",
    stream: "DISCOVER",
    type: "SEARCH VISIBILITY",
    label: "DISCOVER // SEARCH VISIBILITY",
    metricValue: "8.5M+",
    metricLabel: "Search Impressions",
    description: "Search impressions captured across targeted search queries",
    position: [-4.6, 2.2, -11.5],
    color: "#38bdf8",
    glowColor: "#0284c7",
    shape: "octa",
  },
  {
    id: "cluster-engage",
    stream: "ENGAGE",
    type: "ORGANIC ENGAGEMENT",
    label: "ENGAGE // ORGANIC CLICKS",
    metricValue: "269K+",
    metricLabel: "Organic Clicks",
    description: "Qualified organic search visits directed to high-value pages",
    position: [4.8, 2.0, -12.0],
    color: "#60a5fa",
    glowColor: "#6366f1",
    shape: "tetra",
  },
  {
    id: "cluster-convert",
    stream: "CONVERT",
    type: "LEAD GENERATION",
    label: "CONVERT // ORGANIC LEADS",
    metricValue: "6K+",
    metricLabel: "Organic Leads Generated",
    description: "Direct lead generation driven by organic search intent",
    position: [-4.4, -2.2, -11.0],
    color: "#a3e635",
    glowColor: "#84cc16",
    shape: "octa",
  },
  {
    id: "cluster-grow",
    stream: "GROW",
    type: "CONTENT PERFORMANCE",
    label: "GROW // CONTENT OPTIMIZED",
    metricValue: "570+ Blogs",
    metricLabel: "Content & Technical SEO",
    description: "570+ blogs published and 200+ assets optimized at scale",
    position: [4.6, -2.4, -11.5],
    color: "#c084fc",
    glowColor: "#a3e635",
    shape: "icosa",
  },
];

// Interactive Signal Cluster Node
function SignalClusterNode({
  cluster,
  centerPos,
}: {
  cluster: SignalClusterConfig;
  centerPos: THREE.Vector3;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.7;

      const floatY = Math.sin(time * 1.5 + cluster.position[0]) * 0.12;
      meshRef.current.position.y = cluster.position[1] + floatY;

      const targetScale = hovered ? 1.4 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);
    }

    if (haloRef.current) {
      const pulse = (Math.sin(time * 3.5 + cluster.position[1]) + 1) * 0.5;
      const mat = haloRef.current.material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.opacity = hovered ? 0.9 : 0.25 + pulse * 0.25;
      }
      haloRef.current.rotation.z -= delta * 0.3;
    }
  });

  return (
    <group position={[cluster.position[0], 0, cluster.position[2]]}>
      {/* Central Interactive Core Node */}
      <mesh
        ref={meshRef}
        position={[0, cluster.position[1], 0]}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
          sceneStore.setSignalHud({
            type: cluster.type,
            stream: cluster.stream,
            metricLabel: cluster.metricLabel,
            metricValue: cluster.metricValue,
            description: cluster.description,
          });
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
          sceneStore.setSignalHud(null);
        }}
      >
        {cluster.shape === "octa" && <octahedronGeometry args={[0.55, 0]} />}
        {cluster.shape === "tetra" && <tetrahedronGeometry args={[0.65, 0]} />}
        {cluster.shape === "icosa" && <icosahedronGeometry args={[0.55, 0]} />}

        <meshStandardMaterial
          color={hovered ? "#ffffff" : cluster.color}
          emissive={hovered ? cluster.color : cluster.glowColor}
          emissiveIntensity={hovered ? 2.2 : 1.0}
          roughness={0.2}
          metalness={0.85}
          wireframe={!hovered}
        />
      </mesh>

      {/* Luminous Orbital Shell */}
      <mesh
        ref={haloRef}
        position={[0, cluster.position[1], 0]}
        scale={1.2}
      >
        <octahedronGeometry args={[0.85, 1]} />
        <meshBasicMaterial
          color={cluster.color}
          wireframe
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Cluster Local Point Light */}
      <pointLight
        position={[0, cluster.position[1], 0]}
        color={cluster.color}
        intensity={hovered ? 3.5 : 1.6}
        distance={5}
        decay={2}
      />
    </group>
  );
}

export default function SignalScene() {
  const centerPos = useMemo(() => new THREE.Vector3(0, 0, -12.0), []);
  const resonatorRef = useRef<THREE.Mesh>(null);
  const resonatorCageRef = useRef<THREE.LineSegments>(null);
  const waveRingsRef = useRef<THREE.Group>(null);
  const pulsesRef = useRef<THREE.Group[]>([]);
  const { pointer } = useThree();

  // 4 primary 3D curved paths connecting the central resonator to each cluster
  const paths = useMemo(() => {
    return CLUSTERS.map((cluster) => {
      const start = centerPos.clone();
      const end = new THREE.Vector3(...cluster.position);

      const mid = start.clone().lerp(end, 0.5);
      mid.x += cluster.position[0] > 0 ? 1.0 : -1.0;
      mid.y += cluster.position[1] > 0 ? 0.8 : -0.8;
      mid.z += 1.5;

      const curve = new THREE.CatmullRomCurve3([start, mid, end], false, "catmullrom", 0.5);
      return {
        curve,
        points: curve.getPoints(80),
        cluster,
      };
    });
  }, [centerPos]);

  // Traveling Particle Stream along each signal path
  const particleStream = useMemo(() => {
    const totalParticles = 240;
    const pos = new Float32Array(totalParticles * 3);
    const cols = new Float32Array(totalParticles * 3);

    for (let i = 0; i < totalParticles; i++) {
      const pathIdx = i % paths.length;
      const t = Math.random();
      const pt = paths[pathIdx].curve.getPointAt(t);

      pos[i * 3] = pt.x + (Math.random() - 0.5) * 0.25;
      pos[i * 3 + 1] = pt.y + (Math.random() - 0.5) * 0.25;
      pos[i * 3 + 2] = pt.z + (Math.random() - 0.5) * 0.25;

      const col = new THREE.Color(paths[pathIdx].cluster.color);
      cols[i * 3] = col.r;
      cols[i * 3 + 1] = col.g;
      cols[i * 3 + 2] = col.b;
    }

    return { pos, cols };
  }, [paths]);

  const streamPointsRef = useRef<THREE.Points>(null);

  // Background Depth Dust for the Signal Field
  const { bgPos, bgCols } = useMemo(() => {
    const count = 450;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 32;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = -8 + (Math.random() - 0.5) * 16;

      if (Math.random() < 0.25) {
        cols[i * 3] = 0.64; cols[i * 3 + 1] = 0.9; cols[i * 3 + 2] = 0.2; // Lime
      } else if (Math.random() < 0.65) {
        cols[i * 3] = 0.22; cols[i * 3 + 1] = 0.65; cols[i * 3 + 2] = 0.98; // Cyan/Blue
      } else {
        cols[i * 3] = 0.5; cols[i * 3 + 1] = 0.3; cols[i * 3 + 2] = 0.85; // Violet
      }
    }
    return { bgPos: pos, bgCols: cols };
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Rotate Central Signal Resonator
    if (resonatorRef.current) {
      resonatorRef.current.rotation.x = time * 0.25;
      resonatorRef.current.rotation.y = time * 0.35;
      resonatorRef.current.rotation.z = Math.sin(time * 0.5) * 0.2;

      resonatorRef.current.position.x = centerPos.x + pointer.x * 0.4;
      resonatorRef.current.position.y = centerPos.y + pointer.y * 0.3;
    }

    if (resonatorCageRef.current) {
      resonatorCageRef.current.rotation.x = -time * 0.2;
      resonatorCageRef.current.rotation.y = -time * 0.25;
    }

    // Expand Signal Rings
    if (waveRingsRef.current) {
      waveRingsRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        const phase = (time * 0.8 + i * 0.7) % 3;
        const scale = 1.2 + phase * 1.8;
        mesh.scale.set(scale, scale, scale);
        const mat = mesh.material as THREE.MeshBasicMaterial;
        if (mat) {
          mat.opacity = Math.max(0, 0.5 - (phase / 3) * 0.5);
        }
      });
    }

    // Animate Traveling Signal Pulses along Paths
    paths.forEach((p, idx) => {
      const pulseGroup = pulsesRef.current[idx];
      if (pulseGroup) {
        const speed = 0.22 + idx * 0.04;
        const t = (time * speed) % 1;
        const pos = p.curve.getPointAt(t);
        const tangent = p.curve.getTangentAt(t);

        pulseGroup.position.copy(pos);
        const lookTarget = pos.clone().add(tangent);
        pulseGroup.lookAt(lookTarget);

        const pulseScale = 1 + Math.sin(time * 8 + idx) * 0.3;
        pulseGroup.scale.set(pulseScale, pulseScale, pulseScale * 2.0);
      }
    });

    // Animate particle stream positions
    if (streamPointsRef.current) {
      const positions = streamPointsRef.current.geometry.attributes.position.array as Float32Array;
      const count = positions.length / 3;

      for (let i = 0; i < count; i++) {
        const pathIdx = i % paths.length;
        const initialT = (i / count);
        const currentT = (initialT + time * 0.12) % 1;
        const pt = paths[pathIdx].curve.getPointAt(currentT);

        positions[i * 3] = pt.x + Math.sin(time * 2 + i) * 0.15;
        positions[i * 3 + 1] = pt.y + Math.cos(time * 2 + i) * 0.15;
        positions[i * 3 + 2] = pt.z;
      }
      streamPointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* 1. CENTRAL SIGNAL FIELD RESONATOR */}
      <group position={[centerPos.x, centerPos.y, centerPos.z]}>
        <mesh ref={resonatorRef}>
          <torusKnotGeometry args={[1.8, 0.4, 120, 24, 2, 3]} />
          <meshPhysicalMaterial
            color="#081028"
            emissive="#1e1b4b"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
            reflectivity={0.95}
          />
        </mesh>

        <lineSegments ref={resonatorCageRef}>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(2.6, 1)]} />
          <lineBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.55}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>

        {/* Signal Rings */}
        <group ref={waveRingsRef}>
          {[0, 1, 2].map((idx) => (
            <mesh key={`wave-${idx}`} rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[1.9, 1.95, 64]} />
              <meshBasicMaterial
                color={idx === 1 ? "#a3e635" : "#38bdf8"}
                transparent
                opacity={0.4}
                side={THREE.DoubleSide}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          ))}
        </group>

        {/* Central Signal Point Light */}
        <pointLight
          color="#38bdf8"
          intensity={4.0}
          distance={12}
          decay={2}
        />
        <pointLight
          color="#a3e635"
          intensity={2.2}
          distance={8}
          decay={2}
        />
      </group>

      {/* 2. GLOWING SIGNAL PATHS */}
      {paths.map((p, idx) => {
        const lineGeo = new THREE.BufferGeometry().setFromPoints(p.points);
        return (
          <primitive
            key={`signal-path-${idx}`}
            object={
              new THREE.Line(
                lineGeo,
                new THREE.LineBasicMaterial({
                  color: p.cluster.color,
                  transparent: true,
                  opacity: 0.45,
                  blending: THREE.AdditiveBlending,
                  depthWrite: false,
                })
              )
            }
          />
        );
      })}

      {/* 3. TRAVELING SIGNAL PULSES */}
      {paths.map((p, idx) => (
        <group
          key={`signal-pulse-${idx}`}
          ref={(el) => {
            if (el) pulsesRef.current[idx] = el;
          }}
        >
          <mesh>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial
              color={p.cluster.color}
              toneMapped={false}
            />
          </mesh>

          <mesh position={[0, 0, -0.22]}>
            <cylinderGeometry args={[0.02, 0.09, 0.45, 12]} />
            <meshBasicMaterial
              color={p.cluster.color}
              transparent
              opacity={0.7}
              blending={THREE.AdditiveBlending}
              toneMapped={false}
            />
          </mesh>

          <pointLight
            color={p.cluster.color}
            intensity={2.8}
            distance={5}
            decay={2}
          />
        </group>
      ))}

      {/* 4. STREAMING PARTICLES */}
      <points ref={streamPointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particleStream.pos, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particleStream.cols, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          vertexColors
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>

      {/* 5. SIGNAL CLUSTERS (DISCOVER, ENGAGE, CONVERT, GROW) */}
      {CLUSTERS.map((cluster) => (
        <SignalClusterNode
          key={cluster.id}
          cluster={cluster}
          centerPos={centerPos}
        />
      ))}

      {/* 6. TRANSLUCENT CONTINUITY PRISMS */}
      <group>
        <mesh position={[-7.2, 3.8, -15.0]} rotation={[0.4, 0.6, 0.2]}>
          <octahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#1e1b4b"
            emissive="#38bdf8"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
            roughness={0.1}
            wireframe
          />
        </mesh>

        <mesh position={[7.5, -3.2, -14.5]} rotation={[-0.3, 0.4, 0.8]}>
          <dodecahedronGeometry args={[1.4, 0]} />
          <meshStandardMaterial
            color="#1e1b4b"
            emissive="#8b5cf6"
            emissiveIntensity={0.3}
            transparent
            opacity={0.35}
            roughness={0.1}
            wireframe
          />
        </mesh>
      </group>

      {/* 7. BACKGROUND DEPTH CORPUS PARTICLES */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[bgPos, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[bgCols, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          vertexColors
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
