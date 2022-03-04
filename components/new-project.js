import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addNewProject } from "../lib/project";

export default function NewProject(){

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
        addNewProject(newProject);
    }

    return (
        <div>
            <Button onClick={() => handleShowNewProject()}>create new project</Button>

            <Modal show={showNewProject} onHide={handleCloseNewProject}>
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
                            onChange={(event) => {newProject.description = event.target.value}} 
                            as="textarea" rows={3} 
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => handleCloseNewProject()}>cancel</Button>
                    <Button onClick={() => handleSaveNewProject()}>save</Button>
                </Modal.Footer>
            </Modal>
        </div>

        
    );
}

