'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Box, Sphere, Text } from '@react-three/drei'
import * as THREE from 'three'

// Floating blog elements
function BlogElements() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
        <Box args={[0.3, 0.4, 0.1]} position={[1.5, 1, 0]}>
          <meshStandardMaterial color="#06b6d4" metalness={0.6} roughness={0.4} />
        </Box>
      </Float>
      
      <Float speed={2.1} rotationIntensity={1} floatIntensity={2}>
        <Box args={[0.4, 0.3, 0.1]} position={[-1.2, 0.5, 0.5]}>
          <meshStandardMaterial color="#d946ef" metalness={0.7} roughness={0.3} />
        </Box>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.8}>
        <Sphere args={[0.15]} position={[0.5, -0.8, 0.8]}>
          <meshStandardMaterial color="#10b981" metalness={0.8} roughness={0.2} />
        </Sphere>
      </Float>
      
      <Float speed={2.3} rotationIntensity={0.5} floatIntensity={2.2}>
        <Box args={[0.2, 0.5, 0.08]} position={[-0.8, -0.3, -0.3]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.5} roughness={0.5} />
        </Box>
      </Float>
    </group>
  )
}

export default function Blog3D() {
  return (
    <div className="absolute left-0 top-0 w-1/4 h-full opacity-15">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[3, 3, 3]} intensity={0.6} />
        <pointLight position={[-3, -3, -3]} color="#8b5cf6" intensity={0.4} />
        
        <BlogElements />
      </Canvas>
    </div>
  )
}
