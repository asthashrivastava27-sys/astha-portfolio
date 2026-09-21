"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SplineTrack {
  curve: THREE.CatmullRomCurve3;
  points: THREE.Vector3[];
  color: string;
  speed: number;
  pulseColor: string;
  lightIntensity: number;
}

export default function SignalSplines() {
  const pulsesRef = useRef<THREE.Group[]>([]);

  // Define 4 cinematic curved spline pathways weaving through the 3D space
  const tracks: SplineTrack[] = useMemo(() => {
    const rawCurves = [
      {
        points: [
          new THREE.Vector3(-6.5, 3.5, -3.0),
          new THREE.Vector3(-3.0, 1.2, 0.5),
          new THREE.Vector3(0.0, -0.5, 1.2),
          new THREE.Vector3(3.5, 1.8, -0.8),
          new THREE.Vector3(6.5, -2.5, -2.5),
        ],
        color: "#1e3a8a",
        pulseColor: "#a3e635", // Lime pulse
        speed: 0.16,
        lightIntensity: 2.2,
      },
      {
        points: [
          new THREE.Vector3(6.2, 3.2, -2.5),
          new THREE.Vector3(2.8, 0.8, 1.0),
          new THREE.Vector3(-1.2, -1.8, 0.4),
          new THREE.Vector3(-4.5, -0.5, -1.5),
          new THREE.Vector3(-6.8, -3.2, -3.2),
        ],
        color: "#4338ca",
        pulseColor: "#38bdf8", // Electric Blue pulse
        speed: 0.12,
        lightIntensity: 2.5,
      },
      {
        points: [
          new THREE.Vector3(-4.8, -3.5, -2.0),
          new THREE.Vector3(-1.5, -1.2, 1.8),
          new THREE.Vector3(2.2, 1.5, 0.8),
          new THREE.Vector3(5.0, 2.8, -1.8),
          new THREE.Vector3(2.0, 4.2, -3.5),
        ],
        color: "#2563eb",
        pulseColor: "#bef264", // Vivid lime accent
        speed: 0.2,
        lightIntensity: 1.8,
      },
      {
        points: [
          new THREE.Vector3(-2.5, 4.0, -3.8),
          new THREE.Vector3(0.5, 2.2, -0.5),
          new THREE.Vector3(-1.8, -0.8, 1.5),
          new THREE.Vector3(3.2, -2.4, 0.2),
          new THREE.Vector3(5.8, -3.5, -3.0),
        ],
        color: "#6d28d9",
        pulseColor: "#60a5fa", // Cyan-blue pulse
        speed: 0.14,
        lightIntensity: 2.0,
      },
    ];

    return rawCurves.map((c) => {
      const curve = new THREE.CatmullRomCurve3(c.points, false, "catmullrom", 0.5);
      return {
        curve,
        points: curve.getPoints(120),
        color: c.color,
        pulseColor: c.pulseColor,
        speed: c.speed,
        lightIntensity: c.lightIntensity,
      };
    });
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    tracks.forEach((track, i) => {
      const group = pulsesRef.current[i];
      if (group) {
        // Continuous loop along curve
        const t = (time * track.speed) % 1;
        const pos = track.curve.getPointAt(t);
        const tangent = track.curve.getTangentAt(t);

        group.position.copy(pos);

        // Align pulse along tangent direction
        const lookTarget = pos.clone().add(tangent);
        group.lookAt(lookTarget);

        // Pulsate scale slightly
        const scaleMod = 1 + Math.sin(time * 6 + i) * 0.25;
        group.scale.set(scaleMod, scaleMod, scaleMod * 2.2);
      }
    });
  });

  return (
    <group>
      {/* Visual spline guide paths */}
      {tracks.map((track, i) => {
        const lineGeo = new THREE.BufferGeometry().setFromPoints(track.points);
        return (
          <primitive key={`line-${i}`} object={new THREE.Line(
            lineGeo,
            new THREE.LineBasicMaterial({
              color: track.color,
              transparent: true,
              opacity: 0.28,
              blending: THREE.AdditiveBlending,
              depthWrite: false,
            })
          )} />
        );
      })}

      {/* Traveling Signal Packets */}
      {tracks.map((track, i) => (
        <group
          key={`pulse-${i}`}
          ref={(el) => {
            if (el) pulsesRef.current[i] = el;
          }}
        >
          {/* Signal Packet Core */}
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial
              color={track.pulseColor}
              toneMapped={false}
            />
          </mesh>

          {/* Signal Ion Trail */}
          <mesh position={[0, 0, -0.16]}>
            <cylinderGeometry args={[0.02, 0.08, 0.35, 12]} />
            <meshBasicMaterial
              color={track.pulseColor}
              transparent
              opacity={0.65}
              blending={THREE.AdditiveBlending}
              toneMapped={false}
            />
          </mesh>

          {/* Dynamic Light from Traveling Signal */}
          <pointLight
            color={track.pulseColor}
            intensity={track.lightIntensity}
            distance={4.5}
            decay={2}
          />
        </group>
      ))}
    </group>
  );
}
