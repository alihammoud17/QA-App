import { QUESTIONS } from '../shared/questions';
import { ANSWERS } from '../shared/answers';

export const initialState = {
    questions: QUESTIONS,
    answers: ANSWERS
}

export const Reducer = (state = initialState, action) => {
    return state;
}