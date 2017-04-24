var fs = require('fs');
const DIRECTORY = 'DIRECTORY';
const FILE = 'FILE';


module.exports = {
    listDirectoryContent: listDirectoryContent,
}

function checkEntityType(path) {
    return new Promise((res, rej) => {
        fs.stat(path, (err, stats) => {
            if(err) rej('cannot define entity type. Error: ', err);
            if (stats.isDirectory()) {
                res(DIRECTORY);
            } else {
                res(FILE);
            }
        })
    })
}

function checkEntityTypeSync(path) {
    try{
        const stats = fs.statSync(path);
        return stats.isDirectory() ? DIRECTORY : FILE;
    }
    catch(e){
        console.error(e);
        return FILE;
    }
    
    
}

function listDirectoryContent(path) {
    return new Promise((res, rej) => {
        fs.readdir(path, (err, files) => {
            if (err) rej('cannot list directory, error: ', err);
            var entityWithType = files.map(entity => {
                return {entity: entity, entityType: checkEntityTypeSync(path + '/' + entity)}
            })
            res(entityWithType);
        });
    })
}

