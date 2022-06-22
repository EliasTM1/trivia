import React, { useState } from 'react'



const LoginPage = () => {



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
    }

    return (
        <form className='loginPage__container' onSubmit={handleSubmit} >

            <div className="loginPage__form-fields">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />

                <label htmlFor="login">Login</label>
                <input type="text" name="login" />

                <button type='submit'>Login</button>
            </div>

        </form>
    )
}

export default LoginPage
