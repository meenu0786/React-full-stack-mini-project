import "./App.css";
import ExpenseApp from "./components/ExpenseApp";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUpForm from "./components/SignUpForm";
import AddExpense from "./components/AddExpense";
import AddCategory from "./components/Category";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/sign-up" exact component={SignUpForm} />
          <Route path="/add-expense" exact component={AddExpense} />
          <Route path="/add-category" exact component={AddCategory} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
