
import  React, { useState } from 'react'
import { Link , withRouter } from "react-router-dom";
import { FacebookProvider, GitHubProvider, GoogleProvider, } from "../../config/authMethods";
import  firebase from "firebase"
import  SocialMediaAuth from "../../service/auth";
import './signUp.css'

  const SignUp = (props) => {

 const [email, setEmail]= useState('')
 const [password, setPassword] =useState('')

    const handleOnClick = async  ( provider ) => {
        const res = await SocialMediaAuth(provider)
        console.log(res)
        }

const registerUser = (e) => {

try {
    e.preventDefault()
firebase.auth().createUserWithEmailAndPassword(email, password, )
.then((res)=> alert ('usuario registrado con exito'))
 props.history.push('/')
} catch (error) {
    
}



}
    return (
        <div className="container--signUp">

<div className="signUp--box1">
    <h1 className="title--box1">Bienvenido</h1>
    <p className="text--box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
<div className="signUp--box2">
<h1 className="title--signUp">Registrate</h1>
<form onSubmit={ registerUser }>
    <input 
    onChange={(e) => {setEmail(e.target.value)}}
    className="styles--inputs--signUp"
    type="email"
    placeholder="Email"
    /><br/>

    <input 
     onChange={(e) => {setPassword(e.target.value)}}
     className="styles--inputs--signUp"
     type="password"
     placeholder="Contraseña"
    /><br/>
<button className="button--signUp">REGISTRARSE</button><br/>
</form>

<h2 className="style--O--signUp">O</h2>

     <button className="button--socialMediaFace" onClick ={() => handleOnClick( FacebookProvider )}>Facebook</button><br/>
     <button className="button--socialMediaGoogle" onClick ={() => handleOnClick( GoogleProvider )}>Google</button><br/>
     <button className="button--socialMediaGit" onClick ={() => handleOnClick( GitHubProvider )}>GitHub</button><br/>

 <Link className="style--link--signIn"  to='/login'> Iniciar sesion</Link>
</div>
        </div>
    )
}

 export default  withRouter(SignUp)
