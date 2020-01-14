import {
    IMAGES
} from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD
})

const setImages = (images) => ({
    type: IMAGES.LOAD_SUCESS,
    payload: images
})

const setError = (error) => ({
    type: IMAGES.LOAD_FAILURE,
    payload: error
})

export {
    loadImages,
    setImages,
    setError
};
