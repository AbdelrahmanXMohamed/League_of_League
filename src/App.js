import "./App.css";
import Champtions from "./pages/Champtions";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ChampProfile from "./pages/ChampProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./pages/ForgetPassword";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { VersionProvider } from "./context/ContextChamption";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Champtions">
          <VersionProvider>
            <Champtions />
          </VersionProvider>
        </Route>
        <Route path="/Champtions/Profile/:id">
          <VersionProvider>
            <ChampProfile />
          </VersionProvider>
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/ForgetPassword">
          <ForgetPassword />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
    */
