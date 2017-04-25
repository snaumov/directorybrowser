export const LIST_DIRECTORY = 'LIST_DIRECTORY';
export const UPDATE_DIRECTORY_LISTING = 'UPDATE_DIRECTORY_LISTING';
export const UPDATE_FILE_CONTENT = 'UPDATE_FILE_CONTENT';
export const JUMP_UP = 'JUMP_UP'

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

export function browseFile(path) {
    return dispatch => {
        return fetch(BACKEND_ADDR + '/openfile?path=' + path)
            .then(response => {
                var reader = response.body.getReader();
                var total = 0;
                var output = '';
                const decoder = new TextDecoder();
                return new Promise((res, rej) => {
                    function pump() {
                        reader.read().then(({ done, value }) => {
                            if (done) {
                                res(output);
                                return
                            }
                            output += decoder.decode(value);
                            total += value.byteLength
                            console.log(`received ${value.byteLength} bytes (${total} bytes in total)`)
                            pump()
                        }).catch(rej);
                    }
                    pump();
                })
                
            })
            .then(value => dispatch(updateFileContent(value)));
    }
}

export function updateFileContent(fileContent) {
    return {
        type: UPDATE_FILE_CONTENT,
        fileContent,
    }
}

export function jumpUp(currentPath) {
    const newPath = currentPath.slice(0, currentPath.lastIndexOf('/'));
    return dispatch => {
        dispatch(listDirectory(newPath));
    }
}