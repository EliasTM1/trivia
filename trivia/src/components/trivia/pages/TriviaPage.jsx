import React, { useEffect } from 'react'
import Start from "../Start";

const TriviaScreen = () => {
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);
    return (
        <>
            <div className='triviaPage__container'>
                <h2 className="triviaPage__title">
                    Universal Knowledge trivia
                </h2>
                <div className="triviaPage__instructions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo asperiores debitis et rerum quo assumenda omnis ratione, repellat dolorem veniam suscipit a ipsum ea dolor velit corporis rem facere obcaecati quisquam alias commodi explicabo. Quaerat dolor rem voluptate molestiae accusamus.</div>
                <h3>Select your settings </h3>
                <div className="triviaPage__options">
                    <Start />
                </div>
            </div>
        </>
    )
}

export default TriviaScreen
