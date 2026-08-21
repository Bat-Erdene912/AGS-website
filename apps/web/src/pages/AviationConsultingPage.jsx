import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, BarChart3 } from 'lucide-react';

const AviationConsultingPage = () => {
  return (
    <>
      <Helmet>
        <title>Aviation Consulting | Aeronautics LLC</title>
        <meta name="description" content="Professional aviation consulting services with details about regulatory compliance, certification support, and strategic planning expertise." />
      </Helmet>

      <main className="bg-background min-h-screen pb-20">
        {/* HERO SECTION */}
        <section className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/70bdd990698593c3be80349e546ba6bf.jpg" 
              alt="Aviation professionals discussing strategies near an aircraft inside a hangar" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="hero-overlay-dark"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full">
            
            
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-xl">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-shadow-hero">
                Aviation Consulting
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl font-medium text-shadow-hero">
              Strategic guidance for operators and infrastructure developers to optimize aviation operations in Mongolia. We provide rigorous regulatory compliance and structural efficiency insights.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center heading-underline-center">Comprehensive Expertise</h2>
              <div className="text-muted-foreground leading-relaxed mb-10 space-y-6 text-center text-lg">
                <p>Our experienced team of aeronautical engineers, pilots, aerodrome engineers, dispatchers, inspectors, and airline managers provides high-quality consulting services to clients in the aviation industry. We divide our consulting offerings into two main categories:</p>

                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm text-left">
                  <p className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">1</span>
                    Aviation Consulting
                  </p>
                  <p className="mb-4">We offer strategic advisory, project implementation, and regulatory compliance support to help launch and operate aviation businesses successfully.</p>
                  <ul className="space-y-3">
                    {[
                      "Turn-key / AOC (Air Operator Certificate), AMO (Aircraft Maintenance Organization), ATO (Aviation Training Organization) start-ups – Full project support from planning to certification",
                      "MOE (Maintenance Organisation Exposition), SOP (Standard Operating Procedures) development, manual review, and project management",
                      "Aerodrome Management and Planning: Master planning, feasibility studies, operating manuals, airstrip/helipad selection, construction, and operational management",
                      "Due diligence, market analysis, fleet expansion advisory",
                      "SMS (Safety Management System), QA (Quality Assurance), CAMO (Continuing Airworthiness Management) system establishment and development"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm text-left">
                  <p className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">2</span>
                    Aircraft Technical Asset Management
                  </p>
                  <p className="mb-4">We help preserve and enhance the value and marketability of aircraft assets for lessors, operators, and investors through precise technical inspections and documentation management.</p>
                  <ul className="space-y-3">
                    {[
                      "Aircraft Transition Management: Ensure the aircraft and technical records fully comply with lease return and delivery conditions",
                      "Aircraft Pre/Redelivery & Mid-term Inspections: Physical inspections and records review to verify compliance with lease terms",
                      "Aircraft Pre-purchase Inspections: Detailed assessments and reports on current and historical maintenance/technical status",
                      "Aircraft Tear-down / Part-out Management: Complete support including planning, vendor selection, component removal, documentation build-up, shop visit management, import/export, sales, and administrative assistance",
                      "Long-term Storage / Parking: Aircraft and engine storage in accordance with manufacturer requirements and environmental conditions",
                      "Major Maintenance Event Planning and Representation: Planning, review, monitoring, and representation for major checks, shop visits, AOG recovery, etc."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-medium text-foreground p-6 bg-muted rounded-xl">
                  Our team is ready to protect your aircraft asset value and reduce risks. For more details or to start a project, please contact us!
                </p>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-12 text-center">
                From initial market entry strategic planning to ongoing operational efficiency assessments, our consultants act as an extension of your team. We work closely with the Civil Aviation Authority of Mongolia (MCAA) and other relevant bodies to streamline your operational approvals.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Key Focus Areas</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Regulatory Compliance & Approvals", 
                  "Certification Support (AOC, AMO)", 
                  "Strategic Route Planning", 
                  "Market Entry Feasibility", 
                  "Infrastructure Advisory", 
                  "Efficiency Optimization"
                ].map((feature, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-card p-6 rounded-xl border border-border text-center shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-8 h-8 text-primary mb-4 shrink-0" />
                    <span className="font-bold text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AviationConsultingPage;