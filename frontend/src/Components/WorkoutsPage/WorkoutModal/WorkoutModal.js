import React, { useState, useEffect } from 'react';
import "./WorkoutModal.css"
const WorkoutModal = (props) => {


    let theDate = props.data.date.substr(0, 10)


    return (<div className="workout-modal-container">
        <div className="workout-modal-title">{props.data.title}</div>
        <div className="workout-modal-date">{theDate}</div>

        <div className="exercises-container"></div>



    </div>);
}

export default WorkoutModal;