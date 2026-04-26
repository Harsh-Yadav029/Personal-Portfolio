import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField({ count = 2500 }) {
  const ref = useRef();
  
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 15;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 15;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    
    // Slow drift
    ref.current.rotation.y = t * 0.02;
    ref.current.rotation.x = Math.sin(t * 0.01) * 0.05;

    // Subtle mouse reaction
    const mx = state.mouse.x * 0.2;
    const my = state.mouse.y * 0.2;
    ref.current.rotation.y += (mx - ref.current.rotation.y) * 0.01;
    ref.current.rotation.x += (-my - ref.current.rotation.x) * 0.01;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#10b981"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Scene() {
  const isLowEnd =
    typeof navigator !== "undefined" &&
    navigator.hardwareConcurrency <= 4;

  if (isLowEnd) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          powerPreference: "high-performance",
          alpha: true 
        }}
        style={{ background: "transparent" }}
      >
        <ParticleField count={2000} />
        <fog attach="fog" args={["#050505", 2, 8]} />
      </Canvas>
    </div>
  );
}