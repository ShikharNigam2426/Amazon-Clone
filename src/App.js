import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Component/Home";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import Footer from "./Component/Footer";

// Define the main App component
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/"
            element={
              <div>
                <Header />
                <Home />
                <Footer />
              </div>
            } />
          <Route path="/signup"
            element={
              <div>
                <SignUp />
              </div>
            }
          />
          <Route path="/login"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route path="/checkout"
            element=
            {
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
