import Champtions from "./pages/Champtions";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ChampProfile from "./pages/ChampProfile";
import SummonerProfile from "./pages/SummonerProfile";
import LoginRegister from "./pages/LoginRegister";
// import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./pages/ForgetPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/styles.css"
import ResetPassword from "./pages/ResetPassword";
import ActivateAccount from "./pages/ActivateAccount";
import { AuthProvider } from "./context/AuthContext/AuthIndex"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/champtions">
            <Champtions />
          </Route>
          <Route exact path="/summoner/:puuid">
            <SummonerProfile />
          </Route>
          <Route path="/champtions/profile/:id">
            <ChampProfile />
          </Route>
          <Route path="/login">
            <LoginRegister />
          </Route>
          <Route path="/register">
            <LoginRegister />
          </Route>
          <Route path="/activate/:token">
            <ActivateAccount />
          </Route>
          <Route path="/forget_password">
            <ForgetPassword />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/reset_password/:uidb64/:token">
            <ResetPassword />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
