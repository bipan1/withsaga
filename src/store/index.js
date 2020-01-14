import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import imageReducer from '../reducers/imageReducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(imageReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
