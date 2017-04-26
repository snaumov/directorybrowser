import React, { Component } from 'react';
import Directory from './directory';
import File from './file';
import FileContent from './fileContent';
import JumpUpButton from './jumpUpButton';
import { createSelector } from 'reselect'
//import moize from 'moize';

function DirList (props) {

    // const getDirectoryListing = (props) => props.directoryListing;

    // const getDirectoriesAndFiles = createSelector(
    //     [ getDirectoryListing ],
    //     (directoryListing) => {
    //         console.log('calculated');
    //         return {
    //             directories: directoryListing.filter(entity => {
    //                 console.log('calculated again');
    //                 return entity.entityType === "DIRECTORY"
    //             }).map(directory => <Directory openDirectory={props.openDirectory} key={directory.entity} directoryName={directory.entity}/>),
    //             files: directoryListing.filter(entity => entity.entityType === "FILE").map(file => <File key={file.entity} fileName={file.entity} browseFile={props.browseFile}/>)
    //         }
    //     }
    // )


    // const directories = props.directoryListing.filter(entity => entity.entityType === "DIRECTORY").map(directory => <Directory openDirectory={props.openDirectory} key={directory.entity} directoryName={directory.entity}/> )
    // const files = props.directoryListing.filter(entity => entity.entityType === "FILE").map(file => <File key={file.entity} fileName={file.entity} browseFile={props.browseFile}/> )
    // var directoriesAndFiles = getDirectoriesAndFiles(props);
    // var [ directories, files ] = [directoriesAndFiles.directories, directoriesAndFiles.files];
    //console.log('not memoized');
    return (
        <div className="dirList">
            <JumpUpButton jumpUpDisabled = {props.jumpUpDisabled} jumpUp={props.jumpUp}/>
            {props.directories.map(directory => <Directory openDirectory={props.openDirectory} key={directory.entity} directoryName={directory.entity}/>)}
            {props.files.map(file => <File key={file.entity} fileName={file.entity} browseFile={props.browseFile}/>)}
            <FileContent fileContent={props.fileContent}/>
        </div>
    );

}

//const DirList = moize.react(DirListNotMemoized);

export default DirList;