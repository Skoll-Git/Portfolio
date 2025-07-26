import { Mail } from 'lucide-react'
import img from '../assets/kevin-sbg.png'


function Home() {
  return (
    <div id='Home' className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
        <div className='flex flex-col'>
            <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">Bonjour, <br />Je suis <span className="text-accent">Kévin "Skoll" Daubresse</span></h1>
            <p className="my-4 text-md text-center md:text-left">Je suis un devoloppeur FRONT-END Junior,<br /> utilisant React,TailWindCSS.<br />Contactez-moi si vous avez besoin de mes services.</p>
            <a href="#Contact" className='btn btn-accent md:w-fit'>
                <Mail className='w-5 h-5' />
                Contactez-moi.
            </a>
        </div>
        <div className='w-30% md:ml-50'>
            <img src={img} alt="Kévin Daubresse" className='w-80 h-80 object-cover border-8 border-accent shadow-xl' style={{
              borderRadius: "77% 23% 20% 80% / 59% 33% 67% 41% "
            }} />
        </div>
    </div>
  )
}

export default Home
