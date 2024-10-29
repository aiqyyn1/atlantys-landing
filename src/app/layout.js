import './globals.css';
import Header from '@/shared/header';
import Footer from '@/shared/footer';
import { Wix_Madefor_Display } from 'next/font/google';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// Font setup
const wix_madefor_display = Wix_Madefor_Display({
  subsets: ['latin'],
  variable: '--font-wix',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${wix_madefor_display.variable} font-wix`}>
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
