import React from 'react';

const File = (props) => {
    return (
        <div className="file">
            <span className="fileText" onClick={() => props.browseFile(props.fileName)}>{props.fileName}</span>
        </div>
    );
};

export default File;