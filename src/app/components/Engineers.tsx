import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, Linkedin, Mail, Code, Award, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';


// Importations des images statiques
import ingG from '../../images/ingG.png';
import ingA from '../../images/ingA.png';
import ingW from '../../images/ingW.png';
// Remplace 'nom_image_2.png' par le vrai nom de ton fichier dans le dossier image
// import imgIng2 from '../image/nom_image_2.png'; 
// import imgIng3 from '../image/nom_image_3.png';

interface Engineer {
  id: number;
  name: string;
  role: string;
  image: any;
  bio: string;
  skills: string[];
  projects: { name: string; description: string }[];
  email: string;
  github?: string;
  linkedin?: string;
}

const engineers: Engineer[] = [
  {
    id: 1,
    name: 'TCHANGAI M.Grâce',
    role: 'Développeuse Full-Stack',
    image: ingG,
    bio: 'Expert en développement web avec plus de 5 ans d\'expérience dans la création d\'applications modernes et performantes.',
    skills: ['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL'],
    projects: [
      { name: 'E-Commerce Platform', description: 'Plateforme de commerce électronique complète avec paiement intégré' },
      { name: 'API REST Sécurisée', description: 'API robuste avec authentification JWT et gestion des permissions' },
      { name: 'Dashboard Analytics', description: 'Tableau de bord interactif avec visualisation de données en temps réel' }
    ],
    email: 'ingenieur1@cyberclub-tab.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 2,
    name: 'AWIZOBA E.Geoffroy ',
    role: 'Expert Cybersécurité',
    image: ingA,
    bio: 'Spécialiste en sécurité informatique, certifié en pentesting et analyse de vulnérabilités.',
    skills: ['Pentesting', 'Cryptographie', 'SIEM', 'Forensics', 'Network Security', 'ISO 27001'],
    projects: [
      { name: 'Audit de Sécurité', description: 'Analyse complète de la sécurité d\'une infrastructure d\'entreprise' },
      { name: 'Système de Détection d\'Intrusion', description: 'IDS personnalisé avec alertes en temps réel' },
      { name: 'Formation Cybersécurité', description: 'Programme de sensibilisation pour entreprises' }
    ],
    email: 'ingenieur2@cyberclub-tab.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 3,
    name: 'BADILA Wilfried',
    role: 'Architecte DevOps',
    image: ingW,
    bio: 'Architecte cloud et DevOps passionné par l\'automatisation et l\'optimisation des infrastructures.',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Jenkins'],
    projects: [
      { name: 'Infrastructure Cloud', description: 'Migration complète vers AWS avec haute disponibilité' },
      { name: 'Pipeline CI/CD', description: 'Automatisation complète du déploiement avec tests intégrés' },
      { name: 'Monitoring System', description: 'Système de surveillance avec Prometheus et Grafana' }
    ],
    email: 'ingenieur3@cyberclub-tab.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  }
];

export function Engineers() {
  const [selectedEngineer, setSelectedEngineer] = useState<Engineer | null>(null);

  return (
    <section id="ingénieurs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Notre Équipe d'<span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Ingénieurs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les talents qui composent CyberClub-TAB. Cliquez sur chaque profil pour explorer leurs compétences et projets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineers.map((engineer, index) => (
            <motion.div
              key={engineer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedEngineer(engineer)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 group"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={engineer.image}
                  alt={engineer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{engineer.name}</h3>
                  <p className="text-cyan-300">{engineer.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{engineer.bio}</p>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Voir le profil complet
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEngineer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEngineer(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-64 md:h-80">
                <ImageWithFallback
                  src={selectedEngineer.image}
                  alt={selectedEngineer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <button
                  onClick={() => setSelectedEngineer(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedEngineer.name}</h2>
                  <p className="text-xl text-cyan-300">{selectedEngineer.role}</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Bio */}
                <div className="mb-6">
                  <p className="text-gray-700 text-lg">{selectedEngineer.bio}</p>
                </div>

                {/* Compétences */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-6 h-6 text-cyan-600" />
                    <h3 className="text-2xl font-bold text-slate-900">Compétences</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedEngineer.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projets */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-6 h-6 text-cyan-600" />
                    <h3 className="text-2xl font-bold text-slate-900">Projets Réalisés</h3>
                  </div>
                  <div className="space-y-4">
                    {selectedEngineer.projects.map((project, index) => (
                      <div key={index} className="border-l-4 border-cyan-500 pl-4 py-2">
                        <h4 className="font-bold text-lg text-slate-900">{project.name}</h4>
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-6 h-6 text-cyan-600" />
                    <h3 className="text-2xl font-bold text-slate-900">Contact</h3>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`mailto:${selectedEngineer.email}`}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
                    >
                      <Mail className="w-5 h-5 text-slate-600" />
                      <span className="text-slate-700">Email</span>
                    </a>
                    {selectedEngineer.github && (
                      <a
                        href={selectedEngineer.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
                      >
                        <Github className="w-5 h-5 text-slate-600" />
                        <span className="text-slate-700">GitHub</span>
                      </a>
                    )}
                    {selectedEngineer.linkedin && (
                      <a
                        href={selectedEngineer.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
                      >
                        <Linkedin className="w-5 h-5 text-slate-600" />
                        <span className="text-slate-700">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
