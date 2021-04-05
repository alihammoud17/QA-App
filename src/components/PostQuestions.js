import React from 'react'
import Loader from 'react-loader-spinner';
import { Card, CardContent, CardActionArea } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Row } from 'reactstrap';

const RenderQuestion = ({question}) => {
    return (
        <Card variant="outlined">
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

const PostQuestions = ({questions, loading}) => {

    const qst = questions.map((question) => {
        return (
            <div id="qt" key={question.id} className="col-12">
                <RenderQuestion question={question} />
            </div>
        );
    });

    if (loading) return <Loader type="Circles" color="#3f51b5" height={120} width={120}/>;

    return (
        <Row className="form-group">
            {qst}
        </Row>
    )
}

export default PostQuestions
