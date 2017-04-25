import React from 'react';

const JumpUpButton = (props) => {
    return (
        <div className="jumpupbutton">
            <span className={props.jumpUpDisabled ? "jumpupbutton__disabled" : "jumpupbuttontext"} onClick={props.jumpUp}>..</span>
        </div>
    );
};

export default JumpUpButton;