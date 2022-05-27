import './App.css';
import EmployeePyrollForm from './forms/EmployeePyrollForm';
import Home from './components/Home';
// import { Router, Routes, Route, Link} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path='/'><Home /></Route>
      <Route path='/home'><Home/></Route>
      <Route path='/payroll-form'><EmployeePyrollForm /> </Route>
      </Router>
    </div>
   
  );
}

export default App;
