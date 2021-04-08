import * as ActionTypes from './ActionTypes';

export const addQuestion = (id, author, category, question) => ({
    type: ActionTypes.ADD_QUESTION,
    payload: {
        id: id,
        author: author,
        category: category,
        question: question
    }
});

export const addAnswer = (qId, author, answer) => ({
    type: ActionTypes.ADD_ANSWER,
    payload: {
        qId: qId,
        author: author,
        answer: answer
    }
});