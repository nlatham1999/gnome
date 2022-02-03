import ProjectCard from "../components/project-card"
import TopBar from "../components/top-bar"


export default function Community(){
    return (
        <div>
            <TopBar />
            community page
            <ProjectCard project={{name: "project 1", owner: "davesmith87", description: "this is a project blah blah blah"}}/>
            <ProjectCard project={{name: "project 2", owner: "nlatham69", description: "this is a project blah blah blah"}}/>
        </div>
    )
}