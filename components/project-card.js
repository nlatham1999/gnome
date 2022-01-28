
export default function ProjectCard ({project}) {

    return (
        <div>
            <a href={"/"+project.owner+"/"+project.name}>{project.name}</a>
            <a href={"/"+project.owner}>{project.owner}</a>
            <div>{project.description}</div>
        </div>
    )
}