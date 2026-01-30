import { motion } from 'framer-motion';
import { Shield, Clock, Award, PenTool } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className="bg-surface p-8 border border-white/5 hover:border-accent/30 transition-colors duration-300 group"
        >
            <div className="w-12 h-12 bg-primary-dark border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-accent" size={24} />
            </div>
            <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
};

export const About = () => {
    return (
        <section id="about" className="py-24 bg-primary-light relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-accent text-sm tracking-widest uppercase mb-2">Hakkımızda</h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tigher">
                            Güven ve Kalite ile <br /><span className="text-gray-500">Geleceği Şekillendiriyoruz</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Eraslan Yapı olarak 5+ yıllık tecrübemizle kaliteli, güvenilir ve yenilikçi inşaat projelerine imza atıyoruz.
                            Konut, ticari ve endüstriyel projelerde uzman kadromuz ve yenilikçi vizyonumuzla, sadece binalar değil,
                            nesiller boyu sürecek yaşam alanları inşa ediyoruz.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Her projemizde modern mimarinin gerekliliklerini, çevreye duyarlı yaklaşımlarımızla harmanlıyor
                            ve müşterilerimize en yüksek standartlarda hizmet sunuyoruz.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 h-[400px] bg-surface relative overflow-hidden"
                    >
                        {/* Abstract decorative element representing a blueprint or structure */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50"></div>
                        <div className="absolute inset-0 border border-white/5 m-4"></div>
                        <div className="absolute bottom-0 right-0 p-8">
                            <div className="text-6xl font-serif text-white/10 font-bold">5+</div>
                            <div className="text-accent uppercase tracking-widest text-sm">Yıllık Tecrübe</div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={Shield}
                        title="Güvenilir Yapılar"
                        description="Deprem yönetmeliğine tam uygun, yüksek dayanımlı ve güvenli yaşam alanları."
                        delay={0.1}
                    />
                    <FeatureCard
                        icon={Award}
                        title="Üstün Kalite"
                        description="Birinci sınıf malzeme ve işçilikle detaylarda mükemmelliği yakalayan projeler."
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={Clock}
                        title="Zamanında Teslim"
                        description="Planlanan sürelerde proje teslimi ile söz verdiğimiz tarihte anahtar teslimi."
                        delay={0.3}
                    />
                    <FeatureCard
                        icon={PenTool}
                        title="Modern Tasarım"
                        description="Estetik ve fonksiyonelliği buluşturan, çağı yakalayan mimari çözümler."
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};
