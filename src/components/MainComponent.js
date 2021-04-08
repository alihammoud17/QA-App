import HeaderComponent  from './HeaderComponent';
import QuestionsComponent from './QuestionsComponent';
import QwAComponent from './QwAComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addQuestion, addAnswer } from '../redux/ActionCreators';
import FooterComponent from './FooterComponent';

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        answers: state.answers
    }
}


const mapDispatchToProps = (dispatch) => ({
    addQuestion: (id, author, category, question) => {
        dispatch(
            addQuestion(id, author, category, question)
        );
    },
    addAnswer: (qId, author, answer) => {
        dispatch(
            addAnswer(qId, author, answer)
        );
    }
})

const MainComponent = (props) => {

    const QtWithId = ({match}) => {
        return(
            <QwAComponent
            question={props.questions.filter((question) => question.id === parseInt(match.params.qId, 10))[0] } 
            answers={props.answers.filter((ans) => ans.qId === parseInt(match.params.qId, 10)) }
            addAnswer={props.addAnswer}
            />
        );
    };

  
    return (
        <div>
            <HeaderComponent title={'Q&A'} description={'Once you start asking questions, innocence is gone'}/>
            
            <Switch>
                <Route exact path='/questions' component={() => <QuestionsComponent questions={props.questions} addQuestion={props.addQuestion}/>} />
                <Route path='/question/:qId' component={QtWithId} />
                <Redirect to='/questions' />
            </Switch>

            <FooterComponent />
            
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
