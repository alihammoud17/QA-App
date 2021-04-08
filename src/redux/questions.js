import { QUESTIONS } from '../shared/questions';
import * as ActionTypes from './ActionTypes';

//reducer that manages questions
export const Questions = (state = QUESTIONS, action) => {
    switch(action.type){
        case ActionTypes.ADD_QUESTION:
            var question = action.payload;
            question.id = state.length;
            question.date = new Date().toISOString();
            return state.concat(question);
        default:
            return state;
    }
}