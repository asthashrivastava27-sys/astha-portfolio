"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useSceneStore } from "@/stores/useSceneStore";

export default function CameraRig() {
  const { camera, pointer } = useThree();
  const scrollProgress = useSceneStore((s) => s.scrollProgress);

  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // Subtle mouse parallax (smooth and restrained so text is always readable)
    const mouseParallaxX = pointer.x * 0.75;
    const mouseParallaxY = pointer.y * 0.45;

    // Harmonic breathing motion
    const breathX = Math.sin(time * 0.4) * 0.05;
    const breathY = Math.cos(time * 0.35) * 0.05;

    // Continuous scroll response through the portfolio sections
    const scrollZ = 8.2 - scrollProgress * 2.8;
    const scrollY = 0.2 - scrollProgress * 1.6;
    const scrollRot = Math.sin(scrollProgress * Math.PI) * 0.8;

    const targetX = mouseParallaxX + breathX + scrollRot * 0.5;
    const targetY = scrollY + mouseParallaxY + breathY;
    const targetZ = scrollZ;

    // Damped lerp with delta time for 60+ FPS smoothness
    const lerpFactor = Math.min(1, delta * 3.0);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, lerpFactor);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, lerpFactor);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, lerpFactor);

    // Dynamic focal look-at
    const targetLookAt = new THREE.Vector3(
      mouseParallaxX * 0.2,
      -scrollProgress * 0.8 + mouseParallaxY * 0.15,
      0
    );

    currentLookAt.current.lerp(targetLookAt, lerpFactor);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
