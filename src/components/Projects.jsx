import { ExternalLink, Github, Code, Layout } from 'lucide-react';

const PROJECTS = [
  {
    title: 'SkillSphere',
    subtitle: 'P2P Skill Exchange Platform',
    description:
      'A full-stack platform using Java Spring Boot and React. Built features for skill management, session scheduling, and secure JWT authentication. Engineered for efficient data flow and high scalability.',
    tags: ['Java', 'Spring Boot', 'React', 'JWT', 'PostgreSQL'],
    color: 'bg-neo-secondary',
    github: 'https://github.com/garvsurve/SkillSphere',
    demo: null,
    icon: <Layout size={40} className="text-neo-ink" />
  },
  {
    title: 'AuditAble',
    subtitle: 'Accessibility Analysis Tool',
    description:
      'Web scanner that detects accessibility issues using rule-based analysis (JSoup). Generates heatmaps, categorical reports, and AI-driven repair suggestions with PDF export capabilities.',
    tags: ['Spring Boot', 'JSoup', 'OpenPDF', 'AI Integration', 'React'],
    color: 'bg-neo-muted',
    github: 'https://github.com/garvsurve/AuditAble',
    demo: null,
    icon: <Code size={40} className="text-neo-ink" />
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neo-white border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-block bg-neo-accent text-neo-white border-4 border-black px-4 py-1 -rotate-2 font-black uppercase shadow-neo-sm">
              03. PORTFOLIO
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              Featured <br /> <span className="text-stroke">Shipments</span>
            </h2>
          </div>
          <p className="text-xl font-bold max-w-sm border-l-4 border-black pl-4">
            Engineered solutions for complex problems. Built with performance and accessibility in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, i) => (
            <div 
              key={i} 
              className={`neo-card p-0 overflow-hidden flex flex-col ${project.color}`}
            >
              {/* Card Header/Image Area */}
              <div className="h-48 border-b-4 border-black bg-neo-white relative flex items-center justify-center bg-halftone">
                <div className="absolute top-4 left-4 bg-neo-ink text-neo-white px-3 py-1 font-black text-xs uppercase tracking-widest">
                  v1.0.0
                </div>
                {project.icon}
              </div>

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-1">
                  {project.title}
                </h3>
                <p className="font-bold text-sm uppercase tracking-widest opacity-60 mb-6">
                  {project.subtitle}
                </p>
                
                <p className="text-lg font-bold leading-snug mb-8 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-neo-white border-2 border-black px-2 py-0.5 text-xs font-black uppercase tracking-tighter">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neo-btn bg-neo-ink text-neo-white px-6 py-3 flex items-center gap-2 text-sm flex-1 justify-center"
                  >
                    <Github size={18} /> GITHUB
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="neo-btn bg-neo-white text-neo-ink px-6 py-3 flex items-center gap-2 text-sm flex-1 justify-center"
                    >
                      <ExternalLink size={18} /> LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
