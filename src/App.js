import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Admin from "./Components/Admin/Admin";
import Header from "./Components/Header/Header.jsx";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import { createContext, useState } from "react";

const userContext = createContext();

function App() {
  const [loggedInUser, SetLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, SetLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
