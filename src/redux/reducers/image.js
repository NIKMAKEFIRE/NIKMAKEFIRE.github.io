import { GET_IMAGES_SUCCESS } from "../constants";

const getImages = (state = { images: [] }, action) => {
    switch (action.type) {
        case GET_IMAGES_SUCCESS: return { ...state, images: action.images }

        default: return state
    }
}

export default getImages