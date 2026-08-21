import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlaneTakeoff } from 'lucide-react';

const GroundHandlingPage = () => {
  return (
    <>
      <Helmet>
        <title>Ground Handling | Aeronautics LLC</title>
        <meta name="description" content="Comprehensive ground handling services covering aircraft servicing, passenger handling, cargo operations, and coverage across Mongolia." />
      </Helmet>

      <main className="bg-background min-h-screen pb-20">
        {/* HERO SECTION */}
        <section className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/c2f742825aaf840431180795d85bc025.jpg" 
              alt="Ground handling worker in safety gear directing aircraft on tarmac" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="hero-overlay-dark"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full">
           
            
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-xl">
                <PlaneTakeoff className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-shadow-hero">
                Ground Handling
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl font-medium text-shadow-hero">
              Professional, efficient, and safe ground handling services across all major airports in Mongolia. Operated directly by our AGS LLC subsidiary to ensure uncompromising quality.
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Service Description */}
              <div className="mb-20">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                  We guarantee the highest quality refueling and ground handling services at all airports in Mongolia. Our ground handling service includes but is not limited to the following:
                </p>
                
                <div className="flex justify-center">
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-left text-lg">
                    <li>Obtaining Foreign AOC</li>
                    <li>Coordination with CAA of Mongolia and other authorities</li>
                    <li>Station management and representative service</li>
                    <li>Overflight and landing permission</li>
                    <li>Flight planning and consulting</li>
                    <li>Ramp side support and supervision</li>
                    <li>Refueling support</li>
                    <li>Local transportation including domestic charter flights</li>
                    <li>Hotel booking</li>
                    <li>Mongolian visa arrangement</li>
                    <li>Catering order</li>
                  </ul>
                </div>
              </div>

              {/* Client Logos Section */}
              <div className="text-center pt-16 border-t border-border">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-16">
                  We're representing the following companies in Mongolia
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center max-w-4xl mx-auto">
                  {/* China United Airlines */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-40 h-40 rounded-full bg-white shadow-sm border border-border flex items-center justify-center p-4 overflow-hidden">
                      <img 
                        src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/3021b5543409d1289e5f9c7f9eb8602c.png" 
                        alt="China United Airlines logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <a 
                      href="https://www.flycua.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-foreground hover:text-primary hover:underline underline-offset-4 tracking-wider transition-colors"
                    >
                      CHINA UNITED AIRLINES
                    </a>
                  </div>

                  {/* Spring Airlines */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-40 h-40 rounded-full bg-white shadow-sm border border-border flex items-center justify-center p-4 overflow-hidden">
                      <img 
                        src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/85f5fa70309de84b176d88bcaebee84b.png" 
                        alt="Spring Airlines logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <a 
                      href="https://en.ch.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-foreground hover:text-primary hover:underline underline-offset-4 tracking-wider transition-colors"
                    >
                      SPRING AIRLINES
                    </a>
                  </div>

                  {/* My Freighter Airlines */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-40 h-40 rounded-full bg-white shadow-sm border border-border flex items-center justify-center p-4 overflow-hidden">
                      <img 
                        src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/7d21f0b390e75d99267e5e2a0dd76ac9.png" 
                        alt="My Freighter Airlines logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <a 
                      href="https://myfreighter.uz/en" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-foreground hover:text-primary hover:underline underline-offset-4 tracking-wider transition-colors"
                    >
                      MY FREIGHTER AIRLINES
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GroundHandlingPage;