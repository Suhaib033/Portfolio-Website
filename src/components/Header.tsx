
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className="w-full py-4 px-6 fixed top-0 z-50 bg-portfolio-dark/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Name */}
          <Link to="/" className="text-white text-2xl font-bold">
            Suhaib Ahmed
          </Link>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'text-portfolio-orange' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'text-portfolio-orange' : ''}`}>
              About
            </Link>
            <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'text-portfolio-orange' : ''}`}>
              Projects
            </Link>
            <Link to="/skills" className={`nav-link ${isActive('/skills') ? 'text-portfolio-orange' : ''}`}>
              Skills
            </Link>
            <Link to="/resume" className={`nav-link ${isActive('/resume') ? 'text-portfolio-orange' : ''}`}>
              Resume
            </Link>
          </nav>
          
          {/* Contact Button */}
          <Link to="/contact" className="contact-button">
            Contact
          </Link>
        </div>
      </header>
      
      {/* Orange glow under header */}
      <div className="header-glow"></div>
    </>
  );
};

export default Header;
