import './globals.css';

export const metadata = {
  title: 'Yashwanth Krishna | Backend Software Engineer',
  description:
    'Backend Software Engineer with 4+ years of experience building scalable distributed systems. Specialized in Java, Spring Boot, Microservices, and Cloud Architecture.',
  keywords:
    'Software Engineer, Backend Developer, Java, Spring Boot, Microservices, Distributed Systems, System Design',
  authors: [{ name: 'Yashwanth Krishna' }],
  openGraph: {
    title: 'Yashwanth Krishna | Backend Software Engineer',
    description:
      'Building scalable distributed systems that work under pressure.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}