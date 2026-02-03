import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';

export const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? getProjectBySlug(slug) : undefined;

    if (!project) {
        return (
            <div className="min-h-screen bg-primary text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Proje Bulunamadı</h1>
                    <Link to="/#projeler" className="text-accent hover:underline">
                        ← Projelere Dön
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/#projeler"
                            className="inline-flex items-center text-accent hover:text-white transition-colors mb-6"
                        >
                            ← Projelere Dön
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className={`text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm ${project.status === 'Tamamlandı'
                                    ? 'bg-accent text-primary-dark'
                                    : 'bg-white/10 text-accent border border-accent/20'
                                }`}>
                                {project.status}
                            </span>
                            <span className="text-gray-400">{project.year}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif">{project.name}</h1>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-serif mb-6 text-accent">Proje Hakkında</h2>
                            <p className="text-gray-300 leading-relaxed mb-8">{project.description}</p>

                            {project.overview && (
                                <div className="bg-surface p-6 rounded-lg mb-8">
                                    <p className="text-gray-300 leading-relaxed">{project.overview}</p>
                                </div>
                            )}

                            {/* Gallery Section for p3 */}
                            {project.gallery && project.gallery.length > 0 && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-serif mb-6 text-accent">Galeri</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {project.gallery.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`${project.name} - Görsel ${index + 1}`}
                                                className="w-full h-48 object-cover rounded-lg"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Floor Plans Section for p3 */}
                            {project.plans && project.plans.length > 0 && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-serif mb-6 text-accent">Kat Planları</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.plans.map((plan, index) => (
                                            <img
                                                key={index}
                                                src={plan}
                                                alt={`${project.name} - Plan ${index + 1}`}
                                                className="w-full object-contain rounded-lg bg-white/5 p-4"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Apartment Types for p3 */}
                            {project.apartmentTypes && project.apartmentTypes.length > 0 && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-serif mb-6 text-accent">Daire Tipleri</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.apartmentTypes.map((apt, index) => (
                                            <div key={index} className="bg-surface p-4 rounded-lg">
                                                <h3 className="font-bold text-white mb-2">{apt.type}</h3>
                                                <p className="text-gray-400 text-sm">Boyut: {apt.size}</p>
                                                <p className="text-gray-400 text-sm">Adet: {apt.count}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-surface p-6 rounded-lg sticky top-24"
                        >
                            <h3 className="text-xl font-serif mb-4 text-accent">İş Kapsamı</h3>
                            <ul className="space-y-3">
                                {project.scope.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-accent mt-1">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Back Link Footer */}
            <div className="container mx-auto px-6 pb-16">
                <Link
                    to="/#projeler"
                    className="inline-flex items-center text-accent hover:text-white transition-colors"
                >
                    ← Projelere Dön
                </Link>
            </div>
        </div>
    );
};
