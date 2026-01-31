import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative h-[500px] w-full bg-surface overflow-hidden cursor-pointer"
        >
            {/* Background Image Placeholder */}
            <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1`}
                style={{ backgroundImage: `url(${project.image})`, backgroundColor: '#2a2a2a' }}>
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                    <div className="mb-4">
                        <h4 className="text-6xl font-serif font-bold text-white/10 group-hover:text-white/20 transition-colors">{project.year}</h4>
                    </div>

                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-2xl font-sans font-bold text-white">{project.name}</h3>
                        <span className={`text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm ${project.status === 'Tamamlandı'
                            ? 'bg-accent text-primary-dark'
                            : 'bg-white/10 text-accent border border-accent/20'
                            }`}>
                            {project.status}
                        </span>
                    </div>

                    <p className="text-gray-300 text-sm max-w-[95%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-1">
                        {project.description}
                    </p>

                    {project.status === 'Devam Ediyor' && (
                        <div className="mt-4 w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '45%' }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="h-full bg-accent"
                            />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    const projects = [
        {
            name: "30+ Daireli Konut Projesi",
            year: "2024",
            status: "Tamamlandı",
            description: "30'dan fazla daireden oluşan bu konut projemiz, kaliteli inşaat standartları, verimli alan planlaması ve güvenilir teslimat anlayışıyla başarıyla tamamlanmıştır. Sağlam yapısal çözümler ve titiz işçilikle modern yaşam beklentilerini karşılayan bu projemiz, aileler için konforlu ve güvenli yaşam alanları sunmaktadır.",
            image: "/images/projects/project1.jpg",
            scope: [
                "Betonarme Taşıyıcı Sistem",
                "Dış Cephe ve Isı Yalıtımı",
                "İç Mekan Bitirme İşleri",
                "Mekanik ve Elektrik Tesisatı",
                "Şantiye Koordinasyonu"
            ]
        },
        {
            name: "12 Daireli Konut Projesi",
            year: "2023",
            status: "Tamamlandı",
            description: "12 daireden oluşan bu konut yapımız, nitelikli işçilik, fonksiyonel mekan düzeni ve yaşam konforu ön planda tutularak hayata geçirilmiştir. Her detayda kaliteyi yansıtan bu projemiz, sakinlerine modern ve huzurlu bir yaşam ortamı sağlamaktadır.",
            image: "/images/projects/project2.jpg",
            scope: [
                "Yapısal Betonarme İşler",
                "Cephe Kaplama ve Yalıtım",
                "İç Mekan Tesisat ve Elektrik",
                "Zemin Kaplama ve Sıva İşleri",
                "Ortak Alan Düzenlemeleri"
            ]
        },
        {
            name: "64 Daireli Konut Projesi",
            year: "2024",
            status: "Devam Ediyor",
            description: "64 daireli bu büyük ölçekli konut projemizin inşaatı şu anda devam etmektedir. Planlı yürütülen yapım süreçleri, yüksek yapısal kalite standartları ve modern yaşam beklentilerine uygun tasarım anlayışıyla çalışmalarımız titizlikle sürdürülmektedir. Güçlü mühendislik altyapısı ve kaliteli malzeme kullanımıyla güvenli ve konforlu yaşam alanları sunmayı hedefliyoruz.",
            image: "/images/projects/project3.jpg",
            scope: [
                "Betonarme Karkas Sistem",
                "Dış Cephe ve Isı Yalıtımı",
                "İç Mekan Bitirme İşleri",
                "Altyapı ve Tesisat Sistemleri",
                "Peyzaj ve Çevre Düzenlemesi",
                "Şantiye Organizasyonu"
            ]
        }
    ];

    return (
        <section id="projects" className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-accent text-sm tracking-widest uppercase mb-2">Portföyümüz</h2>
                        <h3 className="text-4xl md:text-5xl font-serif">Projelerimiz</h3>
                    </div>
                    <p className="text-gray-400 max-w-md text-right md:text-left">
                        Yenilikçi vizyonumuz ve mühendislik tecrübemizle hayata geçirdiğimiz seçkin yapılar.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
