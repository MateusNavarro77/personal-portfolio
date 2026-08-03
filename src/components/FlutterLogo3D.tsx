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

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle hovering and floating rotation
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
        }
    });

    // The scale and positioning center the perfectly extracted SVG coordinates.
    return (
        <group ref={groupRef} scale={[0.8, 0.8, 0.8]} position={[0, -0.2, 0]} rotation={[0, -Math.PI / 12, 0]}>
            {/* Top Light Blue Wing */}
            <mesh position={[0, 0, 0]}>
                <extrudeGeometry args={[topWing, extrudeSettings]} />
                <meshStandardMaterial color="#54C5F8" roughness={0.2} metalness={0.5} />
            </mesh>

            {/* Middle Diamond Wing */}
            <mesh position={[0, 0, 0.08]}>
                <extrudeGeometry args={[bottomWingMiddle, extrudeSettings]} />
                <meshStandardMaterial color="#29B6F6" roughness={0.2} metalness={0.5} />
            </mesh>

            {/* Bottom Right Light Blue Wing */}
            <mesh position={[0, 0, 0.16]}>
                <extrudeGeometry args={[bottomWingLightBlue, extrudeSettings]} />
                <meshStandardMaterial color="#54C5F8" roughness={0.2} metalness={0.5} />
            </mesh>

            {/* Bottom Shadow Wing */}
            <mesh position={[0, 0, 0.08]}>
                <extrudeGeometry args={[shadowDarkBlue, extrudeSettings]} />
                <meshStandardMaterial color="#01579B" roughness={0.3} metalness={0.4} />
            </mesh>
        </group>
    );
};

export default function FlutterLogo3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full opacity-60 flex justify-center items-center">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <React.Suspense fallback={null}>
                    {/* Lighting Setup */}
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
                    <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#54C5F8" />
                    
                    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={2}>
                        <FlutterLogo />
                    </Float>
                    
                    <Environment preset="city" />
                    <ContactShadows position={[0, -3.5, 0]} opacity={0.5} scale={15} blur={2.5} far={4} />
                </React.Suspense>
            </Canvas>
        </div>
    );
}
