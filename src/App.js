// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Watches from './Pages/Watches/Watches';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import SingleWatchView from './Pages/SingleWatchView/SingleWatchView';
import NewWatchPackage from './Pages/NewWatchPackage/NewWatchPackage';
import Dashboard from './Pages/Dashboard/Dashboard';
import Orders from './Pages/Orders/Orders';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Navigation></Navigation>
            <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/watches">
                  <Watches />
                </Route>
                <PrivateRoute path='/watch/:id'>
                  <SingleWatchView />
                </PrivateRoute>
                <PrivateRoute path='/newWatchAdd'>
                  <NewWatchPackage />
                </PrivateRoute>
                
                <PrivateRoute path='/manageorder'>
                  <ManageAllOrder />
                </PrivateRoute>
                <PrivateRoute path='/orders'>
                  <Orders />
                </PrivateRoute>
                
                <PrivateRoute path='/dashboard'>
                  <Dashboard />
                </PrivateRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
            </Switch>
            <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
