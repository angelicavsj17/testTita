
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import HomePage from "./pages/home";
import  SignUp  from "./pages/signUp";
import  SignIn  from "./pages/signIn";

function App() {
  return (
   
    <Router>

      <Switch>
      <Route exact path="/" render={() => <HomePage/>
}   
       />

      <Route
            exact
            path="/login"
            render={() => <SignIn />}
          />

      <Route
            exact
            path="/signUp"
            render={() => <SignUp />}
          />

      </Switch>
    </Router>
  
  );
}

export default App;
