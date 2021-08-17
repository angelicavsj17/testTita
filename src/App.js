import { FacebookProvider, GoogleProvider } from "./config/authMethods";
import SocialMediaAuth from "./service/auth";

function App() {
const handleOnClick =async  (provider) => {
const res = await SocialMediaAuth(provider)
console.log(res)
}

  return (
    <div>
     <h1>hola</h1>
     <button onClick ={() => handleOnClick(FacebookProvider)}>Facebook</button>
     <button onClick ={() => handleOnClick(GoogleProvider)}>Google</button>
    </div>
  );
}

export default App;
