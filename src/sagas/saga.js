//we need a watcher that let the mw catches the dispatch

//delay works like set timeeout

import { takeEvery, put, delay, call } from 'redux-saga/effects';

function* addQuestionAsync() {
    
    yield delay(3000);
    yield put({
        type: 'ADD_QUESTION_ASYNC'
    })
}

// function* addAnswerAsync() {
//     yield delay(3000);
//     yield put({
//         type: 'ADD_ANSWER_ASYNC'
//     })
// }

//generator function
export function* watch() {
    // observe every single action
    yield takeEvery('ADD_QUESTION', addQuestionAsync);
    // yield takeLatest('ADD_ANSWER', addAnswerAsync);
}