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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #2a2a2a' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '14px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          YK.
        </a>

        {/* Desktop Links */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
            }}
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
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.target.style.color = '#a0a0a0')}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Yashwanth_Krishna_Resume.pdf"
              target="_blank"
              style={{
                fontSize: '14px',
                padding: '8px 20px',
                background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                borderRadius: '8px',
                color: '#ffffff',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Resume
            </a>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            style={{
              color: '#ffffff',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && isMobile && (
        <div
          style={{
            backgroundColor: '#111111',
            borderTop: '1px solid #2a2a2a',
            padding: '12px 20px 16px 20px',
            maxHeight: 'calc(100vh - 60px)',
            overflowY: 'auto',
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
                fontSize: '15px',
                borderBottom: '1px solid #1a1a1a',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Yashwanth_Krishna_Resume.pdf"
            target="_blank"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'block',
              marginTop: '12px',
              padding: '10px 0',
              textAlign: 'center',
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
              borderRadius: '8px',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}