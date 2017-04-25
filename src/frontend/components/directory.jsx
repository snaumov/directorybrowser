import React from 'react';

const Directory = (props) => {
    return (
        <div className="directory">
            <span className="directoryName" onClick={() => props.openDirectory(props.directoryName)}>{props.directoryName}</span>
        </div>
    );
};

export default Directory;