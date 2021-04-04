import { Row, Col } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import  Button  from '@material-ui/core/Button'
import React from 'react';
import { Add, Search } from '@material-ui/icons';
import { Card, CardContent, CardActionArea } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const RenderQuestion = ({question}) => {
    return (
        <Card>
        <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {question.question}
                    </Typography>
                    <Typography variant="body1" color="textPrimary">
                        {question.category}
                    </Typography>
                    <Typography variant="body2" color="text-secondary">
                       asked by {question.author}, on {new Intl.DateTimeFormat('en-US',{
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(question.date))}
                    </Typography>
                </CardContent>
        </CardActionArea>
    </Card>
    );
    
}


const QuestionsComponent = ({questions}) => {

    const qst = questions.map((question) => {
        return (
            <div id="qt" key={question.id} className="col-12">
                <RenderQuestion question={question} />
            </div>
        );
    });

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
                    {qst}
                </Row>
            </LocalForm>
        </React.Fragment>
    )
}

export default QuestionsComponent
