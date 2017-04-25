import { UPDATE_DIRECTORY_LISTING, UPDATE_FILE_CONTENT } from '../actions';

const initialState = {
    directoryListing: [],
    currentPath: './',
    fileContent: '',
    jumpUpDisabled: true,
}

function listing(state=initialState, action) {
    switch(action.type){
        case UPDATE_DIRECTORY_LISTING:
            return Object.assign({}, state, {
                directoryListing: action.listing,
                currentPath: action.path,
            })
        case UPDATE_FILE_CONTENT:
            return Object.assign({}, state, {
                fileContent: action.fileContent,
            })
        default:
            return state;
    }
}

export default listing;