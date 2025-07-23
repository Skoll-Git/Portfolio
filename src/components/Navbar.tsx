import { ScreenShare } from 'lucide-react';

function navbar() {
  return (
    <div className='flex justify-center md:justify-between items-center p-4 bg-base-100'>
      <a href="#" className='flex items-center text-3xl font-bold md:text-xl'>
        <ScreenShare />
        SK<span className='text-accent'>DEV</span>
      </a>

      <ul className='hidden md:flex space-x-4'>
        <li>
            <a href="#" className='btn btn-sm btn-ghost'>Accueil</a>
        </li>
        <li>
            <a href="#" className='btn btn-sm btn-ghost'>à Propos</a>
        </li>
        <li>
            <a href="#" className='btn btn-sm btn-ghost'>Mes expériences</a>
        </li>
        <li>
            <a href="#" className='btn btn-sm btn-ghost'>Mes projets</a>
        </li>
      </ul>
    </div>
  )
}

export default navbar
