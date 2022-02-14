import TopBar from "./top-bar";
import { getUserFeed } from "../lib/feed";
import { useUser } from '@auth0/nextjs-auth0';
import FeedRow from "./feed-row";
import { GetServerSideProps } from 'next'

import { Card } from "react-bootstrap";

import styles from "./home-page.module.css"

export default function HomePage () {

    const { user, error, isLoading } = useUser();

    var data = getUserFeed(user)

   
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    console.log("TEST2", data)

    return (
        <div>
            <TopBar />
            <Card className={styles.sectionCard}>
                <Card.Header>
                    Feed
                </Card.Header>
                <Card.Body className={styles.sectionCardBody}>
                    {data.map((row, i) => (
                    <FeedRow data={row}/>
                    ))}
                </Card.Body>
            </Card>
        </div>
    )
}