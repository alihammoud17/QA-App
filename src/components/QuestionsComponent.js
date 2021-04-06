import { Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import  Button  from '@material-ui/core/Button'
import React from 'react';
import { Add, Search } from '@material-ui/icons';
import PostQuestions from './PostQuestions';
import { useState, useEffect } from 'react';
import { QUESTIONS } from '../shared/questions';
import Pagination from './Pagination';
import AskQsComponent from './AskQsComponent'

const QuestionsComponent = () => {

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [questionsPerPage] = useState(5);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setLoading(true);
        setQuestions(QUESTIONS)
        console.log(questions.length)
        setTimeout(() => {
             setLoading(false);},3000);
    }, [])

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <Row className="form-group">
                <Col>
                    <Button onClick={toggleModal} fullWidth startIcon={<Add />} variant="contained" size="large" color="primary">Ask a Question</Button>
                </Col>
            </Row>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    Ask a Question
                </ModalHeader>
                <ModalBody>
                    <AskQsComponent />
                </ModalBody>
            </Modal>
            <LocalForm>
                <h3>Questions</h3>
                <Row className="form-group">
                    <Col xs={9}>
                        <Control.text model=".search" id="search" name="search" 
                        placeholder="Type to Search.." className="form-control" />
                    </Col><Search /> 
                </Row>
                <Row className="form-group">
                    <Col xs={3}>
                        <Control.select model=".cat" id="cat" 
                        name="cat" className="form-control">
                            <option>All</option>
                            <option>Science</option>
                            <option>Nutrition</option>
                            <option>Sport</option>
                            <option>Tech</option>
                            <option>History</option>
                        </Control.select>
                    </Col>
                </Row>
                <h4>Most frequent</h4>
                <PostQuestions questions={currentQuestions} loading={loading} />
            </LocalForm>
            
            <Pagination questionsPerPage={questionsPerPage} totalQuestions={questions.length} paginate={paginate}/>
            
            
        </div>
    )
}

export default QuestionsComponent
