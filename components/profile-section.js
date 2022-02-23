
import { Card, Row, Col, Modal, Button, Form } from "react-bootstrap"
import styles from "./profile-section.module.css"
import { useUser } from '@auth0/nextjs-auth0';
import { useState } from "react";
import { setProfileData } from "../lib/user";

export default function ProfileSection({userName, profileData}){

    const { user } = useUser();

    var isUser = user && user.nickname == userName

    const [editProfile, setEditProfile] = useState(false);
    const [newProfileData, setNewProfileData] = useState({website: profileData.website, bio: profileData.bio})
    const [showFollows, setShowFollows] = useState(false);
    const [followsHeader, setFollowsHeader] = useState("");
    const [followsData, setFollowsData] = useState([]);

    //handlers for the edit profile modal
    const handleCloseEdit = () => setEditProfile(false);
    const handleShowEdit = () => setEditProfile(true);
    const handleSaveEdit = () => {
        profileData.website = newProfileData.website
        profileData.bio = newProfileData.bio
        setEditProfile(false)
        setProfileData(userName, profileData)
    }

    //handlers for the following/followers modal
    const handleCloseFollows = () => setShowFollows(false);
    const handleShowFollows = (header) =>{
        setFollowsHeader(header)
        setShowFollows(true)
        if(header === "Following"){
            setFollowsData(profileData.following)
        }else{
            setFollowsData(profileData.followers)
        }
    }

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
                            <Button onClick={() => handleShowEdit()}>edit profile</Button>

                        </Col>
                    }
                </Row>
            </Card.Header>
            <Card.Body>
                <div onClick={() => handleShowFollows("Followers")}>
                    followers: {profileData.followers.length}
                </div>
                <div onClick={() => handleShowFollows("Following")}>
                    following: {profileData.following.length}
                </div>
                <div>
                    website: <a target="_blank" href={profileData.website}>{profileData.website}</a>
                </div>
                <div>
                    bio: {profileData.bio}
                </div>
            </Card.Body>
        </Card>
        <Modal show={editProfile} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label >website</Form.Label>
                    <Form.Control 
                        defaultValue={profileData.website} 
                        onChange={(event) => {newProfileData.website = event.target.value}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label >bio</Form.Label>
                    <Form.Control 
                        onChange={(event) => {newProfileData.bio = event.target.value}} 
                        as="textarea" rows={3} defaultValue={profileData.bio}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => handleCloseEdit()}>
                Close
            </Button>
            <Button variant="primary" onClick={() => handleSaveEdit()}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showFollows} onHide={handleCloseFollows}>
            <Modal.Header closeButton>
                {followsHeader}
            </Modal.Header>
            <Modal.Body>
                {followsData.map((row, i) => (
                    <Card>
                        <Card.Header>{row.name}</Card.Header>
                        <Card.Body>{row.bio}</Card.Body>
                    </Card>
                ))}
            </Modal.Body>
        </Modal>
        </>
    )
}