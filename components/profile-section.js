
import { Card, Row, Col } from "react-bootstrap"
import styles from "./profile-section.module.css"
import { useUser } from '@auth0/nextjs-auth0';

export default function ProfileSection({userName}){

    
    const { user } = useUser();

    var isUser = user && user.nickname == userName

    return (
        <Card>
            <Card.Header>
                <Row>
                    <Col>
                        {userName}
                    </Col>
                    {isUser && 
                        <Col className={styles.cardLink}>   
                            edit details
                        </Col>
                    }
                </Row>
            </Card.Header>
            <Card.Body>
                <div>
                    website: <a href="google.com">websitelink</a>
                </div>
                <div>
                    bio: this is the users bio
                </div>
            </Card.Body>
        </Card>
    )
}