import React from 'react';

const FileContent = (props) => {
    return (
        <div className="filecontent">
            <span>{props.fileContent}</span>
        </div>
    );
};

export default FileContent;