import React from 'react';

const JumpUpButton = (props) => {
    return (
        <div className="jumpUpButton">
            <span className={props.jumpUpDisabled ? "jumpUpButtonText__disabled" : "jumpUpButtonText"} onClick={props.jumpUpDisabled ? undefined: props.jumpUp}>..</span>
        </div>
    );
};

export default JumpUpButton;