
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function HomePage() {
  return (
    <div  className="min-h-screen relative ">
      
      <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
         <Footer />
      
      
    </div>
  )
}