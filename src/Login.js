import React from 'react'
import {Button} from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import {useStateValue} from './StateProvider'
function Login() {
    const [{} , dispatch] = useStateValue()

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) => alert(error.message))
    }
    return (
        <div>
            <div className="login__container">
                <img src="/logo.png" alt=""/>

                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick = {signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
