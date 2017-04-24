export const LIST_DIRECTORY = 'LIST_DIRECTORY';
export const UPDATE_DIRECTORY_LISTING = 'UPDATE_DIRECTORY_LISTING';

const BACKEND_ADDR = 'http://localhost:4000'

export function listDirectory(path) {
    return dispatch => {
        return fetch(BACKEND_ADDR + '/directorylist?path=' + path)
            .then(response => response.json())
            .then(json => dispatch(updateDirectoryListing(json, path)));
    }
}

export function updateDirectoryListing(listing, path) {
    return {
        type: UPDATE_DIRECTORY_LISTING,
        listing,
        path,
    }
}