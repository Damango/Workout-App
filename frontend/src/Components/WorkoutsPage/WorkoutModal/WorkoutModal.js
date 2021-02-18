import React, { useState, useEffect } from 'react';
import "./WorkoutModal.css"
import Excercise from "./Exercise/Exercise"
const WorkoutModal = (props) => {


    let theDate = props.data.date.substr(0, 10)


    return (<div className="workout-modal-container">

        <button className="close-modal-button" onClick={props.closeModal}>X</button>
        <div className="workout-modal-title">{props.data.title}</div>
        <div className="workout-modal-date">{theDate}</div>

        <div className="exercises-container">
            {props.data.exercises.map((exercise) => <Excercise data={exercise} />)}

        </div>



    </div>);
}

export default WorkoutModal;