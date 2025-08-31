'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Box, Cylinder, Torus } from '@react-three/drei'
import * as THREE from 'three'

// Timeline elements
function TimelineElements() {
  const groupRef = useRef<THREE.Group>(null!)
  const boxRefs = useRef<(THREE.Mesh | null)[]>([])
  const lineRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
    }
    
    boxRefs.current.forEach((box, index) => {
      if (box) {
        box.position.y = Math.sin(time + index) * 0.2
        box.rotation.z = time * 0.5 + index
      }
    })
    
    // Simplified animation without material opacity changes
    if (lineRef.current) {
      // Just animate the rotation, no opacity changes
      lineRef.current.rotation.z += 0.01
    }
  })

  const setBoxRef = (index: number) => (ref: THREE.Mesh | null) => {
    boxRefs.current[index] = ref
  }

  return (
    <group ref={groupRef}>
      {/* Timeline line */}
      <Cylinder ref={lineRef} args={[0.02, 0.02, 4]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.3} />
      </Cylinder>
      
      {/* Timeline nodes */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Box ref={setBoxRef(0)} args={[0.2, 0.2, 0.2]} position={[-1.5, 0.5, 0]}>
          <meshStandardMaterial color="#f59e0b" />
        </Box>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.5}>
        <Torus ref={setBoxRef(1)} args={[0.15, 0.05]} position={[-0.5, -0.3, 0.2]}>
          <meshStandardMaterial color="#10b981" />
        </Torus>
      </Float>
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Box ref={setBoxRef(2)} args={[0.18, 0.18, 0.18]} position={[0.8, 0.8, -0.1]}>
          <meshStandardMaterial color="#d946ef" />
        </Box>
      </Float>
      
      <Float speed={1.3} rotationIntensity={0.6} floatIntensity={1.2}>
        <Cylinder ref={setBoxRef(3)} args={[0.1, 0.1, 0.3]} position={[1.6, -0.4, 0.3]}>
          <meshStandardMaterial color="#06b6d4" />
        </Cylinder>
      </Float>
      
      {/* Additional decorative elements */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
        <Torus args={[0.08, 0.03]} position={[-1.8, -0.8, 0.5]}>
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.1} />
        </Torus>
      </Float>
      
      <Float speed={1.7} rotationIntensity={0.9} floatIntensity={1.8}>
        <Box args={[0.12, 0.12, 0.12]} position={[2, 0.2, -0.4]}>
          <meshStandardMaterial color="#8b5cf6" />
        </Box>
      </Float>
    </group>
  )
}

export default function Experience3D() {
  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-1/2 opacity-15">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={0.8} />
        <pointLight position={[-3, -3, -3]} color="#10b981" intensity={0.6} />
        <pointLight position={[0, 5, 0]} color="#d946ef" intensity={0.4} />
        
        <TimelineElements />
      </Canvas>
    </div>
  )
}
