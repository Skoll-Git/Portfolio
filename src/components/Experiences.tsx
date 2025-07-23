import Title from "./Title"
import imgHTML from "../assets/techno/html.png"
import imgCSS from "../assets/techno/css.png"
import imgJS from "../assets/techno/js.png"
import imgReact from "../assets/techno/react.png"
import imgNode from "../assets/techno/node-js.png"
import imgTAILWIND from "../assets/techno/tailwind.png"
import openclassrooms from "../assets/companies/openclassrooms.png"
import aldi from "../assets/companies/aldi.jpg"
import aden from "../assets/companies/aden.jpg"


const skills = [
    { id:1, name: "HTML", image: imgHTML },
    { id:2, name: "CSS", image: imgCSS },
    { id:3, name: "JavaScript", image: imgJS },
    { id:4, name: "React", image: imgReact },
    { id:5, name: "Node.js", image: imgNode },
    { id:6, name: "Tailwind CSS", image: imgTAILWIND },
    ];

const experiences = [
    { id: 1, title: "Formation ,Intégrateur Web",description: "Formation Développeur Web Front-End, axés sur HTML,CSS,JS dont REACT.", company: "OpenClassrooms", duration: "Sept 2024 - Juil 2025", image: openclassrooms },
    { id: 2, title: "Employé Polyvalent", description: "Employé de commerce et résponsable de régie.", company: "Ablis - Aldi", duration: "Fevr 2023 - Juil 2024", image: aldi },
    { id: 3, title: "Formation Technicien Supérieur Systèmes et Réseaux", description: "Formation Technicien Préparation Systèmes et mise en place Réseaux pour differentes structures.", company: "Aden Formations", duration: "Sept 2021 - Juin 2022", image: aden},
];


function Experiences() {
  return (
    <div id="Experience" className="container mx-auto p-4">
      <Title title="Expériences" />
      <div className="flex flex-col-reverse md:flex-row mt-20 justify-center items-center">
        <div className="flex flex-wrap justify-center items-center gap-4 md:w-1/3 mt-4 md:mt-0">
            {skills.map((skill) => (
                <div key={skill.id} className="flex justify-center items-center flex-col" >
                    <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                    <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full " />
                    </div>
                    <span className="mt-2 text-sm">{skill.name}</span>
                </div>
                )
            )}
        </div>

        <div className="md:ml-4 flex flex-col space-y-4">
            {experiences.map((experience) => (
                <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg" >
                    <div className="flex items-center">
                            <img 
                            src={experience.image}
                            alt={experience.company} 
                            className="object-cover h-10 w-10" />
                        <div className="ml-4">
                            <h1 className="text-xl text-accent font-bold">
                                {experience.title} , {experience.company} <br />
                            </h1>
                            <span className="text-sm">{experience.duration}</span>
                        </div>
                    </div>
                    <ul className="list-disc pl-5 mt-2">
                        <li className="mt-2 text-sm text-gray-400">
                            {experience.description}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences
