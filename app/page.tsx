import { Inter } from 'next/font/google'
import Hero from './components/hero'
import Contact from './components/contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Hero />
    <Contact />
    </>
  )
}
