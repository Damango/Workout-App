import React, { useState, useEffect } from 'react';
import { useSpring, animated } from "react-spring"
import axios from 'axios';
import "./WorkoutModal.css"
import Excercise from "./Exercise/Exercise"
const WorkoutModal = (props) => {

    const [workoutTitle, setWorkoutTitle] = useState(props.data.title)
    const [newWorkoutTitle, setNewWorkoutTitle] = useState("empty-workout-title")
    const [newExercise, setNewExercise] = useState(0)

    const animations = useSpring({ from: { height: 0 }, to: { height: 750 }, config: { duration: 100 } })



    let theDate = props.data.date.substr(0, 10)

    useEffect(() => {
        if (workoutTitle === '') {
            setWorkoutTitle(<div className={newWorkoutTitle}><input className="workout-title-input" placeholder="Enter Workout Title" onKeyDown={enterWorkout} /></div>)
        }
        else {
            setWorkoutTitle(<div className="workout-modal-title">{props.data.title}</div>)
        }

        console.log("test")
    }, [])


    function enterWorkout(e) {

        let workoutInput = document.querySelector('.workout-title-input')
        if (e.key === 'Enter') {

            axios.post('http://localhost:8000/api/', {
                title: workoutInput.value,
                tag: 'Strength',
                exercises: []
            })

            setTimeout(function () {
                props.updateList()
            }, 100)

            setWorkoutTitle(<div className="workout-modal-title">{workoutInput.value}</div>)

        }

    }

    function addNewExercise() {
        if (newExercise === 0) {
            setNewExercise(1)
        }

    }

    function renderNewExercise() {
        if (newExercise === 1) {
            return (<div className="new-exercise-container">
                <input placeholder="Exercise Name" />
            </div>)
        }
    }







    return (<animated.div style={animations} className='workout-modal-container'>
        <button className="close-modal-button" onClick={props.closeModal}>X</button>
        <div className="modal-header">


            {workoutTitle}
            <div className="workout-modal-date">{theDate}</div>
            <button onClick={() => {


                axios.get('http://localhost:8000/api/' + props.data.id).then((res) => {

                    let updatedWorkout = res.data
                    updatedWorkout.exercises.push({
                        title: "Benchy Wenchy",
                        categories: ['Biggy', "Wiggy"],
                        sets: [{
                            reps: 100,
                            weight: 405
                        }]
                    })


                    axios.put('http://localhost:8000/api/' + props.data.id + '/', updatedWorkout)

                })







            }}>PUT REQUEST</button>
        </div>
        <div className="exercises-container">
            {props.data.exercises.map((exercise) => <Excercise data={exercise} />)}
            <button onClick={addNewExercise} className="add-exercise-button">Add Exercise +</button>
            {renderNewExercise()}
        </div>



    </animated.div>);
}

export default WorkoutModal;