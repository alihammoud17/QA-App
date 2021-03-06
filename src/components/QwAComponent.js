
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoaderComponent from './LoaderComponent';
import AnswerFormComponent from './AnswerFormComponent';

const RenderQuestion = ({question}) => {
    if (question == null) return ( <div></div> )
    return (
        <Card variant="outlined">
                <CardContent>
                    <Typography gutterBottom variant="h3" component="h2">
                        {question.question}
                    </Typography>
                    <Typography variant="body1" color="textPrimary">
                        {question.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        asked by {question.author}, on {new Intl.DateTimeFormat('en-US',{
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(question.date))}
                    </Typography>
                </CardContent>

        </Card>
    );
    
}


const RenderAnswers = ({answers}) => {
    if(answers == null) { 
        return ( <div></div> );
    }
    const ans = answers.map(answer => { return(
        <li key={answer.id}>
        <Card variant="outlined">
        <CardContent>
            <Typography variant="body1" color="textPrimary">
                {answer.answer}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                answered by {answer.author}, on {new Intl.DateTimeFormat('en-US',{
                year: 'numeric',
                month: 'long',
                day: '2-digit'
                }).format(new Date(answer.date))}
            </Typography>
        </CardContent>
        </Card>
        </li>
    );
        
    
    });
    return (
        <div style={{marginTop: "10px"}}>
            <h4>Answers</h4>
            <ul className="list-unstyled">
                {ans}
            </ul>
        </div>
        
    );
}

const QwAComponent = (props) => {

    const [loading, setLoading] = useState(false)

    

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
             setLoading(false);},3000);
    }, [])

    if(props.question == null) return ( <div></div> );

    if (loading) return ( <LoaderComponent /> )

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/questions">Questions</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.question.category}/{props.question.id}
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <RenderQuestion question={props.question} />
            <RenderAnswers answers={props.answers} />
            <AnswerFormComponent qId={props.question.id} addAnswer={props.addAnswer} />
        </div>
            
        
    );
}

export default QwAComponent
