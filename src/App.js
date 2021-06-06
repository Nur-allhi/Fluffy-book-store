import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Admin from "./Components/Admin/Admin";
import Header from "./Components/Header/Header";
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
