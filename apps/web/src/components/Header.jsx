import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logo from '@/components/Logo.jsx';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const servicesLinks = [
    { label: 'Aviation Consulting', path: '/services/aviation-consulting' },
    { label: 'Ground Handling', path: '/services/ground-handling' },
    { label: 'Aircraft Dealership', path: '/services/aircraft-dealership' },
    { label: 'Audit & Assurance', path: '/services/audit-assurance' },
    { label: 'Aviation Training', path: '/services/aviation-training' },
    { label: 'Pickup Service', path: '/services/pick-up-service' },
  ];

  const mainLinks = [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className="sticky top-0 w-full z-50 bg-gradient-navy-teal shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group py-2">
            <Logo className="group-hover:scale-105 filter drop-shadow-md hover:drop-shadow-lg" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-semibold transition-all outline-none ${isActive('/services') ? 'text-secondary' : 'text-white/90 hover:text-white'}`}>
                Services <ChevronDown className="w-4 h-4 opacity-70" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 p-2 rounded-xl border-border shadow-xl bg-background">
                {servicesLinks.map((service) => (
                  <DropdownMenuItem key={service.path} asChild className="rounded-lg cursor-pointer focus:bg-muted focus:text-primary">
                    <Link to={service.path} className="w-full text-sm font-medium py-2 transition-colors">
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <div className="h-px bg-border my-1 mx-2"></div>
                <DropdownMenuItem asChild className="rounded-lg cursor-pointer focus:bg-primary focus:text-white">
                  <Link to="/services" className="w-full text-sm font-bold py-2 text-primary hover:text-white transition-colors">
                    View All Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {mainLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-semibold transition-all relative py-1 ${
                  isActive(link.path) 
                    ? 'text-secondary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:rounded-full' 
                    : 'text-white/90 hover:text-white hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-white/50 hover:after:rounded-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <div className="space-y-2">
              <div className="px-4 text-xs font-bold text-primary uppercase tracking-wider mb-2">Services</div>
              {servicesLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'bg-primary/10 text-primary border-l-4 border-primary' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-primary hover:bg-primary/90 mt-2 text-center"
              >
                View All Services
              </Link>
            </div>
            
            <div className="h-px bg-border my-2"></div>

            <div className="space-y-2">
              {mainLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.path) ? 'bg-muted text-primary border-l-4 border-primary' : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;