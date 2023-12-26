import { Lato, Open_Sans } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';
import { Providers } from './providers';

const lato = Lato({ subsets: ['latin'], weight: ['400','700','900'],
variable: '--font-lato' })
const openSans = Open_Sans({ subsets: ['latin'],
variable: '--font-open-sans' })

export const metadata = {
  title: 'Headless Blog',
  description: 'A headless CMS Blog',
}

const RootLayout = ({ 
  /**
   * Layouts must accept a children prop.
   * This will be populated with nested layouts or pages
   */
  children }) => (
    <html lang="en" className='light light:text-black  bg-background'>
      <body className={`${openSans.className} ${openSans.variable} ${lato.variable} flex h-screen flex-col md:overflow-scroll`}>
        <Providers>
          <Header />
          <main className='flex-grow md:overflow-y-auto'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
)

export default RootLayout;