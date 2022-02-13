
import styles from "./feed-row.module.css"

import { Card } from "react-bootstrap"

export default function FeedRow({data, userName}){

    return (
        <Card className={styles.rowCard}>
            <Card.Header>
                <p>
                <a href={"/"+data.who}>{data.who}</a>
                {" " + data.action + " "}
                <a href={getCreatorFromAction() + "/" + data.what}>{getCreatorFromAction() + "/" + data.what }</a>{" "}
                {data.second_what != "" && 
                <>from <a href={data.second_who + "/" + data.second_what}>{data.second_who + "/" + data.second_what}</a></>}
                </p>
            </Card.Header>
            <Card.Body>
                project view
            </Card.Body>
        </Card>

              
    )

    function getCreatorFromAction(){
        if(data.action === "liked"){
            return data.second_who
        }else if(data.action === "replicated"){
            return data.who
        }else if(data.action === "created"){
            return data.who
        }
    }

    
}