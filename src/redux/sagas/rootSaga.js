import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_IMAGES_SUCCESS, GET_IMAGES_FETCH } from "../constants"

function imagesFetch() {
    return axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.data.slice(0, 6))
}

function* workGetImagesFetch() {
    const images = yield call(imagesFetch)
    yield put({ type: GET_IMAGES_SUCCESS, images })
}

function* fetchSaga() {
    yield takeEvery(GET_IMAGES_FETCH, workGetImagesFetch)
}

export default fetchSaga