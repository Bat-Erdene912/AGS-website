import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ClipboardCheck, 
  ShieldCheck, 
  FileSearch, 
  Users, 
  Briefcase, 
  AlertTriangle 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AuditAssurancePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: <ClipboardCheck className="w-6 h-6 text-[hsl(var(--audit-blue))]" />,
      title: "Aviation Quality & Safety Management System Audits",
      desc: "Comprehensive evaluations covering Safety Management Systems (SMS), Quality Assurance (QA), and Continuing Airworthiness Management Organization (CAMO) processes to ensure international standard compliance.",
      colorClass: "border-l-[hsl(var(--audit-blue))] bg-card",
      iconBg: "bg-[hsl(var(--audit-blue))]/10"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[hsl(var(--audit-teal))]" />,
      title: "Regulatory Compliance & Certification Audits",
      desc: "Rigorous assessments to verify readiness and maintain continuous compliance for Air Operator Certificate (AOC), Approved Maintenance Organization (AMO), and Approved Training Organization (ATO) requirements.",
      colorClass: "border-l-[hsl(var(--audit-teal))] bg-card",
      iconBg: "bg-[hsl(var(--audit-teal))]/10"
    },
    {
      icon: <FileSearch className="w-6 h-6 text-[hsl(var(--audit-purple))]" />,
      title: "Aircraft & Technical Records Assurance",
      desc: "Detailed, independent reviews of aircraft technical logs, historical maintenance records, and AD/SB compliance to protect asset value and ensure continuous airworthiness.",
      colorClass: "border-l-[hsl(var(--audit-purple))] bg-card",
      iconBg: "bg-[hsl(var(--audit-purple))]/10"
    },
    {
      icon: <Users className="w-6 h-6 text-[hsl(var(--audit-green))]" />,
      title: "Internal & Supplier Audits",
      desc: "Objective assessments of internal departments and third-party vendors, verifying operational integrity, service level agreement compliance, and supply chain reliability.",
      colorClass: "border-l-[hsl(var(--audit-green))] bg-card",
      iconBg: "bg-[hsl(var(--audit-green))]/10"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[hsl(var(--audit-navy))]" />,
      title: "Due Diligence & Transaction Assurance",
      desc: "In-depth operational and technical evaluations to support informed decision-making during aircraft acquisitions, leasing transitions, and significant financial transactions.",
      colorClass: "border-l-[hsl(var(--audit-navy))] bg-card",
      iconBg: "bg-[hsl(var(--audit-navy))]/10"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-[hsl(var(--accent))]" />,
      title: "Risk & Control Assessments",
      desc: "Strategic identification of operational and compliance risks, combined with the rigorous evaluation of your existing control mechanisms and mitigation strategies.",
      colorClass: "border-l-[hsl(var(--accent))] bg-card",
      iconBg: "bg-accent/10"
    }
  ];

  const whyChooseReasons = [
    {
      title: "Domain Expertise",
      desc: "Deep aviation domain knowledge combined with independent, unbiased perspective.",
      color: "text-[hsl(var(--brand-blue))]",
      bg: "bg-[hsl(var(--brand-blue))]/10"
    },
    {
      title: "Regulatory Mastery",
      desc: "Experienced team familiar with Mongolian and international regulations.",
      color: "text-[hsl(var(--brand-teal))]",
      bg: "bg-[hsl(var(--brand-teal))]/10"
    },
    {
      title: "Value-Driven Approach",
      desc: "Focus on practical, value-adding findings rather than just checklists.",
      color: "text-[hsl(var(--brand-orange))]",
      bg: "bg-[hsl(var(--brand-orange))]/10"
    },
    {
      title: "Comprehensive Support",
      desc: "Support for both routine assurance and complex, high-stakes audits.",
      color: "text-[hsl(var(--audit-navy))]",
      bg: "bg-[hsl(var(--audit-navy))]/10"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Audit & Assurance Services | Aeronautics LLC</title>
        <meta name="description" content="Specialized audit and assurance services including SMS, QA, CAMO, and regulatory compliance audits for the aviation industry." />
      </Helmet>

      <main className="bg-background min-h-screen flex flex-col">
        {/* Full-Viewport Hero Banner */}
        <section className="relative min-h-[50vh] md:min-h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://horizons-cdn.hostinger.com/47a882c9-2ca7-4b34-aae3-19f8817a45d6/59858bd63a82b494a35e621f2b1c9f58.jpg"
              alt="Aircraft on runway at sunset with golden sky"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark gradient overlay for text readability and premium feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90 mix-blend-multiply" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center flex-grow flex flex-col justify-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp} className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4 text-shadow-hero">
                Audit & Assurance Services
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed text-shadow-hero">
                Comprehensive compliance and quality assurance solutions for aviation operations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section - Redesigned for Compact Centered Layout */}
        <section className="py-10 md:py-12 bg-background relative z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center space-y-4 md:space-y-6"
            >
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                At Aeronautics, we deliver specialized audit and assurance services tailored to the complex regulatory and operational demands of the modern aviation industry.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Leveraging our team of experienced aeronautical engineers and certified auditors, we provide independent, unbiased evaluations. Our meticulous approach uncovers vulnerabilities, ensures strict compliance, and drives continuous improvement across your organization.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Services Section */}
        <section className="py-16 md:py-24 bg-[hsl(var(--audit-light-blue))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-underline-center">
                Key Services Include
              </h2>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {services.map((service, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <Card className={`h-full border-y-0 border-r-0 border-l-4 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group ${service.colorClass}`}>
                    <CardHeader className="pb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${service.iconBg}`}>
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl leading-snug text-foreground">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section - Redesigned for Compact Layout */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-underline-center">
                Why Choose Aeronautics for Audit & Assurance?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
              {whyChooseReasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-4 sm:p-5 card-premium border border-border/50 flex flex-col items-center text-center gap-3 group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${reason.bg} ${reason.color}`}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-bold text-foreground leading-tight">
                      {reason.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-snug">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default AuditAssurancePage;