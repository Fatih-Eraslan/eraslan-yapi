import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    return (
        <Link to={`/projects/${project.slug}`}>
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
        </Link>
    );
};

export const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-primary text-white relative">
            {/* Secondary anchor for backwards compatibility with detail page back link */}
            <div id="projeler" className="absolute -top-24 left-0 w-full h-1" />

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
