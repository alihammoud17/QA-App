//we need a watcher that let the mw catches the dispatch

//delay works like set timeeout

import { takeEvery, put, delay } from 'redux-saga/effects'

function* addQuestionAsync() {
    yield delay(3000);
    yield put({
        type: 'ADD-QUESTION_ASYNC'
    })
}

//generator function
export function* watch() {
    // observe every single action
    yield takeEvery('ADD_QUESTION', addQuestionAsync)
}