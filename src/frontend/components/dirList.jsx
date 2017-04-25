import React, { Component } from 'react';
import Directory from './directory';
import File from './file';
import FileContent from './fileContent';
import JumpUpButton from './jumpUpButton';

function DirList (props) {

    const directories = props.directoryListing.filter(entity => entity.entityType === "DIRECTORY").map(directory => <Directory openDirectory={props.openDirectory} key={directory.entity} directoryName={directory.entity}/> )
    const files = props.directoryListing.filter(entity => entity.entityType === "FILE").map(file => <File key={file.entity} fileName={file.entity} browseFile={props.browseFile}/> )
    console.log(directories, files);
    return (
        <div className="dirList">
            <JumpUpButton jumpUpDisabled = {props.jumpUpDisabled} jumpUp={props.jumpUp}/>
            {directories}
            {files}
            {props.fileContent ? <FileContent fileContent={props.fileContent}/> : undefined}
        </div>
    );

}

export default DirList;