"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Replicating SVG coordinate mapping perfectly
const createShape = (pathData: [number, number][]) => {
    const shape = new THREE.Shape();
    shape.moveTo(pathData[0][0], pathData[0][1]);
    for (let i = 1; i < pathData.length; i++) {
        shape.lineTo(pathData[i][0], pathData[i][1]);
    }
    shape.closePath();
    return shape;
};

// 1. Top Wing (Light Blue #54c5f8)
const topWing = createShape([
    [-0.9285, -0.5715],
    [-1.5, 0.0],
    [0.3572, 1.8571],
    [1.5, 1.8571]
]);

// 2. Bottom Wing Light Blue (#54c5f8)
const bottomWingLightBlue = createShape([
    [0.3572, 0.1428],
    [-0.6427, -0.8572],
    [-0.0715, -1.4285],
    [1.5, 0.1428]
]);

// 3. Bottom Wing Middle Diamond (#29b6f6)
const bottomWingMiddle = createShape([
    [-0.6427, -0.8572],
    [-0.0715, -0.2858],
    [0.5001, -0.8572],
    [-0.0715, -1.4285]
]);

// 4. Shadow Dark Blue (#01579b)
const shadowDarkBlue = createShape([
    [-0.0715, -1.4285],
    [0.3572, -1.8572],
    [1.5, -1.8572],
    [0.5001, -0.8572]
]);

const extrudeSettings = {
    depth: 0.15,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 2,
    bevelSize: 0.04,
    bevelThickness: 0.04
};

const FlutterLogo = () => {
    const groupRef = useRef<THREE.Group>(null);
    const currentScroll = useRef(0);

    useFrame((state) => {
        if (groupRef.current) {
            // Read current scroll position safely
            const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
            const maxScroll = typeof window !== "undefined" ? Math.max(1, window.innerHeight * 1.2) : 800;
            // Calculate progress (0 at top of page, 1+ as you scroll past hero)
            const targetProgress = Math.min(1.5, Math.max(0, scrollY / maxScroll));

            // Smoothly lerp our tracked scroll progress towards targetProgress
            currentScroll.current = THREE.MathUtils.lerp(
                currentScroll.current,
                targetProgress,
                0.08
            );

            const progress = currentScroll.current;

            // Combine gentle idle hovering animation with kinetic scroll-driven 3D rotation & movement
            const idleRotationY = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
            const idleRotationX = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
            const idlePositionY = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;

            // Scroll-driven transformations:
            // 1. Rotation Y: Complete 3D turn as user scrolls down/up
            const targetRotationY = -Math.PI / 12 + progress * Math.PI * 2 + idleRotationY;
            // 2. Rotation X: Kinetic pitch forward and back
            const targetRotationX = Math.sin(progress * Math.PI) * 0.35 + idleRotationX;
            // 3. Rotation Z: Aerodynamic bank angle
            const targetRotationZ = -progress * 0.25;

            // 4. Position shifts: Logo moves slightly up and closer to camera as you scroll down
            const targetPositionY = -0.2 + progress * 0.6 + idlePositionY;
            const targetPositionZ = progress * 1.8;
            const targetPositionX = progress * 0.3;

            // Apply smoothly
            groupRef.current.rotation.y = targetRotationY;
            groupRef.current.rotation.x = targetRotationX;
            groupRef.current.rotation.z = targetRotationZ;

            groupRef.current.position.y = targetPositionY;
            groupRef.current.position.z = targetPositionZ;
            groupRef.current.position.x = targetPositionX;
        }
    });

    // The scale and positioning center the perfectly extracted SVG coordinates.
    return (
        <group ref={groupRef} scale={[0.9, 0.9, 0.9]} position={[0, -0.2, 0]} rotation={[0, -Math.PI / 12, 0]}>
            {/* Top Light Blue Wing */}
            <mesh position={[0, 0, 0]}>
                <extrudeGeometry args={[topWing, extrudeSettings]} />
                <meshStandardMaterial color="#54C5F8" roughness={0.15} metalness={0.4} />
            </mesh>

            {/* Middle Diamond Wing */}
            <mesh position={[0, 0, 0.08]}>
                <extrudeGeometry args={[bottomWingMiddle, extrudeSettings]} />
                <meshStandardMaterial color="#29B6F6" roughness={0.15} metalness={0.4} />
            </mesh>

            {/* Bottom Right Light Blue Wing */}
            <mesh position={[0, 0, 0.16]}>
                <extrudeGeometry args={[bottomWingLightBlue, extrudeSettings]} />
                <meshStandardMaterial color="#54C5F8" roughness={0.15} metalness={0.4} />
            </mesh>

            {/* Bottom Shadow Wing */}
            <mesh position={[0, 0, 0.08]}>
                <extrudeGeometry args={[shadowDarkBlue, extrudeSettings]} />
                <meshStandardMaterial color="#01579B" roughness={0.25} metalness={0.4} />
            </mesh>
        </group>
    );
};

export default function FlutterLogo3D({ className = "" }: { className?: string }) {
    return (
        <div className={`w-full h-full min-h-[360px] sm:min-h-[450px] lg:min-h-[550px] relative flex justify-center items-center select-none pointer-events-none ${className}`}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <React.Suspense fallback={null}>
                    {/* Lighting Setup */}
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
                    <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#54C5F8" />
                    <directionalLight position={[0, 5, -5]} intensity={0.8} color="#29B6F6" />
                    
                    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.2}>
                        <FlutterLogo />
                    </Float>
                    
                    <Environment preset="city" />
                    <ContactShadows position={[0, -2.2, 0]} opacity={0.5} scale={12} blur={2.5} far={4} />
                </React.Suspense>
            </Canvas>
        </div>
    );
}
