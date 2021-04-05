

import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



    const RenderQuestion = ({question}) => {
        if (question == null) return ( <div></div> )
        return (
            <Card variant="outlined">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
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
        <li>
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
        <div >
            <h4>Answers</h4>
            <ul className="list-unstyled">
                {ans}
            </ul>
        </div>
        
    );
}

const QwAComponent = ({question, answers}) => {

    if(question == null) return ( <div></div> );

    return (
        <div >
            <RenderQuestion question={question} />
            <RenderAnswers answers={answers} />
        </div>
            
        
    );
}

export default QwAComponent
