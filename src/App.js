import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import AddStudent from "./components/AddStudent";
import Student from "./components/Student";
import StudentList from "./components/StudentList";

function App() {
  return (
    <Router>
      <nav>
        <a href='/'>OCAFE</a>
        <div>
          <li>
            <Link to={'/students'}>Students</Link>
          </li>
          <li>
            <Link to={'/students/add'}>Add Student</Link>
          </li>
        </div>
      </nav>

      <div>
        <Switch>
          <Route exact path={['/', '/students']} component={StudentList} />
          <Route exact path={['/students/add']} component={AddStudent} />
          <Route exact path={['/students/:id']} component={Student} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
