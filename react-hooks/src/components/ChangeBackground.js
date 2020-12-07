import React from 'react';

const ChangeBackground = (props) => {

    return (
    <div >
        <button type="button" className={props.className}>{props.titleName}</button> 
    </div>
    );
}

export default ChangeBackground;