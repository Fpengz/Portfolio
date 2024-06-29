import ProjectCard from "@/app/components/project-cards";

export default function Page() {
    const projects = [
        {
            "name": "Caterprint",
            "url": "",
            "image": "",
            "tags": ["Web Development",]
        },
        
    ]
    return (
        <div>
            {projects.map(project => (
                <ProjectCard
                    name={project.name}
                    url={project.url} 
                    image={project.image}
                    tags={project.tags}
                />
            ))}
        </div>
    )
}