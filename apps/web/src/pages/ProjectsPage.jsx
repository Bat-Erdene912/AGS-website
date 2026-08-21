import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Heavy Cargo Logistics',
    category: 'Ground Handling',
    desc: 'Coordinated heavy-lift cargo operations, managing landing permits and outsized equipment logistics at regional mining airports.',
    image: 'https://images.unsplash.com/photo-1684260757017-9ee0cf369413'
  },
  {
    id: 2,
    title: 'Diplomatic Mission Support',
    category: 'VIP Handling',
    desc: 'Provided secure ground handling and rapid diplomatic clearances for multiple state aircraft during an international summit.',
    image: 'https://images.unsplash.com/photo-1690629190100-bc2bc1cc1310'
  },
  {
    id: 3,
    title: 'Emergency Medical Evacuation',
    category: 'Flight Permits',
    desc: 'Executed 1-hour turnaround support, securing short-notice airspace clearances for life-saving medevac operations.',
    image: 'https://images.unsplash.com/photo-1670167115000-e9a14aa73d06'
  },
  {
    id: 4,
    title: 'Winter Weather Logistics',
    category: 'Ground Operations',
    desc: 'Deployed advanced turnaround protocols ensuring zero operational delays during severe Mongolian winter conditions.',
    image: 'https://images.unsplash.com/photo-1684260757017-9ee0cf369413'
  },
  {
    id: 5,
    title: 'Airport Readiness Transition',
    category: 'Aviation Consulting',
    desc: 'Consulted on operational readiness for a domestic terminal transition, ensuring seamless integration of ground services.',
    image: 'https://images.unsplash.com/photo-1690629190100-bc2bc1cc1310'
  },
  {
    id: 6,
    title: 'Asset Lease Return Audit',
    category: 'Audit & Assurance',
    desc: 'Conducted a comprehensive technical records audit and lease-return assessment for a regional commercial operator.',
    image: 'https://images.unsplash.com/photo-1670167115000-e9a14aa73d06'
  }
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies & Projects | Aeronautics LLC</title>
        <meta name="description" content="Review our portfolio of professional aviation operations and ground handling scenarios." />
      </Helmet>

      <main className="bg-background min-h-screen">
        
        {/* Header */}
        <section className="py-20 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Case Studies</h1>
              <p className="text-xl text-secondary leading-relaxed">
                Demonstrated operational excellence in complex aviation scenarios. Review our recent case studies in ground handling, permitting, and consulting.
              </p>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-card border border-border rounded-2xl overflow-hidden corp-shadow flex flex-col group">
                  <div className="h-56 overflow-hidden border-b border-border relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-secondary text-sm mb-6 flex-grow leading-relaxed">
                      {project.desc}
                    </p>
                    <Link to="/contact" className="text-primary font-medium text-sm hover:underline inline-flex items-center mt-auto">
                      Discuss Similar Project &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ProjectsPage;