'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, OrbitControls, Torus, Cylinder, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Tech DNA Helix - representing women in STEM
function TechHelix() {
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  const helixPoints = []
  for (let i = 0; i < 50; i++) {
    const t = (i / 50) * Math.PI * 8
    helixPoints.push({
      x: Math.cos(t) * 1.5,
      y: (i / 50) * 6 - 3,
      z: Math.sin(t) * 1.5,
      color: i % 4 === 0 ? '#06b6d4' : i % 4 === 1 ? '#d946ef' : i % 4 === 2 ? '#10b981' : '#f59e0b'
    })
  }

  return (
    <group ref={groupRef}>
      {helixPoints.map((point, index) => (
        <Float key={index} speed={1.5 + index * 0.1} rotationIntensity={0.5}>
          <Sphere
            position={[point.x, point.y, point.z]}
            args={[0.08]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <meshStandardMaterial 
              color={point.color} 
              emissive={point.color}
              emissiveIntensity={hovered ? 0.3 : 0.1}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

// Floating Tech Icons
function TechIcons() {
  const iconPositions = [
    { pos: [-3, 2, 0] as [number, number, number], color: '#61dafb', type: 'cylinder' }, // React
    { pos: [3, 1.5, -1] as [number, number, number], color: '#68217a', type: 'box' },   // Next.js
    { pos: [-2, -1, 2] as [number, number, number], color: '#38bdf8', type: 'torus' }, // Tailwind
    { pos: [2.5, -2, 1] as [number, number, number], color: '#f7df1e', type: 'cylinder' }, // JavaScript
    { pos: [-3.5, 0, -1] as [number, number, number], color: '#3178c6', type: 'box' },  // TypeScript
    { pos: [1, 2.5, 2] as [number, number, number], color: '#ff6b35', type: 'torus' },  // React Three
  ]

  return (
    <group>
      {iconPositions.map((icon, index) => (
        <Float key={index} speed={1 + index * 0.2} rotationIntensity={1} floatIntensity={2}>
          {icon.type === 'cylinder' && (
            <Cylinder position={icon.pos} args={[0.3, 0.3, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color={icon.color} emissive={icon.color} emissiveIntensity={0.2} />
            </Cylinder>
          )}
          {icon.type === 'box' && (
            <Box position={icon.pos} args={[0.4, 0.4, 0.1]}>
              <meshStandardMaterial color={icon.color} emissive={icon.color} emissiveIntensity={0.2} />
            </Box>
          )}
          {icon.type === 'torus' && (
            <Torus position={icon.pos} args={[0.3, 0.1]}>
              <meshStandardMaterial color={icon.color} emissive={icon.color} emissiveIntensity={0.2} />
            </Torus>
          )}
        </Float>
      ))}
    </group>
  )
}

// Floating geometric shapes for hero
function FloatingShapes() {
  return (
    <>
      <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[3, 2, -5]}>
          <octahedronGeometry args={[0.8]} />
          <MeshDistortMaterial
            color="#d946ef"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-3, -1, -3]}>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#10b981" metalness={0.7} roughness={0.3} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[1, -2, -6]}>
          <tetrahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.6} roughness={0.4} />
        </mesh>
      </Float>
    </>
  )
}

// Neural Network Connections
function NeuralNetwork() {
  const linesRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh
        if (mesh.material && 'opacity' in mesh.material) {
          mesh.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime + index) * 0.2
        }
      })
    }
  })

  const connections = [
    { start: [-3, 2, 0] as [number, number, number], end: [0, 0, 0] as [number, number, number] },
    { start: [3, 1.5, -1] as [number, number, number], end: [0, 0, 0] as [number, number, number] },
    { start: [-2, -1, 2] as [number, number, number], end: [0, 0, 0] as [number, number, number] },
    { start: [2.5, -2, 1] as [number, number, number], end: [0, 0, 0] as [number, number, number] },
    { start: [-3.5, 0, -1] as [number, number, number], end: [0, 0, 0] as [number, number, number] },
    { start: [1, 2.5, 2] as [number, number, number], end: [0, 0, 0] as [number, number, number] },
  ]

  return (
    <group ref={linesRef}>
      {connections.map((connection, index) => {
        const start = new THREE.Vector3(...connection.start)
        const end = new THREE.Vector3(...connection.end)
        const distance = start.distanceTo(end)
        const direction = end.clone().sub(start).normalize()
        const position = start.clone().add(end).multiplyScalar(0.5)

        return (
          <Cylinder
            key={index}
            position={position.toArray()}
            args={[0.005, 0.005, distance]}
            rotation={[
              Math.acos(direction.y),
              Math.atan2(direction.x, direction.z),
              0
            ]}
          >
            <meshStandardMaterial 
              color="#06b6d4" 
              transparent 
              opacity={0.3}
              emissive="#06b6d4"
              emissiveIntensity={0.1}
            />
          </Cylinder>
        )
      })}
    </group>
  )
}

// Central Core - representing the professional woman in tech
function CentralCore() {
  const coreRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
      coreRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <Sphere
        ref={coreRef}
        args={[0.8]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <MeshDistortMaterial
          color="#d946ef"
          emissive="#d946ef"
          emissiveIntensity={0.3}
          distort={0.3}
          speed={2}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        {/* Lighting setup */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} color="#d946ef" intensity={0.6} />
        <pointLight position={[0, 0, 10]} color="#06b6d4" intensity={0.5} />
        
        {/* Interactive 3D Elements */}
        <TechHelix />
        <TechIcons />
        <NeuralNetwork />
        <CentralCore />
        
        {/* Orbital Controls for interaction */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.8}
          rotateSpeed={0.4}
          minDistance={4}
          maxDistance={15}
          autoRotate={false}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}
