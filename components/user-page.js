
import { Card, Row, Col, Container } from "react-bootstrap";
import styles from "./user-page.module.css"
import { useUser } from '@auth0/nextjs-auth0';
import ProfileSection from "./profile-section";
import FeaturedProjects from "./featured-projects";

export default function UserPage({userName, data, profileData}){

    const { user, error, isLoading } = useUser();
   
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    var isUser = user && user.nickname == userName
    

    return (
        <>
            <Row className={styles.row}>
                <Col className={styles.profileCard}>
                    <ProfileSection userName={userName} profileData={profileData} />
                </Col>
                <Col className={styles.secondCol}>
                    <FeaturedProjects userName={userName} data={data} />
                </Col>
            </Row>
        
        
        </>
    )
}