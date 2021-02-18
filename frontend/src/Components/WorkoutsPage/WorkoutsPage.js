import React, { useState, useEffect } from 'react';
import Workout from "../Workout/Workout"
import WorkoutModal from "./WorkoutModal/WorkoutModal"
import "./WorkoutsPage.css"
import axios from 'axios';
const WorkoutsPage = (props) => {


    const [workoutData, setWorkoutData] = useState([])

    const [createModal, setCreateModal] = useState(0)

    const [modalData, setModalData] = useState()





    useEffect(() => {
        axios.get('http://localhost:8000/api/').then((res) => {
            console.log(res.data)
            setWorkoutData(res.data)
        })
    }, [])


    function renderCreateModal() {

        if (createModal === 1) {
            return (<WorkoutModal data={modalData} closeModal={openCreateModal} />)
        }
    }

    function changeModalData(data) {
        setModalData(data)
        setCreateModal(1)
    }



    function openCreateModal() {

        if (createModal === 0) {
            setCreateModal(1)
        }
        else if (createModal === 1) {
            setCreateModal(0)
        }

    }


    function addWorkout() {





        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = 'X-CSRFToken'


        axios.post('http://localhost:8000/api/', {
            title: 'Push',
            tag: 'Hypertrophy',
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


        {renderCreateModal()}

        <div className="left-view-container">
            <h1>WORKOUTS</h1>
            <button className="create-workout-button" onClick={openCreateModal}>+ Create Workout</button>
            <button onClick={addWorkout}>Add Workout</button>

            <div className="workouts-container">


                {workoutData.map((workout) => <Workout data={workout} changeModalData={changeModalData} />)}
            </div>

        </div>

        <div className="right-view-container">
            <h1>VOLUME</h1>

            <div className="workout-data-container"></div>


        </div>







    </div>);
}

export default WorkoutsPage;