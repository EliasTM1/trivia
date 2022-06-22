import React from 'react'
import { Link } from 'react-router-dom';
const ScorePage = () => {
    return (
        <div className='scorePage__container'>
            <h2>Your final score</h2>
            <Link to='/'>
                Home
            </Link>
            <div className="scorePage__resume">
                <h3>Correct Answers: </h3>
                <p>__ / 100</p>
                <br />
                <h3>Incorrect Answers: </h3>
                <p>__ / 100</p>
                <br />
                <h3>Time used: </h3>
                <p>___ Seconds</p>
                <br />
                <h3>Time remaining: </h3>
                <p>___ Seconds</p>
                <br />

            </div>
        </div>
    )
}

export default ScorePage
