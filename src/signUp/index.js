
import { Link } from "react-router-dom";
import { FacebookProvider, GitHubProvider, GoogleProvider, } from "../config/authMethods";
import SocialMediaAuth from "../service/auth";
import '../signUp/signUp.css'


 export const SignUp = () => {

    const handleOnClick = async  ( provider ) => {
        const res = await SocialMediaAuth(provider)
        console.log(res)
        }

    return (
        <div className="container--signUp">

<div className="signUp--box1">
    <h1 className="title--box1">Bienvenido</h1>
    <p className="text--box1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>
<div className="signUp--box2">
<h1 className="title--signUp">Registrate</h1>
<form>
    <input 
    className="styles--inputs--signUp"
    placeholder="Email"
    /><br/>
    <input 
     className="styles--inputs--signUp"
     placeholder="Contraseña"
    /><br/>
<button className="button--signUp">Registrarse</button><br/>

<h2 className="style--O--signUp">O</h2>

  <button className="button--socialMediaFace" onClick ={() => handleOnClick( FacebookProvider )}>Facebook</button><br/>
     <button className="button--socialMediaGoogle" onClick ={() => handleOnClick( GoogleProvider )}>Google</button><br/>
     <button className="button--socialMediaGit" onClick ={() => handleOnClick( GitHubProvider )}>GitHub</button><br/>
</form>
 <Link className="style--link--signIn"> Iniciar sesion</Link>
</div>
  
   
        </div>
    )
}

