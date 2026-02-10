'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#techstack' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]'
          : 'bg-transparent'
      }`}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a
          href="#"
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
          }}
        >
          YK.
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="hidden lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '14px',
                color: '#a0a0a0',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            style={{
              fontSize: '14px',
              padding: '8px 20px',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              borderRadius: '8px',
              color: '#ffffff',
              textDecoration: 'none',
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden"
          style={{
            backgroundColor: '#111111',
            borderTop: '1px solid #2a2a2a',
            padding: '16px 24px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                color: '#a0a0a0',
                textDecoration: 'none',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}