import { QUESTIONS } from '../shared/questions';

//reducer that manages questions
export const Questions = (state = QUESTIONS, action) => {
    switch(action.type){
        case 'ADD_QUESTION_ASYNC':
            var question = action.payload;
            question.id = state.length;
            question.date = new Date().toISOString();
            return state.concat(question);
        default:
            return state;
    }
}