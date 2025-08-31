'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, OrbitControls, Torus, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

// Animated skill orbs
function SkillOrbs() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.5]} position={[2, 1, 0]}>
          <meshStandardMaterial
            color="#06b6d4"
            transparent
            opacity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Torus args={[0.4, 0.15]} position={[-2, 0, 1]} rotation={[0.5, 0, 0]}>
          <meshStandardMaterial color="#d946ef" metalness={0.8} roughness={0.2} />
        </Torus>
      </Float>
      
      <Float speed={2.2} rotationIntensity={1.5} floatIntensity={2.2}>
        <mesh position={[0, -1.5, 0.5]}>
          <dodecahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
        </mesh>
      </Float>
    </group>
  )
}

export default function Skills3D() {
  return (
    <div className="absolute right-0 top-0 w-1/3 h-full opacity-20">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} color="#06b6d4" intensity={0.4} />
        
        <SkillOrbs />
      </Canvas>
    </div>
  )
}
