import logo from "./logo.svg";
import "./App.css";
import ListEmployeesComponent from "./components/ListEmployeesComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
//created using this command npx create-react-app@latest your-project-name --use-npm
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeesComponent}></Route>
            <Route path="/employees" component={ListEmployeesComponent}></Route>
            <Route
              path="/add-employee"
              component={CreateEmployeeComponent}
            ></Route>
            <ListEmployeesComponent />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
