import { createStore, combineReducers } from 'redux';
import { Questions } from './questions';
import { Answers } from './answers';

export const configureStore = (enhancer) => {
    const store = createStore(
        combineReducers({
            questions: Questions,
            answers: Answers
        }),
        enhancer
    );
    return store;
}