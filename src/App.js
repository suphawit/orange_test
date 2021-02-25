import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fibonacci from "./Fibonacci";
import ShiftToLast from "./ShiftToLast";
import SecondMax from "./SecondMax";
import FizzBuzz from "./FizzBuzz/";
import ChuckNorris from "./ChuckNorris/";
import OrangeCapMarathon2021 from "./OrangeCapMarathon2021/";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/fibonacci">Fibonacci</Link>
            </li>
            <li>
              <Link to="/shiftToLast">ShiftToLast</Link>
            </li>
            <li>
              <Link to="/secondMax">SecondMax</Link>
            </li>
            <li>
              <Link to="/fizzBuzz">FizzBuzz</Link>
            </li>
            <li>
              <Link to="/chuckNorris">ChuckNorris</Link>
            </li>
            <li>
              <Link to="/orangeCapMarathon2021">OrangeCapMarathon2021</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/fibonacci" component={Fibonacci} />
          <Route path="/shiftToLast" component={ShiftToLast} />
          <Route path="/secondMax" component={SecondMax} />
          <Route path="/fizzBuzz" component={FizzBuzz} />
          <Route path="/chuckNorris" component={ChuckNorris} />
          <Route
            path="/orangeCapMarathon2021"
            component={OrangeCapMarathon2021}
          />
        </Switch>
      </div>
    </Router>
  );
}
