import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk, Orbitron } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AIAssistant } from '@/components/ai-assistant/AIAssistant';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Moe Kyaw Aung | Senior Android Developer',
  description: 'Passionate Senior Android Developer specializing in Kotlin, Jetpack Compose, and Clean Architecture. Building high-performance mobile applications.',
  keywords: ['Android Developer', 'Kotlin', 'Jetpack Compose', 'Mobile Developer', 'Firebase', 'Clean Architecture'],
  authors: [{ name: 'Moe Kyaw Aung' }],
  openGraph: {
    title: 'Moe Kyaw Aung | Senior Android Developer',
    description: 'Passionate Senior Android Developer specializing in Kotlin, Jetpack Compose, and Clean Architecture.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} ${orbitron.variable} font-sans bg-blueprint-bg text-blueprint-text antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
