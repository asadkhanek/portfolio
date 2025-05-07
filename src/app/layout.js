import '../styles/globals.css';

export const metadata = {
  title: 'Portfolio | muhammad Asad khan',
  description: 'Professional portfolio website showcasing my projects, skills, and experience',
  keywords: ['portfolio', 'web development', 'frontend', 'developer'],
  openGraph: {
    title: 'muhammad Asad khan - Portfolio',
    description: 'Professional portfolio website showcasing my projects, skills, and experience',
    url: 'https://yourwebsite.com',
    siteName: 'muhammad Asad khan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}