import React from 'react';

import classes from './BuildControl.css';
const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label} : {this.props}</div>
            <button disabled={props.disabledRemove} onClick={props.removed} className={classes.Less}>Less</button>
            <button onClick={props.added} className={classes.More}>More</button>
        </div>
    );
};

export default BuildControl;