import { useEffect, useRef } from "react";
import * as THREE from "three";

export const WireframeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true, 
      antialias: false,
      powerPreference: "high-performance",
      precision: "lowp"
    });
    renderer.setPixelRatio(1);
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.z = 5;

    // --- Particles ---
    const count = window.innerWidth < 768 ? 400 : 800; // Halved for performance
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const mat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.025,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.45,
    });
    const pts = new THREE.Points(geom, mat);
    scene.add(pts);

    // --- Connection Lines ---
    const linePositions = [];
    const nodeCount = Math.min(60, count); // Reduced from 100 to 60
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const x1 = pos[i * 3], y1 = pos[i * 3 + 1], z1 = pos[i * 3 + 2];
        const x2 = pos[j * 3], y2 = pos[j * 3 + 1], z2 = pos[j * 3 + 2];
        const d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
        if (d < 2.5) {
          linePositions.push(x1, y1, z1, x2, y2, z2);
        }
      }
    }
    const lineGeom = new THREE.BufferGeometry();
    lineGeom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.04, // Lightened
    });
    scene.add(new THREE.LineSegments(lineGeom, lineMat));

    // --- Mouse Parallax ---
    let tmx = 0, tmy = 0, cmx = 0, cmy = 0;
    const onMouseMove = (e) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 0.8;
      tmy = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    document.addEventListener("mousemove", onMouseMove);

    // --- Resize ---
    const onResize = () => {
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    };
    window.addEventListener("resize", onResize);

    // --- Animation Loop ---
    let t = 0;
    let animId;
    const render = () => {
      animId = requestAnimationFrame(render);
      t += 0.004;
      cmx += (tmx - cmx) * 0.04;
      cmy += (tmy - cmy) * 0.04;

      pts.rotation.y = t * 0.08 + cmx * 0.5;
      pts.rotation.x = Math.sin(t * 0.04) * 0.08 + cmy * 0.3;

      scene.children.forEach((c) => {
        if (c.isLineSegments) {
          c.rotation.y = pts.rotation.y;
          c.rotation.x = pts.rotation.x;
        }
      });

      renderer.render(scene, camera);
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
};
