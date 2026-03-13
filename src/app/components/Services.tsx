import { motion } from 'motion/react';
import { Code, Shield, Cloud, Smartphone, Database, Cpu } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Création d\'applications web modernes et performantes avec les technologies les plus récentes (React, Node.js, etc.)',
    features: ['Sites web responsive', 'Applications SPA/PWA', 'E-commerce', 'Dashboards personnalisés']
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Développement d\'applications mobiles natives et cross-platform pour iOS et Android.',
    features: ['React Native', 'Interface intuitive', 'Performance optimale', 'Synchronisation cloud']
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Protection et sécurisation de vos systèmes informatiques contre les menaces et vulnérabilités.',
    features: ['Audit de sécurité', 'Pentesting', 'Formation équipes', 'Conformité RGPD']
  },
  {
    icon: Cloud,
    title: 'Solutions Cloud',
    description: 'Architecture et migration cloud pour une infrastructure moderne, scalable et performante.',
    features: ['AWS, Azure, GCP', 'Migration cloud', 'Haute disponibilité', 'Optimisation coûts']
  },
  {
    icon: Database,
    title: 'Bases de Données',
    description: 'Conception, optimisation et gestion de bases de données relationnelles et NoSQL.',
    features: ['PostgreSQL, MongoDB', 'Optimisation requêtes', 'Backup automatique', 'Scalabilité']
  },
  {
    icon: Cpu,
    title: 'DevOps & CI/CD',
    description: 'Automatisation des processus de développement, tests et déploiement pour une livraison continue.',
    features: ['Docker & Kubernetes', 'Pipelines CI/CD', 'Monitoring 24/7', 'Infrastructure as Code']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nos <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions technologiques complètes adaptées à vos besoins, de la conception au déploiement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border-2 border-slate-100 hover:border-cyan-300 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Solutions Développées */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
            Solutions <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Développées</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Plateforme E-Commerce Complète',
                desc: 'Solution de commerce en ligne avec gestion des stocks, paiements sécurisés et analytics avancés',
                tech: ['React', 'Node.js', 'Stripe', 'MongoDB']
              },
              {
                title: 'Système de Gestion d\'Entreprise (ERP)',
                desc: 'ERP personnalisé pour la gestion complète des opérations, RH, finance et inventaire',
                tech: ['Vue.js', 'Python', 'PostgreSQL', 'Docker']
              },
              {
                title: 'Application de Surveillance Sécurité',
                desc: 'Système de monitoring et alertes en temps réel pour la détection d\'intrusions',
                tech: ['React Native', 'WebSocket', 'AI/ML', 'AWS']
              },
              {
                title: 'Dashboard Analytics Intelligence',
                desc: 'Tableaux de bord interactifs avec visualisation de données et rapports personnalisés',
                tech: ['TypeScript', 'D3.js', 'GraphQL', 'Redis']
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 hover:shadow-lg transition-all"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h4>
                <p className="text-gray-700 mb-4">{solution.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-cyan-700 rounded-full text-sm font-medium border border-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
