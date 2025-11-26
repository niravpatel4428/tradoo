"use client"

import React, { useRef } from 'react'
import Badge from '../components/Badge/Badge'
import { Canvas, useFrame } from '@react-three/fiber';

function WaveMesh() {
  const mesh = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = mesh.current.geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      const waveX = Math.sin(x * 2 + t * 1.5) * 0.15;
      const waveY = Math.cos(y * 3 + t * 1.0) * 0.15;

      pos.setZ(i, waveX + waveY);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} rotation={[-0.4, 0, 0]}>
      <planeGeometry args={[10, 4, 200, 200]} />
      <meshPhongMaterial color="#121828" shininess={80} />
    </mesh>
  );
}

const WealthManagement = () => {
    const steps = [
        {
            number: 1,
            title: "Pick Your Risk Profile",
            detail:
            "Choose a disciplined, risk-based framework — from ultra-stable to adaptive. Your profile defines how assets are allocated.",
        },
        {
            number: 2,
            title: "Funds Go Into Smart-Contract Vaults",
            detail:
            "You keep full custody; rules execute transparently without intermediaries.",
        },
        {
            number: 3,
            title: "System Monitors and Adjusts",
            detail:
            "Market regimes, risk factors and disciplined rebalancing keep allocations aligned.",
        },
        {
            number: 4,
            title: "Structured Execution",
            detail:
            "The portfolio adjusts automatically based on data and logic, with every change visible.",
        },
    ];

    return (
        <>
            <div className="block relative bg-darblue">
                {/* Wave Animation Code */}
                <div className="absolute left-0 right-0 top-0 max-[390px]:h-52 h-[330px]">
                    <Canvas camera={{ position: [0, 0, 3] }}>
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[3, 2, 5]} intensity={1.2} />
                        <WaveMesh />
                    </Canvas>
                </div>
                {/* Wave Animation Code */}
                
                <div className="block pt-[330px] pb-[168px] max-[390px]:pt-52 max-[390px]:pb-16">
                    <div className="container">
                        <div className="block">
                            {/* Section Main Title */}
                            <div className="flex flex-wrap flex-col gap-6 mb-[88px] max-[390]:mb-12 items-start">
                                <Badge label='How Tradoo Works' variant='darkgreen' />
                            
                                <div className="block font-semibold text-white text-[40px] leading-[46px] -tracking-[1.20px] max-[390px]:text-[32px] max-[390px]:leading-[40px] max-[390px]:-tracking-[0.7px] xl:text-[56px] xl:leading-16 xl:-tracking-[1.68px] max-[390px]:mb-6 mb-10">
                                    <h2>Helping users invest with structured, risk-based wealth management <span className='text-gray500'>— transparent and disciplined.</span></h2>
                                </div>
                            </div>
                            {/* Section Main Title */}

                            {/* Section Main Content */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                                {steps.map((item) => (
                                    <div key={item.number} className="block">
                                        <div className="flex flex-col gap-14 max-[390px]:gap-6 bg-darkGunmetal rounded-xl md:rounded-3xl py-10 px-4 max-[390]:py-6 md:p-10 h-full">
                                            {/* Number */}
                                            <div className="block font-semibold text-gray500 text-5xl max-[390px]:text-3xl leading-tight">
                                                <span>{item.number}</span>
                                            </div>

                                            {/* Title + Detail */}
                                            <div className="block">

                                            {/* Title */}
                                            <div className="block text-white text-2xl max-[390px]:text-lg leading-tight font-semibold capitalize mb-4">
                                                <span>{item.title}</span>
                                            </div>

                                            {/* Detail */}
                                            <div className="block text-gray400 text-lg max-[390px]:text-base leading-snug">
                                                <p>{item.detail}</p>
                                            </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Section Main Content */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WealthManagement
