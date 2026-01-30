import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Reusable Tower Component for cleaner architecture
const ModernTower = ({
    position,
    scale,
    rotation = [0, 0, 0],
    color = "#1a1a1a",
    accentColor = "#d4af37"
}: {
    position: [number, number, number],
    scale: [number, number, number],
    rotation?: [number, number, number],
    color?: string,
    accentColor?: string
}) => {
    const meshRef = useRef<THREE.Group>(null);

    // Static - no animation
    /*
    useFrame((state) => {
      if (meshRef.current) {
        // Gentle floating/breath animation
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.2;
      }
    });
    */

    return (
        <group ref={meshRef} position={position} rotation={rotation}>
            {/* Main Glass Structure */}
            <mesh>
                <boxGeometry args={scale} />
                <meshPhysicalMaterial
                    color={color}
                    metalness={0.9}
                    roughness={0.1}
                    transparent={true}
                    opacity={0.8}
                    transmission={0.2}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </mesh>

            {/* Structural Wireframe / Edges - Gold */}
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(...scale)]} />
                <lineBasicMaterial color={accentColor} transparent opacity={0.4} />
            </lineSegments>

            {/* Internal "Floors" or Core for depth */}
            <mesh scale={[0.8, 0.98, 0.8]}>
                <boxGeometry args={scale} />
                <meshStandardMaterial
                    color="#000000"
                    metalness={0.5}
                    roughness={0.8}
                />
            </mesh>

            {/* Vertical Golden Accents on sides */}
            <mesh position={[scale[0] / 2 + 0.01, 0, scale[2] / 3]}>
                <boxGeometry args={[0.05, scale[1] * 0.9, 0.1]} />
                <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[-scale[0] / 2 - 0.01, 0, -scale[2] / 3]}>
                <boxGeometry args={[0.05, scale[1] * 0.9, 0.1]} />
                <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
};

// Floating Geometric Elements
const FloatingElement = ({ position, scale, color }: { position: [number, number, number], scale: [number, number, number], color: string }) => {
    const ref = useRef<THREE.Mesh>(null);
    // Static - no animation
    /*
    useFrame((state) => {
       if(ref.current) {
          ref.current.rotation.x = state.clock.elapsedTime * 0.2;
          ref.current.rotation.z = state.clock.elapsedTime * 0.1;
       }
    });
    */

    return (
        <mesh ref={ref} position={position}>
            <octahedronGeometry args={[scale[0]]} />
            <meshStandardMaterial color={color} wireframe />
        </mesh>
    );
}

export const BuildingHero = () => {
    // Parallax mouse interaction ref
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Subtle rotation based on mouse position
            const { x, y } = state.pointer;
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.1 - Math.PI / 4, 0.05);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.05, 0.05);
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
            <Environment preset="night" blur={0.8} />

            {/* Dramatic Lighting */}
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#d4af37" distance={50} decay={2} />
            <pointLight position={[-10, 5, -10]} intensity={1} color="#4a90e2" distance={50} decay={2} />
            <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" castShadow />

            <fog attach="fog" args={['#050505', 10, 40]} />

            <Float speed={0} rotationIntensity={0} floatIntensity={0}>
                <group ref={groupRef} rotation={[0, -Math.PI / 4, 0]} position={[4, 0, 0]}>

                    {/* Main Central Tower - Tallest */}
                    <ModernTower
                        position={[0, -1, 0]}
                        scale={[3, 12, 3]}
                        color="#0a0a0a"
                        accentColor="#d4af37"
                    />

                    {/* Left Tower */}
                    <ModernTower
                        position={[-4, -3, 2]}
                        scale={[2, 8, 2]}
                        rotation={[0, 0.1, 0]}
                        color="#111111"
                        accentColor="#d4af37"
                    />

                    {/* Right Tower */}
                    <ModernTower
                        position={[4, -2, -1]}
                        scale={[2, 9, 2]}
                        rotation={[0, -0.1, 0]}
                        color="#111111"
                        accentColor="#d4af37"
                    />

                    {/* Back/Far Tower for depth */}
                    <ModernTower
                        position={[-2, -5, -6]}
                        scale={[2.5, 10, 2.5]}
                        color="#080808"
                        accentColor="#b39025"
                    />

                    {/* Small Floating Details */}
                    <FloatingElement position={[3, 5, 3]} scale={[0.5, 0.5, 0.5]} color="#d4af37" />
                    <FloatingElement position={[-4, 2, 4]} scale={[0.3, 0.3, 0.3]} color="#d4af37" />

                    {/* Base Platform / Reflection Plane suggestion (optional, keeping clean for now) */}
                </group>
            </Float>
        </>
    );
};
