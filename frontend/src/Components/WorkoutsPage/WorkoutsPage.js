import React, { useState, useEffect } from 'react';
import Workout from "../Workout/Workout"
import "./WorkoutsPage.css"
import axios from 'axios';
const WorkoutsPage = (props) => {


    const [workoutData, setWorkoutData] = useState([])



    useEffect(() => {
        axios.get('http://localhost:8000/api/').then((res) => {
            console.log(res.data)
            setWorkoutData(res.data)
        })
    }, [])


    function addWorkout() {





        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'


        axios.post('http://localhost:8000/api/', {
            title: 'Push',
            exercises: [{
                title: 'Push Ups',
                categories: ['Chest', 'Tricep'],
                sets: [{
                    reps: 20,
                    weight: 225
                }, {
                    reps: 15,
                    weight: 225
                },
                {
                    reps: 10,
                    weight: 225
                }]
            }]
        }

        )
    }

    return (<div className="workouts-page-container">

        <h1>WORKOUTS PAGE</h1>
        <button className="add-workout-button" onClick={addWorkout}>Add Workout</button>


        <div className="workouts-container">


            {workoutData.map((workout) => <Workout data={workout} />)}
        </div>



    </div>);
}

export default WorkoutsPage;