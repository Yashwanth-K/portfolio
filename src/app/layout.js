import './globals.css';

export const metadata = {
  title: 'Yashwanth Krishna | Backend Software Engineer',
  description:
    'Backend Software Engineer with 4+ years of experience building scalable distributed systems.',
  keywords:
    'Software Engineer, Backend Developer, Java, Spring Boot, Microservices, Distributed Systems',
  authors: [{ name: 'Yashwanth Krishna' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
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