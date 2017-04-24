import React, { Component } from 'react';
import Directory from './directory';
import File from './file'


function DirList (props) {

    const directories = props.directoryListing.filter(entity => entity.entityType === "DIRECTORY").map(directory => <Directory key={directory.entity} directoryName={directory.entity}/> )
    const files = props.directoryListing.filter(entity => entity.entityType === "FILE").map(file => <File key={file.entity} fileName={file.entity}/> )
    console.log(directories, files);
    return (
        <div className="dirList">
            {directories}
            {files}
        </div>
    );

}

export default DirList;