import React from 'react';

const FileContent = (props) => {
    console.log(!props.fileContent)
    return (
        <div className="fileContent">
            <span>{!props.fileContent ? "Click on any text file to view it's content" : props.fileContent}</span>
        </div>
    );
};

export default FileContent;