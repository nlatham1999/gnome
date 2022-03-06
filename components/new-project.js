import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addNewProject } from "../lib/project";
import { useUser } from "@auth0/nextjs-auth0";

export default function NewProject(){
    

    const { user, error, isLoading } = useUser();
   
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    const [showNewProject, setShowNewProject] = useState(false);

    const [newProject, setNewProject] = useState({projectName: "", projectDescription: ""})

    const handleShowNewProject = () => {
        setShowNewProject(true);
    }

    const handleCloseNewProject = () => {
        setShowNewProject(false);
    }

    const handleSaveNewProject = () => {
        setShowNewProject(false);
        // addNewProject(newProject);

    }

    let submitForm = async (e) => {
        e.preventDefault();
        let res = await fetch("http://localhost:3000/api/projects", {
          method: "POST",
          body: JSON.stringify({
            user: user.nickname,
            name: newProject.projectName,
            description: newProject.projectDescription,
          }),
        });
        res = await res.json();
        console.log(res)
      };

    return (
        <div>
            <Button onClick={() => handleShowNewProject()}>create new project</Button>

            <Modal  show={showNewProject} onHide={handleCloseNewProject}>
                <Form onSubmit={submitForm}>
                <Modal.Header closeButton>
                    new project
                </Modal.Header>
                <Modal.Body>
                        <Form.Group>
                            <Form.Label >name</Form.Label>
                            <Form.Control 
                                onChange={(event) => {newProject.projectName = event.target.value}}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label >description</Form.Label>
                            <Form.Control 
                                onChange={(event) => {newProject.projectDescription = event.target.value}} 
                                as="textarea" rows={3} 
                            />
                        </Form.Group>  
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleCloseNewProject()}>cancel</Button>
                    <Button type="submit" onClick={() => handleSaveNewProject()}>save</Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </div>

        
    );
}

