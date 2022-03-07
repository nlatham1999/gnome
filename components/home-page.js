import TopBar from "./top-bar";
import { getUserFeed } from "../lib/feed";
import { useUser } from '@auth0/nextjs-auth0';
import FeedRow from "./feed-row";
// import { GetServerSideProps } from 'next'
import { Card, Modal, Button } from "react-bootstrap";
import styles from "./home-page.module.css"
import { useEffect, useState } from "react";

export default function HomePage () {

    const { user, error, isLoading } = useUser();
   
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    const [showNewUser, setShowNewUser] = useState(false);
    const [userInformation, setUserInformation] = useState(false);

    useEffect(() => {
        GetUserInformation()
    }, []);

    let GetUserInformation = async () => {
        let res = await fetch("http://localhost:3000/api/users/"+user.email, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });
        let userInfo = await res.json();
        if(userInfo.data.length == 0){
            setShowNewUser(true)
        }else{
            setUserInformation(userInfo.data[0])
        }
    }

    const handleCloseNewUser = () => {
        setShowNewUser(false);
    }
    
    const handleAddNewUser = async () => {
        setShowNewUser(false);

        const newUserObject = {
            user: user.nickname,
            projects: [],
            contributions: [],
            email: user.email,
            bio: "",
            website: "",
            email: user.email,
            feed: [],
            following: [],
            followers: [],
        }

        let res = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          body: JSON.stringify(newUserObject),
        });
        res = await res.json();
        setUserInformation(newUserObject)
    }

    return (
        <div>
            <TopBar />
            {userInformation.feed && <Card className={styles.sectionCard}>
                <Card.Header>
                    Feed
                </Card.Header>
                <Card.Body className={styles.sectionCardBody}>
                    {userInformation.feed.map((row, i) => (
                    <FeedRow data={row}/>
                    ))}
                    {userInformation.feed.length == 0 && "no feed yet, follow more people"}
                </Card.Body>
            </Card>}

            <Modal  show={showNewUser}>
                <Modal.Header>
                </Modal.Header>
                <Modal.Body>
                        user: {user.email} not found. if you are a new user click on set up to finish setting up
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={() => handleAddNewUser()}>set up</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}