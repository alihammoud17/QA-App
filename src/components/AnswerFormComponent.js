import React from 'react';
import { Control, LocalForm } from 'react-redux-form';
import { Row, Col, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import  Button  from '@material-ui/core/Button';
import { useState } from 'react';
import { Add } from '@material-ui/icons';

const AnswerFormComponent = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAnswer = values => {
        props.addAnswer(props.qId, values.author, values.answer);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <React.Fragment>
            <Button onClick={toggleModal} startIcon={<Add />} variant="contained" size="large" color="primary">Add an Answer</Button>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    Answer the question
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={values => handleAnswer(values)}>
                        <Row className="form-group">
                            <Label htmlFor="author" md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".author" id="author"
                                name="author" className="form-control"
                                placeholder="Your Name" 
                                    />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="answer" md={12}>Your Answer</Label>
                            <Col md={12}>
                                <Control.textarea model=".answer" id="answer"
                                name="answer" className="form-control" rows="12"/>
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
            
        </React.Fragment>
    )
}

export default AnswerFormComponent
