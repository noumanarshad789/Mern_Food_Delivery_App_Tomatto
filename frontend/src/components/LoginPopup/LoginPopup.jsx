import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"


const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = React.useState("Login")
    const { backend_URL, setToken } = useContext(StoreContext)

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUserData(userData => ({ ...userData, [name]: value }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        let newURL = backend_URL

        if (currState === "Login") {
            newURL += "/api/user/login"
        }
        else {
            newURL += "/api/user/register"
        }

        const response = await axios.post(newURL, userData)

        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setShowLogin(false) // closed the Login form
        }else{
            alert(response.data.message)
        }
    }


    return (
        <div className='login-popup'>
            <form onSubmit={onSubmitHandler} className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => { setShowLogin(false) }} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={userData.name} type="text" placeholder='Your name' required />}
                    <input name='email' onChange={onChangeHandler} value={userData.email} type="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={userData.password} type="password" placeholder='Your password' required />
                </div>

                <button type='submit'>{currState === "Signup" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the term of use & privacy policy.</p>
                </div>
                {currState === "Signup" ? <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p> : <p>Create a new account? <span onClick={() => setCurrState("Signup")} >Click here</span></p>}

            </form>
        </div>
    )
}

export default LoginPopup
