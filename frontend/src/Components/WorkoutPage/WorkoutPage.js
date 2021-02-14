import React, { useState, useEffect } from 'react';
import Workout from "../Workout/Workout"
import axios from 'axios'
import "./WorkoutPage.css"
const WorkoutPage = (props) => {

    const [theData, setTheData] = useState([])
    const [theArray, setTheArray] = useState([])


    useEffect(() => {

        fetch('http://localhost:8000/api')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTheData(data)
            });
    }, [])
    return (<div className="workout-page-container">





        <div className="close-workout" onClick={() => { props.closePage(0) }}>X</div>

        <div className="workouts-container">
            {theData.map((data) => <Workout data={data} />)}
        </div>



        <button onClick={() => {
            fetch('http://localhost:8000/testworkout')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                });


            setTimeout(() => {
                fetch('http://localhost:8000/api')
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setTheData(data)
                    });
            }, 300)


        }}>Add Another Workout</button>



        <button className="array-button" onClick={() => {

            fetch('http://localhost:8000/arrays')
                .then(response => response.json())
                .then(data => {
                    console.log(data)

                    setTheArray(data)
                    console.log(theArray)
                });


        }}>Get Array WithPython</button>

        <button onClick={() => {

            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.xsrfHeaderName = 'X-CSRFToken'

            axios.post('http://localhost:8000/api/', {
                exercise: 'Super Duper Push Ups',
                reps: 20,
                sets: 15,


            }).then(res => console.log(res)).catch(error => console.error(error))
        }}>Post new Workout</button>

        <div className="array-holder">Array of Numbers: {theArray.map((array) =>
            <div>{array.theList.numbers.map((subArray) => <span>{subArray} </span>)}</div>)}
        </div>
    </div>);
}

export default WorkoutPage;