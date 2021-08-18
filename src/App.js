
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./home";
import { SignUp } from "./signUp";
import { SignIn } from "./login";

function App() {
  return (
    <Router>

      <Switch>
      <Route exact path="/" render={() => <HomePage />} />

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
