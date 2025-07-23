import Title from "./Title"
import { Github } from "lucide-react";
// Import images for projects

import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
// Import more images as needed


const projects = [
    {
        id: 1,
        title: "Architecte d'intérieur - Sophie Bluel",
        description: "Développeur front-end chez ArchiWebos, j’ai conçu l’interface du portfolio de Sophie Bluel, alliant design, interactivité et gestion de contenu.",
        technologies: ["HTML", "CSS", "JavaScript"],
        repoLink: "https://github.com/Skoll-Git/Projet-6---Sophie-Bluel-JS",
        image: img1,
    },
    {
        id: 2,
        title: "Kasa",
        description: "Recruté par Kasa en freelance, j’ai développé une application web de location immobilière en React, dans le cadre de la refonte initiée par la CTO.",
        technologies: ["React", "JavaScript", "CSS"],
        repoLink: "https://github.com/Skoll-Git/Projet-7---Kasa",
        image: img2,
        
    },
    {        id: 3,
        title: "Argent Bank",
        description: "Argent Bank est une application web React utilisant le gestionnaire de State Redux avec un système d'authentification des utilisateurs.",
        technologies: ["React", "Redux", "MongoDB"],
        repoLink: "https://github.com/Skoll-Git/Projet-10-ArgentBank-Frontend",
        image: img3,}
    // Add more projects as needed
];

function Project() {
  return (
    <div id="Project" className="mt-30 bg-gray-700 p-5 rounded-xl">
      <Title title="Mes Projets" />
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
            <img 
            src={project.image} 
            alt={project.title} 
            className="w-full rounded-xl h-56 object-cover"
            />
            <div>
                <h1 className="my-2 font-bold">
                    {project.title}
                </h1>
                <p className="text-sm text-gray-400">
                    {project.description}
                </p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
                {project.technologies.map((tech) => (
                    <span key={tech} className="badge badge-accent badge-sm m-1">
                        {tech}
                    </span>
                ))}
            </div>
            <div className="flex">
                <a className="btn btn-neutral w-1/2" href={project.repoLink}>
                    Lien
                    <Github className="w-4" />
                </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
