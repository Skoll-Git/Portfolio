import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Experiences from './components/Experiences'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/Contact'
import BackToTop from './components/BacktoTop'

function App() {

  return (
    <>
      <div>
        <div className='p-5 md:px-[10%]'>
          <Navbar />
          <Home />
        </div>

        <About />

        <div className='p-5 md:px-[10%]'>
          <Experiences />
          <Project />
          <Contact />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App
