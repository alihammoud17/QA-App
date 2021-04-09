import { Row, Col } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import React from 'react';
import { Search } from '@material-ui/icons';
import PostQuestions from './PostQuestions';
import { useState, useEffect } from 'react';
// import { QUESTIONS } from '../shared/questions';
import Pagination from './Pagination';
import AskQsComponent from './AskQsComponent';
import Button from '@material-ui/core/Button';

const QuestionsComponent = (props) => {
    


    // const searchQuestions = (questions, query) => {
    //     if (!query) {
    //         return questions;
    //     }
    
    //     return questions.filter((question) => {
    //         const qtName = question.question.toLowerCase();
    //         return qtName.includes(query);
    //     });
    // };

    // const { search } = window.location;
    // const query = new URLSearchParams(search).get("search");

    // const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredQts, setFilteredQts] = useState('All');
    const [search, setSearch] = useState("");
    // const [currentPage, setCurrentPage] = useState(1);
    // const [questionsPerPage] = useState(5);
    const searchedQts = props.questions.filter(question => {
        return (
            question.question.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
    });

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setLoading(true);
        // setQuestions(QUESTIONS)
        // console.log(props.questions.length)
        setTimeout(() => {
             setLoading(false);},3000);
    }, [])

    const handleChange = (e) => {
        setFilteredQts(e.target.value);
    }
    
    const filterQuestions = filteredQts === 'All' ? props.questions : props.questions.filter(question => question.category === filteredQts);
    
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
                        <Control.text onChange={onChange} model=".search" id="search" name="search" 
                        placeholder="Type to Search.." className="form-control" />
                    </Col>
                    <Button type="submit" startIcon={<Search />} ></Button> 
                </Row>
                <Row className="form-group">
                    <Col xs={5}>
                        <Control.select value={filteredQts} onChange={handleChange}
                        model=".category" id="category" 
                        name="category" className="form-control">
                                    <option value="All">All</option>
                                    <option value="Science">Science</option>
                                    <option value="Nutrition">Nutrition</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Tech">Tech</option>
                                    <option value="History">History</option>
                        </Control.select>
                    </Col>
                </Row>
                <h4>Most frequent</h4>
                <PostQuestions questions={filterQuestions} loading={loading} />
            </LocalForm>
            
            {/* <Pagination questionsPerPage={questionsPerPage} totalQuestions={questions.length} paginate={paginate}/> */}
            
            
        </div>
    )
}

export default QuestionsComponent
