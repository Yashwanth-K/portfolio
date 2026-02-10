export default function Footer() {
  return (
    <footer
      style={{
        padding: '32px 24px',
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
          gap: '16px',
        }}
      >
        <p style={{ color: '#666', fontSize: '13px' }}>
          © {new Date().getFullYear()} Yashwanth Krishna. Built with Next.js & Tailwind CSS.
        </p>
        <p style={{ color: '#666', fontSize: '13px' }}>
          Designed & developed with ☕ and curiosity.
        </p>
      </div>
    </footer>
  );
}