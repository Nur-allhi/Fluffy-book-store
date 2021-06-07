import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Admin from "./Components/Admin/Admin";
import Header from "./Components/Header/Header.jsx";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import { createContext, useState } from "react";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const userData = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userData.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/orders/:id">
            <Orders />
          </Route>
          <Route path="/admin">
            <Admin />
            <PrivateRoute />
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
        <Footer />
      </Router>
    </userData.Provider>
  );
}

export default App;
