import Title from './Title'
import img from '../assets/kevin.png'
import { CornerDownRight } from 'lucide-react';



const aboutSections = [
  {
    id:1,
    title: 'Qui suis-je ?',
    content: 'Je suis un développeur front-end passionné par la création d\'interfaces utilisateur attrayantes et fonctionnelles. J\'utilise principalement React et Tailwind CSS pour construire des applications web modernes.',
    icon: <CornerDownRight className= 'scale-150 text-accent' />
  },
  {
    id:2,
    title: 'Mes compétences',
    content: 'Je maîtrise les technologies front-end telles que HTML, CSS, JavaScript, ainsi que des bibliothèques comme React. Je suis également familier avec les outils de versioning comme Git.',
    icon: <CornerDownRight className= 'scale-150 text-accent' />
  },
  {
    id:3,
    title: 'Mon parcours',
    content: 'Après avoir obtenu mon diplôme en informatique, j\'ai commencé à travailler sur divers projets personnels et professionnels qui m\'ont permis de développer mes compétences en développement web.',
    icon: <CornerDownRight className= 'scale-150 text-accent' />
  },
];


function About() {
  return (
    <div className='bg-base-300 p-10 mb-10 md:mb-32'>
      <Title title='à Propos'/>
      <div className='md:h-200 flex justify-center items-center'>
        <div className='hidden md:block'>
            <img src={img} alt="Kévin Daubresse" className='w-96 object-cover shadow-xl rounded-xl' />
        </div>
        <div className='md:ml-4 space-y-4'>
            {aboutSections.map(section => (
                <div key={section.id} className='flex flex-col md:flex-row items-center md:items-start bg-base-100 md:w-120 p-5 rounded-lg shadow-md'>
                    <div className='mb-2 md:mb-0'>
                        {section.icon}
                    </div>
                    <div className='md:ml-4 text-center md:text-left'>
                        <h2 className='text-xl font-bold text-accent mb-1'> 
                            {section.title}
                        </h2>
                        <p className='text-sm text-gray-300'>
                            {section.content}
                        </p>
                    </div>
                </div>
            ))
            }
        </div>
      </div>
    </div>
  )
}

export default About