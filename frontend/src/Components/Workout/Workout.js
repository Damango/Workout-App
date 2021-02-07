import React from 'react';
import "./Workout.css"
const Workout = (props) => {


    let theDate = props.data.date.substr(0, 10)

    return (<div className="workout-card-container">

        <div className='workout-card-title'>{props.data.title}</div>
        <div className="workout-card-date">{theDate}</div>
        <div className="workout-card-tag">{props.data.tag}</div>




    </div>);
}

export default Workout;