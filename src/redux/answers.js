import { ANSWERS } from '../shared/answers';
import * as ActionTypes from './ActionTypes';

//reducer that manages answers
export const Answers = (state = ANSWERS, action) => {
    switch(action.type){
        case ActionTypes.ADD_ANSWER:
            var answer = action.payload;
            answer.id = state.length;
            answer.date = new Date().toISOString();
            return state.concat(answer);
        default:
            return state;
    }
}