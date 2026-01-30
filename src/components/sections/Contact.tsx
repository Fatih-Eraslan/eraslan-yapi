import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Linkedin, Facebook, Send } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleBackground = () => {
    const ref = useRef<any>(null);
    // @ts-ignore
    const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#d4af37"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export const Contact = () => {
    return (
        <section id="contact" className="relative py-24 bg-primary-dark overflow-hidden">
            {/* 3D Background Effect */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <ParticleBackground />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent text-sm tracking-widest uppercase mb-2">İletişim</h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">Bize Ulaşın</h3>
                        <p className="text-gray-400 mb-12 leading-relaxed">
                            Projelerimiz hakkında bilgi almak veya yeni bir proje başlatmak için bizimle iletişime geçin.
                            Ekibimiz size en kısa sürede dönüş yapacaktır.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-accent shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-lg mb-1">Telefon</h4>
                                    <a href="tel:05337738910" className="text-gray-300 hover:text-accent transition-colors block mb-3">
                                        0533 773 89 10
                                    </a>
                                    <a
                                        href="https://wa.me/905337738910"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 border border-accent/50 rounded px-4 py-2 text-white text-sm hover:bg-accent hover:text-primary-dark hover:border-accent transition-all duration-300 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366] group-hover:text-primary-dark transition-colors">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        <span>WhatsApp ile İletişime Geçin</span>
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-accent shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-serif text-lg mb-1">Adres</h4>
                                    <p className="text-gray-300">
                                        İstanbul, Türkiye (Merkez Ofis)<br />
                                        Detaylı adres bilgisi için tarafımıza ulaşınız.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-primary-dark transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-primary-dark transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-primary-dark transition-all">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-surface p-8 md:p-12 border border-white/5"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Ad Soyad</label>
                                <input
                                    type="text"
                                    className="w-full bg-primary-dark border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="İsim Soyisim"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Telefon</label>
                                <input
                                    type="tel"
                                    className="w-full bg-primary-dark border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="05XX XXX XX XX"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-2">Mesajınız</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-primary-dark border border-white/10 p-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Proje hakkında detaylı bilgi almak istiyorum..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-accent text-primary-dark font-bold py-4 hover:bg-white transition-colors flex items-center justify-center gap-2"
                            >
                                GÖNDER
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Eraslan Yapı. Tüm hakları saklıdır.
                </div>
            </div>
        </section>
    );
};
