'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Ring, Torus } from '@react-three/drei'
import * as THREE from 'three'

// Communication waves/signals
function CommunicationWaves() {
  const groupRef = useRef<THREE.Group>(null!)
  const wave1Ref = useRef<THREE.Mesh>(null!)
  const wave2Ref = useRef<THREE.Mesh>(null!)
  const wave3Ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1
    }
    
    // Simplified animation without material opacity changes
    if (wave1Ref.current) {
      wave1Ref.current.scale.setScalar(1 + Math.sin(time * 2) * 0.2)
    }
    
    if (wave2Ref.current) {
      wave2Ref.current.scale.setScalar(1 + Math.sin(time * 1.5 + Math.PI / 2) * 0.3)
    }
    
    if (wave3Ref.current) {
      wave3Ref.current.scale.setScalar(1 + Math.sin(time * 1.8 + Math.PI) * 0.25)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central communication node */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.2} />
        </Sphere>
      </Float>
      
      {/* Communication waves */}
      <Ring ref={wave1Ref} args={[0.8, 1, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.3} />
      </Ring>
      
      <Ring ref={wave2Ref} args={[1.2, 1.4, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#d946ef" transparent opacity={0.2} />
      </Ring>
      
      <Ring ref={wave3Ref} args={[1.6, 1.8, 32]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#10b981" transparent opacity={0.15} />
      </Ring>
      
      {/* Floating connection nodes */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.08]} position={[1.5, 0.8, 0]}>
          <meshStandardMaterial color="#d946ef" />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.8}>
        <Sphere args={[0.06]} position={[-1.2, -0.6, 0.5]}>
          <meshStandardMaterial color="#f59e0b" />
        </Sphere>
      </Float>
      
      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={2.5}>
        <Torus args={[0.15, 0.05]} position={[0.8, -1, -0.3]}>
          <meshStandardMaterial color="#10b981" />
        </Torus>
      </Float>
    </group>
  )
}

export default function Contact3D() {
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-1/2 opacity-20">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[4, 4, 4]} intensity={0.7} />
        <pointLight position={[-4, -4, -4]} color="#06b6d4" intensity={0.5} />
        
        <CommunicationWaves />
      </Canvas>
    </div>
  )
}
