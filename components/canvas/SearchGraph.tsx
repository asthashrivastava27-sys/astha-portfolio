"use client";

import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneStore, SeoPillarNode } from "@/stores/useSceneStore";

interface GraphNodeData extends SeoPillarNode {
  position: [number, number, number];
  baseScale: number;
  geometryType: "octa" | "tetra" | "box";
}

const GRAPH_NODES: GraphNodeData[] = [
  {
    id: "node-1",
    label: "Organic Search Visibility",
    category: "SEO Strategy",
    focus: "Enterprise keyword rankings & search reach",
    position: [-4.2, 2.0, -1.5],
    baseScale: 0.35,
    geometryType: "octa",
  },
  {
    id: "node-2",
    label: "Keyword Intent & Clustering",
    category: "Content Strategy",
    focus: "Targeted content mapping across search stages",
    position: [4.4, 2.3, -2.0],
    baseScale: 0.3,
    geometryType: "tetra",
  },
  {
    id: "node-3",
    label: "Technical Site Optimization",
    category: "Technical SEO",
    focus: "Crawlability, architecture & site structure",
    position: [-3.8, -1.8, 0.5],
    baseScale: 0.28,
    geometryType: "octa",
  },
  {
    id: "node-4",
    label: "Internal Linking Strategy",
    category: "Technical SEO",
    focus: "Topic clusters, anchor optimization & authority flow",
    position: [3.9, -1.5, -0.8],
    baseScale: 0.32,
    geometryType: "octa",
  },
  {
    id: "node-5",
    label: "Core Web Vitals & Performance",
    category: "Technical SEO",
    focus: "Speed, user experience & page performance",
    position: [-2.2, 3.4, -3.2],
    baseScale: 0.26,
    geometryType: "tetra",
  },
  {
    id: "node-6",
    label: "Search Console & Analytics",
    category: "Analytics",
    focus: "Data-driven query insights & performance tracking",
    position: [2.5, 3.6, -2.5],
    baseScale: 0.28,
    geometryType: "octa",
  },
  {
    id: "node-7",
    label: "Content Optimization Engine",
    category: "Content Strategy",
    focus: "Semantic SEO, intent matching & asset updates",
    position: [-5.0, 0.2, -2.8],
    baseScale: 0.24,
    geometryType: "tetra",
  },
  {
    id: "node-8",
    label: "SERP CTR Enhancement",
    category: "Organic Growth",
    focus: "Title tag optimization & snippet performance",
    position: [5.2, 0.5, -1.8],
    baseScale: 0.3,
    geometryType: "octa",
  },
  {
    id: "node-9",
    label: "Index Coverage & Site Health",
    category: "Technical SEO",
    focus: "Broken links fixed & indexation enhancements",
    position: [1.8, -2.8, -1.6],
    baseScale: 0.25,
    geometryType: "tetra",
  },
  {
    id: "node-10",
    label: "High-Intent Conversion Paths",
    category: "Organic Growth",
    focus: "Routing qualified search traffic to organic leads",
    position: [-1.6, -3.2, -2.0],
    baseScale: 0.34,
    geometryType: "octa",
  },
];

function NodeItem({ node }: { node: GraphNodeData }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;

      const floatY = Math.sin(time * 1.2 + node.position[0]) * 0.08;
      meshRef.current.position.y = node.position[1] + floatY;

      const targetScale = hovered ? node.baseScale * 1.55 : node.baseScale;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }

    if (glowRef.current) {
      const pulse = (Math.sin(time * 3 + node.position[1]) + 1) * 0.5;
      const glowMat = glowRef.current.material as THREE.MeshBasicMaterial;
      if (glowMat) {
        glowMat.opacity = hovered ? 0.6 : 0.05 + pulse * 0.04;
      }
    }
  });

  return (
    <group position={[node.position[0], 0, node.position[2]]}>
      <mesh
        ref={meshRef}
        position={[0, node.position[1], 0]}
        scale={node.baseScale}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
          sceneStore.setHoveredNode(node);
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
          sceneStore.setHoveredNode(null);
        }}
      >
        {node.geometryType === "octa" && <octahedronGeometry args={[1, 0]} />}
        {node.geometryType === "tetra" && <tetrahedronGeometry args={[1.1, 0]} />}
        {node.geometryType === "box" && <boxGeometry args={[0.9, 0.9, 0.9]} />}

        <meshStandardMaterial
          color={hovered ? "#a3e635" : node.category === "SEO Strategy" ? "#38bdf8" : "#6366f1"}
          emissive={hovered ? "#a3e635" : node.category === "SEO Strategy" ? "#0284c7" : "#4338ca"}
          emissiveIntensity={hovered ? 1.0 : 0.20}
          roughness={0.25}
          metalness={0.8}
          wireframe={!hovered}
        />
      </mesh>

      {/* Outer Halo Shell */}
      <mesh ref={glowRef} position={[0, node.position[1], 0]} scale={node.baseScale * 1.8}>
        <octahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={hovered ? "#a3e635" : "#38bdf8"}
          wireframe
          transparent
          opacity={0.07}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function SearchGraph() {
  const lineSegmentsRef = useRef<THREE.LineSegments>(null);

  // Generate connection line segments between related SEO strategy nodes
  const { linePositions, lineColors } = useMemo(() => {
    const posList: number[] = [];
    const colorList: number[] = [];
    const corePos = new THREE.Vector3(0, 0, 0);

    // Connect core to nodes
    for (const node of GRAPH_NODES) {
      posList.push(corePos.x, corePos.y, corePos.z);
      posList.push(node.position[0], node.position[1], node.position[2]);

      colorList.push(0.0, 0.4, 0.95);
      if (node.category === "Organic Growth") {
        colorList.push(0.64, 0.9, 0.2); // Lime accent
      } else {
        colorList.push(0.38, 0.23, 0.9); // Muted violet
      }
    }

    // Connect node pairs that are close to each other
    for (let i = 0; i < GRAPH_NODES.length; i++) {
      const p1 = new THREE.Vector3(...GRAPH_NODES[i].position);
      for (let j = i + 1; j < GRAPH_NODES.length; j++) {
        const p2 = new THREE.Vector3(...GRAPH_NODES[j].position);
        if (p1.distanceTo(p2) < 4.8) {
          posList.push(p1.x, p1.y, p1.z);
          posList.push(p2.x, p2.y, p2.z);

          colorList.push(0.2, 0.6, 1.0);
          colorList.push(0.4, 0.3, 0.8);
        }
      }
    }

    return {
      linePositions: new Float32Array(posList),
      lineColors: new Float32Array(colorList),
    };
  }, []);

  useFrame((state) => {
    if (lineSegmentsRef.current) {
      const time = state.clock.getElapsedTime();
      const mat = lineSegmentsRef.current.material as THREE.LineBasicMaterial;
      if (mat) {
        mat.opacity = 0.08 + Math.sin(time * 1.5) * 0.04;
      }
    }
  });

  return (
    <group>
      {/* Relational Strategy Edges */}
      <lineSegments ref={lineSegmentsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.10}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Nodes */}
      {GRAPH_NODES.map((node) => (
        <NodeItem key={node.id} node={node} />
      ))}
    </group>
  );
}
