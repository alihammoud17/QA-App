import HeaderComponent  from './HeaderComponent';
import QuestionsComponent from './QuestionsComponent';
import QwAComponent from './QwAComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        answers: state.answers
    }
}

const MainComponent = ({questions, answers}) => {

    const QtWithId = ({match}) => {
        return(
            <QwAComponent
            question={questions.filter((question) => question.id === parseInt(match.params.qId, 10))[0] } 
            answers={answers.filter((ans) => ans.qId === parseInt(match.params.qId, 10)) }
            />
        );
    };

    return (
        <div>
            <HeaderComponent title={'Q&A'} description={'Once you start asking questions, innocence is gone'}/>
            
            <Switch>
                <Route exact path='/questions' component={() => <QuestionsComponent/>} />
                <Route path='/question/:qId' component={QtWithId} />
                <Redirect to='/questions' />
            </Switch>
            
        </div>
    )
}

export default withRouter(connect(mapStateToProps)(MainComponent));
