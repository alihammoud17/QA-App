import { LocalForm, Control } from 'react-redux-form'; 
import { useState } from 'react';
import { Add } from '@material-ui/icons';
import  Button  from '@material-ui/core/Button';
import { Row, Col, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import React from 'react';



const AskQsComponent = (props) => {
    const [value, setValue] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleQuestion = values => {
        toggleModal();
        props.addQuestion(props.id, values.author, values.category, values.question);
    }

    return (
        <div style={{marginBottom: "20px"}}>
            <Button onClick={toggleModal} fullWidth startIcon={<Add />} variant="contained" size="large" color="primary">Ask a Question</Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    Ask a Question
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleQuestion(values)}>
                        <Row className="form-group">
                            <Label htmlFor="author" md={5}>Your Name</Label>
                            <Col md={6}>
                                <Control.text model=".author" id="author"
                                name="author" className="form-control" placeholder="Who are you?" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="category" md={5}>Question's Category</Label>
                            <Col xs={5}>
                                <Control.select value={value} onChange={handleChange} model=".category" id="category"
                                name="category" className="form-control">
                                    <option></option>
                                    <option value="Science">Science</option>
                                    <option value="Nutrition">Nutrition</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Tech">Tech</option>
                                    <option value="History">History</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="questiom" md={12}>Your Question</Label>
                            <Col md={12}>
                                <Control.text model=".question" id="question"
                                name="question" className="form-control" placeholder="What do you want to know?"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 10}}>
                                <Button variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            
        </div>
        
    )
}


export default AskQsComponent
