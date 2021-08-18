
import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom";
import { FacebookProvider, GitHubProvider, GoogleProvider } from "../../config/authMethods";
import firebase from "firebase"
import SocialMediaAuth from "../../service/auth";
import './signIn.css'

 const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnClick = async ( provider ) => {
        const res = await SocialMediaAuth(provider)
        console.log(res)
    }

    const LoginUser = async (e) => {

        try {
            e.preventDefault()
            const res = await firebase.auth().signInWithEmailAndPassword(email, password)
                .then(( res ) => alert('welcome'))
            
            console.log(res.user) 
            props.history.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="container--signUp">

            <div className="signUp--box1">
                <h1 className="title--box1">Bienvenido</h1>
                <p className="text--box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="signUp--box2">
                <h1 className="title--signUp">Iniciar sesion</h1>

                <form onSubmit={LoginUser}>
                    <input
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="styles--inputs--signUp"
                        type="email"
                        placeholder="Email"
                    /><br />

                    <input
                        onChange={(e) => { setPassword(e.target.value) }}
                        className="styles--inputs--signUp"
                        type="password"
                        placeholder="Contraseña"
                    /><br />
                    <button className="button--signUp">INICIAR SESION</button><br />
                </form>

                <h2 className="style--O--signUp">O</h2>

                <button className="button--socialMediaFace" onClick={() => handleOnClick(FacebookProvider)}>Facebook</button><br />
                <button className="button--socialMediaGoogle" onClick={() => handleOnClick(GoogleProvider)}>Google</button><br />
                <button className="button--socialMediaGit" onClick={() => handleOnClick(GitHubProvider)}>GitHub</button><br />

                <Link className="style--link--signIn" to='/signup'> Registrate</Link>
            </div>
        </div>
    )
}

export default withRouter(SignIn)