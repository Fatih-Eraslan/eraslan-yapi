import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { BuildingHero } from '../3d/BuildingHero';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen bg-primary overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas className="w-full h-full">
                    <BuildingHero />
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-left pointer-events-auto"
                    >
                        <h2 className="text-accent font-medium tracking-widest mb-4">MİMARİDE MÜKEMMELLİK</h2>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                            Eraslan <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Yapı</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                            5+ Yıllık Tecrübe ile Geleceği İnşa Ediyoruz. Estetik, güven ve kaliteyi bir araya getiren modern yaşam alanları.
                        </p>

                        <a
                            href="#projects"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-white text-primary-dark font-bold tracking-wide transition-all duration-300 group"
                        >
                            PROJELERİMİZİ KEŞFEDİN
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right side is intentionally empty to show more of the 3D model */}
                    <div className="hidden md:block"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-white/50 text-xs tracking-[0.2em]">KAYDIR</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
            </motion.div>
        </section>
    );
};
