import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Header />
      <Education />
      <Experience />
      <Contact />
    </main>
  )
}