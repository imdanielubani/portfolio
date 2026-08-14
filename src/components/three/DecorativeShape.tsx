"use client";

import { useEffect, useRef, useState } from "react";
import { PerspectiveCamera, PointLight, AmbientLight, Scene, WebGLRenderer } from "three";
import { BoltIcon } from "@/components/icons/BoltIcon";
import { SparkleIcon } from "@/components/icons/SparkleIcon";
import { prefersReducedMotion } from "@/lib/animations";
import { createGemMesh } from "./createGemMesh";
import { supportsWebGL } from "./supportsWebGL";

type Variant = "sparkle" | "bolt";

/**
 * Creative extra, explicitly NOT a reproduction of anything on the
 * reference site — the forensic analysis confirmed no WebGL/Three.js
 * anywhere in the source. Replaces the flat sparkle/bolt icons with a
 * small rotating faceted gem (vanilla Three.js, no React renderer
 * layer), as a deliberate departure from strict fidelity.
 *
 * Always renders the original flat SVG first (identical to prior
 * behavior, zero risk of regression or hydration mismatch), then swaps
 * to the 3D version only after confirming WebGL support client-side.
 * Falls back to the SVG if WebGL setup throws for any reason.
 */
export function DecorativeShape({ variant, className }: { variant: Variant; className?: string }) {
  const [use3D, setUse3D] = useState(false);
  const [failed, setFailed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // WebGL/reduced-motion support is only knowable client-side; the SSR
    // render must default to the flat SVG to avoid a hydration mismatch,
    // so upgrading via a post-mount effect is intentional here, not a
    // derived-state anti-pattern.
    if (supportsWebGL() && !prefersReducedMotion()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUse3D(true);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!use3D || !container) return;

    let renderer: WebGLRenderer | undefined;
    let frameId: number | undefined;
    let resizeObserver: ResizeObserver | undefined;

    try {
      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new Scene();
      const camera = new PerspectiveCamera(45, width / height, 0.1, 10);
      camera.position.z = 3;

      renderer = new WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      scene.add(new AmbientLight(0xffffff, 0.7));
      const light1 = new PointLight(0xa78bfa, 1.4);
      light1.position.set(2, 2, 2);
      scene.add(light1);
      const light2 = new PointLight(0x60a5fa, 1);
      light2.position.set(-2, -1, 2);
      scene.add(light2);

      const speed = variant === "sparkle" ? 1 : 1.3;
      const mesh = createGemMesh(variant);
      scene.add(mesh);

      let last = performance.now();
      const animate = (now: number) => {
        const delta = (now - last) / 1000;
        last = now;
        mesh.rotation.x += delta * 0.35 * speed;
        mesh.rotation.y += delta * 0.5 * speed;
        renderer!.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };
      frameId = requestAnimationFrame(animate);

      resizeObserver = new ResizeObserver(() => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer!.setSize(w, h);
      });
      resizeObserver.observe(container);

      return () => {
        if (frameId !== undefined) cancelAnimationFrame(frameId);
        resizeObserver?.disconnect();
        mesh.geometry.dispose();
        (mesh.material as { dispose: () => void }).dispose();
        renderer?.dispose();
        if (renderer?.domElement.parentElement === container) {
          container.removeChild(renderer.domElement);
        }
      };
    } catch {
      // WebGL context/setup failed despite passing the support check
      // (driver quirk, context loss, etc.) — fall back to the flat SVG.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFailed(true);
      return;
    }
  }, [use3D, variant]);

  const FallbackIcon = variant === "sparkle" ? SparkleIcon : BoltIcon;

  if (!use3D || failed) {
    return <FallbackIcon className={className} />;
  }

  return <div ref={containerRef} className={className} />;
}
