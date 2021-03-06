import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/navbar.component";
import ExercisesList from "./Components/exercises-list.component";
import EditExercise from "./Components/edit-exercises.component";
import CreateExercise from "./Components/create-exercises.component";
import CreateUser from "./Components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
