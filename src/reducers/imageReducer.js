import {
    IMAGES
} from '../constants';


const initialState = {
    loading: false,
    imageList: [],
    error: '',
    page: 1
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return {
                ...state,
                loading: true
            }

        case IMAGES.LOAD_SUCESS:
            return {
                ...state,
                loading: false,
                imageList: [...action.payload],
                error: '',
                page: state.page + 1
            }

        case IMAGES.LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                imageList: [],
                error: action.payload
            }

        default: return state
    }
}

export default imageReducer;