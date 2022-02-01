import './App.css';
// import { Provider } from "react-redux";
// import store from "./component/cake/Store";
// import Cakecontainer from './component/cake/Cakecontainer';
import SignIn from './signincomponent/signComponent/SignIn';
import SignUp from './signincomponent/signupComponent/SignUp';
import { Routes, Route } from "react-router-dom";
import Welcome  from "./signincomponent/Welcome"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route eact path="/" element={<SignIn />} />
        <Route path="/signup"  element={<SignUp />} />
        <Route path="/welcome"  element={<Welcome />}/>
      </Routes>
    </div>
  );
}

export default App;
