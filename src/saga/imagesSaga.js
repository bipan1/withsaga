import { IMAGES } from '../constants';
import { setImages, setError } from '../actions'
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { fetchImages } from '../api'

const getPage = state => state.page;

function* hadleImagesLoad() {
    try {
        const page = yield select(getPage)
        const images = yield call(fetchImages, page);
        yield put(setImages(images))
    } catch (error) {
        yield put(setError(error))
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, hadleImagesLoad)
}