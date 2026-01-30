import { motion } from 'framer-motion';
import { Building2, Factory, Home, Hammer, Ruler, Briefcase, HardHat } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-6 bg-surface/50 border border-white/5 hover:border-accent/40 hover:bg-surface transition-all duration-300 rounded-sm"
        >
            <div className="w-12 h-12 mb-6 text-accent group-hover:scale-110 group-hover:text-white transition-all duration-300">
                <Icon strokeWidth={1.5} size={40} />
            </div>
            <h3 className="text-xl font-serif text-white mb-3 group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                {description}
            </p>
        </motion.div>
    );
};

export const Services = () => {
    const services = [
        {
            title: "Konut ve Rezidans İnşaatı",
            description: "Modern yaşamın gereksinimlerine uygun, konforlu ve güvenli yaşam alanları inşa ediyoruz.",
            icon: Home
        },
        {
            title: "Ticari Yapılar ve Plaza",
            description: "İş dünyası için prestijli, fonksiyonel ve güncel teknolojiye sahip ofis projeleri.",
            icon: Building2
        },
        {
            title: "Villa ve Lüks Konut",
            description: "Özel tasarım, yüksek standartlarda malzeme ve işçilikle hayata geçen butik projeler.",
            icon: Hammer // Using Hammer as a metaphor for craftsmanship, or could use another icon
        },
        {
            title: "Kentsel Dönüşüm",
            description: "Eski yapıların, deprem yönetmeliğine uygun, modern ve güvenli binalara dönüştürülmesi.",
            icon: HardHat
        },
        {
            title: "Endüstriyel İnşaatlar",
            description: "Fabrika, depo ve üretim tesisleri için dayanıklı ve amaca yönelik çözümler.",
            icon: Factory
        },
        {
            title: "Altyapı ve Betonarme",
            description: "Sağlam temeller üzerine kurulu, uzun ömürlü betonarme yapı ve altyapı sistemleri.",
            icon: Ruler
        },
        {
            title: "Proje Yönetimi",
            description: "Projenin başlangıcından anahtar teslimine kadar tüm süreçlerin profesyonel yönetimi.",
            icon: Briefcase
        }
    ];

    return (
        <section id="services" className="py-24 bg-primary-dark relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '30px 30px'
                }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-accent text-sm tracking-widest uppercase mb-3">Uzmanlık Alanlarımız</h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-white">Hizmetlerimiz</h3>
                        <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            index={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}

                    {/* Filler item to complete the grid or Call to Action card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="group p-6 bg-accent border border-accent flex flex-col justify-center items-center text-center cursor-pointer hover:bg-white transition-colors duration-300 rounded-sm"
                    >
                        <h3 className="text-xl font-serif text-primary-dark mb-2">Özel Projeniz Mi Var?</h3>
                        <p className="text-primary-dark/80 text-sm mb-4">Size özel çözümlerimiz için bizimle iletişime geçin.</p>
                        <a href="#contact" className="px-6 py-2 border border-primary-dark text-primary-dark font-bold text-sm uppercase hover:bg-primary-dark hover:text-white transition-colors">
                            Teklif Alın
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
