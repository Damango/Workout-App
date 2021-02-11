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

        <div className="left-view-container">
            <h1>WORKOUTS</h1>
            <button className="create-workout-button">+ Create Workout</button>

            <div className="workouts-container">


                {workoutData.map((workout) => <Workout data={workout} />)}
            </div>

        </div>

        <div className="right-view-container">

            <div className="workout-data-container"></div>


        </div>







    </div>);
}

export default WorkoutsPage;