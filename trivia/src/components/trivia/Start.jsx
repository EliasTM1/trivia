import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useForm } from "../../hooks/useForm";
import categories from "../../utils/categories";



const testes = [
    { label: "Arts & Literature", urlValue: "arts_and_literature" },
    { label: "Film & TV", urlValue: "film_and_tv" },
    { label: "Food & Drink", urlValue: "food_and_drink" },
    { label: "General Knowledge", urlValue: "general_knowledge" },
    { label: "Geography", urlValue: "geography" },
    { label: "History", urlValue: "history" },
    { label: "Music", urlValue: "music" },
    { label: "Science", urlValue: "science" },
    { label: "Society & Culture", urlValue: "society_and_culture" },
    { label: "Sport & Leisure", urlValue: "sport_and_leisure" }
]



const Start = () => {

    const [questions, setQuestions] = useState([]);
    let [categorias] = categories;
    let chosenCategories = [];

    const getCategories = async () => {
        const url = 'https://the-trivia-api.com/api/questions?limit=5';
        fetch(url)
            .then(response => response.json())
            .then(data => setQuestions(data))
    }

    useEffect(() => {
        getCategories()
    }, [])

    const { handleSubmit, handleChange, data: user, errors } = useForm({
        validations: {
            name: {
                pattern: {
                    value: '^[A-Za-z]*$',
                    message:
                        "You're not allowed to use special characters or numbers in your name.",
                },
            },
            age: {
                custom: {
                    isValid: (value) => parseInt(value, 10) > 17,
                    message: 'You have to be at least 18 years old.',
                },
            },
            password: {
                custom: {
                    isValid: (value) => value?.length > 6,
                    message: 'The password needs to be at least 6 characters long.',
                },
            },
        },
        onSubmit: () => alert('User submitted!'),
    });

    const handleCategoSelect = (e) => {
        console.log(e, "Desde handleCategoSelect")
        console.log(e.target.dataset.urlvalue, "Desde sivanicu")

        chosenCategories.push(e.target.dataset.urlvalue)
        console.warn(chosenCategories);
    }

    return (
        <>



            <form className='startForm__container' >
                <h3>Difficulty</h3>
                <div className="start__difficulty-container">
                    <select onChange={handleChange('gender')} required>
                        <option value="male" defaultValue={user.gender === 'easy'}>
                            Easy
                        </option>
                        <option value="female" defaultValue={user.gender === 'medium'}>
                            Medium
                        </option>
                        <option value="non-binary" defaultValue={user.gender === 'hard'}>
                            Hard
                        </option>
                    </select>

                </div >
                <h3>Number of questions</h3>
                <div className="page__slider">
                    <input
                        placeholder="Max is 20"
                        type="number"
                        value={user.age || ''}
                        onChange={handleChange('age', (value) => parseInt(value, 10))}
                    />
                    {errors.age && <p className="error">{errors.age}</p>}
                    <div className="page__buble">

                    </div>
                </div>
                <div className="start__categories">

                </div>
                <h3>Categories</h3>
                <div className="start__categories-container">
                    <ul>
                        <div className="start__categories-option">
                            {
                                testes.map((e) => (
                                    <div
                                        key={e.label}
                                        className="start__select-catego"
                                        onClick={handleCategoSelect}
                                        data-urlvalue={e.urlValue}

                                    >
                                        {e.label}
                                    </div>
                                ))
                            }
                        </div>
                    </ul>

                </div>
                <div className="start__control-buttons">
                    <Link to="/gamePage"
                        className="link">
                        <button type='submit' className='start__button-submit link'>START</button>
                    </Link>
                    <Link to="/scorePage"
                        className="link">
                        <button className='start__button-submit'>My Score</button>
                    </Link>
                </div>
            </form >


        </>
    )


}

export default Start
