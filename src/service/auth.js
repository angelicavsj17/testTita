
import firebase    from "../config/firebase.config"

const SocialMediaAuth = (provider) => {
 return firebase
 .auth()
 .signInWithPopup(provider)
 .then((res)=>{
    return res.user
}).catch((error)=>{
    return error;
})

}

export default SocialMediaAuth
