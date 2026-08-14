import {
  Mesh,
  MeshStandardMaterial,
  OctahedronGeometry,
  TetrahedronGeometry,
} from "three";

export function createGemMesh(variant: "sparkle" | "bolt"): Mesh {
  const geometry =
    variant === "sparkle" ? new OctahedronGeometry(1, 0) : new TetrahedronGeometry(1.15, 0);
  const material = new MeshStandardMaterial({
    color: "#111111",
    metalness: 0.7,
    roughness: 0.15,
  });
  return new Mesh(geometry, material);
}
