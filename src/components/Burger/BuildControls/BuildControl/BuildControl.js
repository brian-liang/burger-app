import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>
                {props.label}
                <button className={classes.More} onClick={props.added}>More</button>
                <button className={classes.Less} onClick={props.deducted} disabled={props.disabled}>Less</button>

            </div>
        </div>
    );
}

export default buildControl;