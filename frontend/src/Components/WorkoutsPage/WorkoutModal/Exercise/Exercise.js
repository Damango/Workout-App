import React, { useState, useEffect } from 'react';
import "./Exercise.css"
const Exercise = (props) => {


    const [totalVolume, setTotalVolume] = useState(0)
    const [theSets, setTheSets] = useState(props.data.sets)

    let totalSets = props.data.sets.length

    useEffect(() => {
        let i;
        let volume = 0;
        for (i = 0; i < props.data.sets.length; i++) {
            volume += (props.data.sets[i].reps * props.data.sets[i].weight);
        }
        setTotalVolume(volume);
    }, [])



    return (<div className="exercise-wrapper">

        <div className="exercise-header">
            <div className="exercise-title">{props.data.title}</div>
            <div className="exercise-categories">{props.data.categories.map((category) => <div className={"exercise-category " + category}>{category}</div>)}</div>
            <div className="total-sets">Sets:  {totalSets}</div>
            <div className="total-volume">Volume:  {totalVolume}</div>
        </div>
        <div className="sets-editor-container">
            {theSets.map((set) => <div className="set-block">{set.weight + ' x ' + set.reps}</div>)}
            <button className="add-set-button">+</button>
        </div>
    </div>);
}

export default Exercise;