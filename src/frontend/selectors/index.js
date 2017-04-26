import { createSelector } from 'reselect'

const getDirectoryListing = (state) => 
    { 
        console.log(state);
        return state.directoryListing
    };

export const getDirectoriesAndFiles = createSelector(
    [ getDirectoryListing ],
    (directoryListing) => {
        console.log('calculated');
        return {
            directories: directoryListing.filter(entity => {
                console.log('calculated again');
                return entity.entityType === "DIRECTORY"
            }),
            files: directoryListing.filter(entity => entity.entityType === "FILE")
        }
    }
        
)

