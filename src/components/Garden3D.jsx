import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function useDayNightColors() {
  const hour = new Date().getHours();
  const isNight = hour < 6 || hour > 18;
  return useMemo(() => ({
    sky: isNight ? new THREE.Color('#0b1020') : new THREE.Color('#8ec5ff'),
    ambient: isNight ? 0.3 : 0.7,
    sunColor: isNight ? '#ffd7a8' : '#ffffff',
  }), [hour]);
}

function FloatingFireflies({ count = 80 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = Math.random() * 4 + 0.5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (points.current) {
      for (let i = 0; i < count; i++) {
        const y = 1.5 + Math.sin(t * 0.6 + i) * 0.5;
        points.current.geometry.attributes.position.setY(i, y);
      }
      points.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#ff86b8" sizeAttenuation transparent opacity={0.9} />
    </points>
  );
}

function Ground() {
  const mesh = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (mesh.current) mesh.current.position.y = Math.sin(t * 0.2) * 0.03;
  });
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <circleGeometry args={[18, 64]} />
      <meshStandardMaterial color="#0f1a12" roughness={1} metalness={0} />
    </mesh>
  );
}

function TreeOfUs({ onLeafClick }) {
  const leaves = useMemo(() => new Array(16).fill(0).map((_, i) => ({
    id: i,
    pos: [
      (Math.random() - 0.5) * 2.2,
      1.4 + Math.random() * 1.6,
      (Math.random() - 0.5) * 2.2,
    ],
    color: new THREE.Color().setHSL(0.95 + Math.random() * 0.05, 0.7, 0.6),
  })), []);

  return (
    <group position={[0, 0, 0]}>
      <mesh castShadow position={[0, 1, 0]}>
        <cylinderGeometry args={[0.12, 0.24, 2, 12]} />
        <meshStandardMaterial color="#5b3a2e" roughness={1} />
      </mesh>
      {leaves.map(leaf => (
        <mesh key={leaf.id} position={leaf.pos} onClick={(e) => { e.stopPropagation(); onLeafClick?.(leaf.id); }}>
          <sphereGeometry args={[0.14, 16, 16]} />
          <meshStandardMaterial emissive={leaf.color} emissiveIntensity={1.2} color={leaf.color} transparent opacity={0.9} />
        </mesh>
      ))}
      {/* Base ring with engraving hint */}
      <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.02, 0]}>
        <ringGeometry args={[0.8, 0.82, 64]} />
        <meshStandardMaterial color="#2b1b21" />
      </mesh>
    </group>
  );
}

function PetalParticles() {
  const count = 120;
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      dummy.position.set((Math.random() - 0.5) * 6, Math.random() * 2 + 1, (Math.random() - 0.5) * 6);
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      dummy.scale.setScalar(Math.random() * 0.4 + 0.2);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [count, dummy]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.y = t * 0.05;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <icosahedronGeometry args={[0.06, 0]} />
      <meshStandardMaterial color="#ff7aa2" emissive="#ff7aa2" emissiveIntensity={0.2} metalness={0} roughness={1} />
    </instancedMesh>
  );
}

function NameParticles() {
  const group = useRef();
  const count = 300;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 4;
      const y = Math.random() * 1.8 + 1.2;
      const z = (Math.random() - 0.5) * 0.2;
      arr[i * 3 + 0] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) group.current.rotation.y = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <group ref={group} position={[0, 1.6, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.04} color="#ffd1dc" sizeAttenuation transparent opacity={0.9} />
      </points>
    </group>
  );
}

export default function Garden3D({ onLeafClick }) {
  const [visits, setVisits] = useState(0);
  const { sky, ambient, sunColor } = useDayNightColors();

  useEffect(() => {
    const v = parseInt(localStorage.getItem('eternal_garden_visits') || '0', 10) + 1;
    localStorage.setItem('eternal_garden_visits', String(v));
    setVisits(v);
  }, []);

  return (
    <div className="h-[92vh] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <Canvas
        shadows
        camera={{ position: [0, 2.2, 5.2], fov: 55 }}
        gl={{ antialias: true }}
        onCreated={({ scene }) => {
          scene.background = sky;
        }}
      >
        <ambientLight intensity={ambient} />
        <directionalLight position={[6, 6, 4]} intensity={0.7} color={sunColor} castShadow />
        <fog attach="fog" args={[sky, 8, 24]} />

        <Stars radius={40} depth={30} count={1500} factor={2} saturation={0} fade speed={0.4} />

        <group>
          <Ground />
          <TreeOfUs onLeafClick={onLeafClick} />
          {visits > 1 && <PetalParticles />}
          <FloatingFireflies count={Math.min(60 + visits * 6, 140)} />
          <NameParticles />
        </group>

        <OrbitControls enablePan={false} minDistance={3} maxDistance={9} maxPolarAngle={Math.PI / 2.1} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
