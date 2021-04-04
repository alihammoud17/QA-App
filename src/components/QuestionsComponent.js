import { Row, Col, Label } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import  Button  from '@material-ui/core/Button'
import React from 'react';
import { Add, Search } from '@material-ui/icons';

const QuestionsComponent = () => {
    return (
        <React.Fragment>
            <Row className="form-group">
                <Col>
                    <Button fullWidth startIcon={<Add />} variant="contained" size="large" color="primary">Ask a Question</Button>
                </Col>
            </Row>
            
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
                <Row className="form-group">
                    
                </Row>
            </LocalForm>
        </React.Fragment>
    )
}

export default QuestionsComponent
