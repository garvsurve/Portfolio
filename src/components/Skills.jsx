const SKILLS = {
  'Backend': ['Spring Boot', 'Spring MVC', 'Data JPA', 'Security', 'REST API', 'Java'],
  'Frontend': ['React.js', 'Vite', 'HTML', 'CSS', 'Axios', 'JavaScript'],
  'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
  'Tools': ['Git', 'GitHub', 'Maven', 'IntelliJ', 'Postman', 'Docker'],
  'Core CS': ['DSA', 'OOPs', 'DBMS', 'OS', 'Networks'],
  'Testing': ['JUnit'],
};

const CATEGORY_STYLES = [
  'bg-neo-accent text-neo-white',
  'bg-neo-secondary text-neo-ink',
  'bg-neo-muted text-neo-ink',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-neo-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 space-y-4">
          <div className="inline-block bg-neo-secondary border-4 border-black px-4 py-1 rotate-2 font-black uppercase shadow-neo-sm">
            02. TOOLBOX
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            Technical <br /> <span className="text-stroke">Arsenal</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, items], idx) => (
            <div 
              key={category}
              className={`border-4 border-black p-8 shadow-neo-md hover:shadow-neo-lg transition-all bg-neo-white group ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0`}
            >
              <h3 className={`inline-block border-2 border-black px-3 py-1 mb-6 font-black uppercase tracking-widest text-sm ${CATEGORY_STYLES[idx % CATEGORY_STYLES.length]}`}>
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <div 
                    key={skill}
                    className="border-2 border-black bg-neo-white px-3 py-1 font-bold text-sm uppercase tracking-tight shadow-[2px_2px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Marquee-style placeholder or decoration */}
        <div className="mt-20 border-y-4 border-black py-4 overflow-hidden bg-neo-secondary rotate-1">
          <div className="whitespace-nowrap flex animate-marquee gap-8">
            {Array(10).fill(null).map((_, i) => (
              <span key={i} className="text-2xl font-black uppercase tracking-widest">
                SKILLED • PASSIONATE • DRIVEN • 
              </span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
