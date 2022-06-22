import React from 'react'
// * Components
import Question from "../Question";
import Answer from "../Answer";
import { Link } from "react-router-dom";


const GamePage = () => {
    return (
        <div className='gamePage__container'>
            <h2>Select the correct </h2>
            <Link to='/'>Home</Link>
            <Question />
            <div className="gamePage__progress"> Question __ of __</div>
            <div className="gamePage__progress"> Time remaining</div>
            <Answer />
        </div>
    )
}

export default GamePage
