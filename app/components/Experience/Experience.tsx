import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import vertexShader from '../customShader/vertex.glsl';
import fragmentShader from '../customShader/fragment.glsl';
import CustomShaderMaterial from 'three-custom-shader-material/vanilla';
import { useEffect, useMemo } from 'react';
import { useControls as useLevaControls } from 'leva';

export function useControls<Schema extends Record<string, any>>(group: string, schema: Schema) {
  if (process.env.NODE_ENV === 'production') {
    return Object.fromEntries(
      Object.entries(schema).map(([key, val]) => [key, val.value])
    );
  } else {
    return useLevaControls(group, schema)
  }
}

const Wave = () => {
  const {
    uNoiseDensity,
    uNoiseStrength,
    uColor1,
    uColor2,
    uColor3,
    waveSize,
    planeRotationX,
    planeRotationY,
    planeRotationZ,
    planePositionX,
    planePositionY,
    planePositionZ,
    segments, // new control to change geometry resolution
    usePhysicalMaterial, // toggle expensive material
  } = useControls('Wave', {
    uColor1: { value: '#F4F5F7' },
    uColor2: { value: '#F4F5F7' },
    uColor3: { value: '#F4F5F7' },
    uNoiseDensity: { value: 1.40, min: 0, max: 10, step: 0.001 },
    uNoiseStrength: { value: 1, min: 0, max: 10, step: 0.001 },
    waveSize: { value: 22, min: 1, max: 40, step: 0.01 },
    planeRotationX: { value: -Math.PI * 0.45, min: -Math.PI, max: Math.PI, step: 0.01 },
    planeRotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
    planeRotationZ: { value: -Math.PI * 0.45, min: -Math.PI, max: Math.PI, step: 0.01 },
    planePositionX: { value: 0, min: -10, max: 10, step: 0.01 },
    planePositionY: { value: -0.8, min: -10, max: 10, step: 0.01 },
    planePositionZ: { value: 0, min: -10, max: 10, step: 0.01 },
    segments: { value: 100, min: 8, max: 256, step: 1 },
    usePhysicalMaterial: { value: false },
  });

  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0.0 },
      uNoiseDensity: { value: uNoiseDensity },
      uNoiseStrength: { value: uNoiseStrength },
      uColor1: { value: new THREE.Color(uColor1) },
      uColor2: { value: new THREE.Color(uColor2) },
      uColor3: { value: new THREE.Color(uColor3) },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty: object is created only once

  // Create material once
  const material = useMemo(() => {
    // Choose the lighter base material by flag
    const base = usePhysicalMaterial ? THREE.MeshPhysicalMaterial : THREE.MeshStandardMaterial;
    const mat = new CustomShaderMaterial({
      baseMaterial: base,
      vertexShader,
      fragmentShader,
      metalness: 2,
      roughness: 0.6,
      uniforms: uniforms,
      side: THREE.FrontSide, // avoid DoubleSide for perf
    });
    // disable features we don't need
    mat.needsUpdate = true;
    return mat;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // create once

  // Update uniforms when controls change (not every frame)
  useEffect(() => {
    // numeric uniforms
    material.uniforms.uNoiseDensity.value = uNoiseDensity;
    material.uniforms.uNoiseStrength.value = uNoiseStrength;

    // update colors without creating new Color instances
    material.uniforms.uColor1.value.set(uColor1);
    material.uniforms.uColor2.value.set(uColor2);
    material.uniforms.uColor3.value.set(uColor3);

    // if you change material base (physical vs standard), you'd have to recreate material.
  }, [uNoiseDensity, uNoiseStrength, uColor1, uColor2, uColor3, material]);

  // Update time each frame (cheap)
  useFrame((state) => {
    // Option: throttle updates to every other frame to reduce GPU work:
    // if (state.clock.oldTime && (Math.floor(state.clock.elapsedTime * 30) % 2 === 0)) return;
    material.uniforms.uTime.value = state.clock.elapsedTime;
  });

  // Geometry: keep it simple and allow segments control
  // React will recreate geometry when key changes (because args change)
  const geomArgs: [width?: number | undefined, height?: number | undefined, widthSegments?: number | undefined, heightSegments?: number | undefined] = useMemo(() => [waveSize, waveSize, segments, segments], [waveSize, segments]);

  return (
    <mesh
      material={material}
      position={[planePositionX, planePositionY, planePositionZ]}
      rotation={[planeRotationX, planeRotationY, planeRotationZ]}
      frustumCulled={true} // leave default true; can set false if you need always-render
    >
      <planeGeometry args={geomArgs} />
    </mesh>
  );
};

const Experience = () => {
  const { fogColor, fogNear, fogFar, deviceDPR } = useControls('Fog', {
    fogColor: { value: '#101729' },
    fogNear: { value: 13.2, min: 0, max: 50, step: 0.01 },
    fogFar: { value: 3.74, min: 0, max: 200, step: 0.01 },
    deviceDPR: { value: 1.24, min: 0.5, max: 2, step: 0.01 },
  });

  return (
    <div style={{ width: '100%', height: '953px', }}>
      <Canvas
        dpr={[1, deviceDPR]} // clamp dpr for perf
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        performance={{ min: 0.5, current: 1, max: 1.5 }}
      >
        <ambientLight intensity={1} />
        <fog attach="fog" args={[fogColor, fogNear, fogFar]} />
        <Wave />
      </Canvas>
    </div>
  );
};

export default Experience;
