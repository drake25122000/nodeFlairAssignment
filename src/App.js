import './App.css';
import './assets/styles/output.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Task1 from './components/task1/task1/Task1';
import Task2 from './components/task1/task2/Task2';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/task2">
            <Task2 />
          </Route>

          <Route exact path="/task1">
            <Task1 />
          </Route>

          <Route>
            <Redirect to="/task1" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
