import React, { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About Us', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact Us', to: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 lg:justify-around">
        {/* Logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={closeMenu}
          className="cursor-pointer"
        >
          <img src={logo} alt="RADHIKA Logo" className="h-16 md:h-20" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-semibold text-sm">
          {navLinks.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
              className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:text-yellow-600 text-[15px]"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-black">
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-6 px-6 space-y-4">
          {navLinks.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className="block text-black font-semibold hover:text-yellow-600"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
