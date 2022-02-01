
export default function ProjectCard ({project}) {

    return (
        <div class="card">
            <div class="card-header">
                <a href={"/"+project.owner+"/"+project.name}>{project.name}</a>
            </div>
            <div class="card-body">
                <div>{project.description}</div>
            </div>
            <div class="card-footer">
                <a href={"/"+project.owner}>{project.owner}</a>
            </div>
        </div>
    )
}