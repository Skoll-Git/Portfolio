import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Experiences from './components/Experiences'
import Project from './components/Project'
import Footer from './components/Footer'

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
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
