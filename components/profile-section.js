
import { Card, Row, Col, Modal, Button, Form } from "react-bootstrap"
import styles from "./profile-section.module.css"
import { useUser } from '@auth0/nextjs-auth0';
import { useState } from "react";

export default function ProfileSection({userName, profileData}){

    const { user } = useUser();

    var isUser = user && user.nickname == userName

    const [editProfile, setEditProfile] = useState(false);

    const handleClose = () => setEditProfile(false);
    const handleShow = () => setEditProfile(true);

    return (
        <>
        <Card>
            <Card.Header>
                <Row>
                    <Col>
                        {userName}
                    </Col>
                    {isUser && 
                        <Col className={styles.cardLink}>   
                            <Button onClick={() => handleShow()}>edit profile</Button>

                        </Col>
                    }
                </Row>
            </Card.Header>
            <Card.Body>
                <div>
                    followers: {profileData.followers.length}
                </div>
                <div>
                    following: {profileData.following.length}
                </div>
                <div>
                    website: <a href={profileData.website}>{profileData.website}</a>
                </div>
                <div>
                    bio: {profileData.bio}
                </div>
            </Card.Body>
        </Card>
        <Modal show={editProfile} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label >website</Form.Label>
                    <Form.Control placeholder={profileData.website}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label >bio</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder={profileData.bio}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

        </>
    )
}