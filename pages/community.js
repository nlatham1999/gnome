import Layout from "../components/layout"
import ProjectCard from "../components/project-card"


export default function Community(){
    return (
        <Layout>
            <div>
                community page
                <ProjectCard project={{name: "project 1", owner: "davesmith87", description: "this is a project blah blah blah"}}/>
                <ProjectCard project={{name: "project 2", owner: "nlatham69", description: "this is a project blah blah blah"}}/>
            </div>
        </Layout>
    )
}