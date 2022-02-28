import { Card } from "react-bootstrap";

export default function UserProjects({projects}) {

    return (
        <div>

            <Card>
                <Card.Header>
                    projects
                </Card.Header>
                <Card.Body>
                    {projects.map((project, i) => (
                        <Card>
                        <Card.Header>
                            <a href={"/"+project.username+"/"+project.name}>{project.name}</a>
                        </Card.Header>
                        <Card.Body>
                            <div>{project.description}</div>
                        </Card.Body>
                        </Card>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
}