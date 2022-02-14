
import { Card, Row, Col } from "react-bootstrap";
import { useUser } from '@auth0/nextjs-auth0';
import styles from "./featured-projects.module.css"

export default function FeaturedProjects({userName, data}){
    
    const { user } = useUser();

    var isUser = user && user.nickname == userName

    return (
        <Card>
            <Card.Header>
                <Row>
                <Col>
                    Featured Projects 
                </Col>
                {isUser &&
                    <Col className={styles.cardLink}>
                        <a>edit list</a>
                    </Col>
                }
                <Col className={styles.cardLink}>
                    <a href={"/" + userName + "/projects"}  >all projects</a>
                </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                {data.map((project, i) => (
                    <Card>
                    <Card.Header>
                        <a href={"/"+userName+"/"+project.name}>{project.name}</a>
                    </Card.Header>
                    <Card.Body>
                        <div>{project.description}</div>
                    </Card.Body>
                    </Card>
                ))}
            </Card.Body>
        </Card>
    )
}