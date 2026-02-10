export default function Footer() {
  return (
    <footer
      style={{
        padding: '32px 20px',
        borderTop: '1px solid #2a2a2a',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#666', fontSize: 'clamp(11px, 2.5vw, 13px)', width: '100%', flex: '1 1 auto' }}>
          © {new Date().getFullYear()} Yashwanth Krishna. Built with Next.js & Tailwind CSS.
        </p>
        <p style={{ color: '#666', fontSize: 'clamp(11px, 2.5vw, 13px)', width: '100%', flex: '1 1 auto' }}>
          Designed & developed with ☕ and curiosity.
        </p>
      </div>
    </footer>
  );
}