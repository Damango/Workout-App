import React, { useState, useEffect } from 'react';
import { useSpring, animated } from "react-spring"
import "./WorkoutModal.css"
import Excercise from "./Exercise/Exercise"
const WorkoutModal = (props) => {

    const [workoutTitle, setWorkoutTitle] = useState(props.data.title)


    const animations = useSpring({ from: { height: 0 }, to: { height: 750 }, config: { duration: 100 } })



    let theDate = props.data.date.substr(0, 10)

    useEffect(() => {
        if (workoutTitle === '') {
            setWorkoutTitle(<div className="empty-workout-title"><input placeholder="Enter Workout Title" /></div>)
        }
        else {
            setWorkoutTitle(<div className="workout-modal-title">{props.data.title}</div>)
        }

        console.log("test")
    }, [])



    return (<animated.div style={animations} className='workout-modal-container'>
        <button className="close-modal-button" onClick={props.closeModal}>X</button>
        <div className="modal-header">


            {workoutTitle}
            <div className="workout-modal-date">{theDate}</div>
        </div>
        <div className="exercises-container">
            {props.data.exercises.map((exercise) => <Excercise data={exercise} />)}

        </div>



    </animated.div>);
}

export default WorkoutModal;