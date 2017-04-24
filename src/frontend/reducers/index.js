import { UPDATE_DIRECTORY_LISTING } from '../actions';

const initialState = {
    directoryListing: [],
    currentPath: './',
}

function listing(state=initialState, action) {
    switch(action.type){
        case UPDATE_DIRECTORY_LISTING:
            return Object.assign({}, state, {
                directoryListing: action.listing,
                currentPath: action.path,
            })
        default:
            return state;
    }
}

export default listing;