import {BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import './App.css';
import NavBar from './Navbar/Navbar';
import Home from './Home/Home';
import Registration from './Registration/Registration';



function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
          <Route  path="/Home" element={<Home />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          </Routes>
        </div>
      </div> 
      </Router>
  );
}

export default App