import { Row, Col } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import React from 'react';
import { Search } from '@material-ui/icons';
import PostQuestions from './PostQuestions';
import { useState, useEffect } from 'react';
// import { QUESTIONS } from '../shared/questions';
import Pagination from './Pagination';
import AskQsComponent from './AskQsComponent';

const QuestionsComponent = (props) => {

    // const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [questionsPerPage] = useState(5);
    

    useEffect(() => {
        setLoading(true);
        // setQuestions(QUESTIONS)
        // console.log(props.questions.length)
        setTimeout(() => {
             setLoading(false);},3000);
    }, [])

    

    // const indexOfLastQuestion = currentPage * questionsPerPage;
    // const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    // const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    // const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <AskQsComponent id={props.id} addQuestion={props.addQuestion}/>
            <LocalForm style={{marginLeft: "10px", marginRight: "10px"}}>
                <h3>Questions</h3>
                <Row className="form-group">
                    <Col xs={9}>
                        <Control.text model=".search" id="search" name="search" 
                        placeholder="Type to Search.." className="form-control" />
                    </Col><Search /> 
                </Row>
                <Row className="form-group">
                    <Col xs={3}>
                        <Control.select model=".category" id="category" 
                        name="category" className="form-control">
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
                <PostQuestions questions={props.questions} loading={loading} />
            </LocalForm>
            
            {/* <Pagination questionsPerPage={questionsPerPage} totalQuestions={questions.length} paginate={paginate}/> */}
            
            
        </div>
    )
}

export default QuestionsComponent
