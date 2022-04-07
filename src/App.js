import React, { Component } from "react";
import { Switch, Route, Link ,Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/index.css"
import AuthService from "./services/auth.service";
import AddDoctorComponent from './components/AddDoctorComponent';
import VaccineLogo from './images/vaccinelogo.PNG'
import ListDoctorComponents from './components/ListDoctorComponents';
import Login from "./components/login.component";
import Register from "./components/register.component";

import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardHospital from "./components/board-hospital.component";
import BoardAdmin from "./components/board-admin.component";
import ListBenificiaryComponent from './components/ListBenificiaryComponent';
import AddBenificiaryComponent from './components/AddBenificiaryComponent';
import ViewDoctorComponent from './components/ViewDoctorComponent';
import AdminHomeComponent from './components/AdminHomeComponent';
import ListHospitalComponent from './components/ListHospitalComponent';
import ListVaccineComponent from './components/ListVaccineComponent';
import AddHospitalComponent from './components/AddHospitalComponent';
import AddVaccineComponent from './components/AddVaccineComponent';
import ViewBenificiaryComponent from './components/ViewBenificiaryComponent';
import ViewHospitalComponent from './components/ViewHospitalComponent';
import ViewVaccineComponent from './components/ViewVaccineComponent';
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import UserHomePageComponent from "./components/UserHomePageComponent";
import VaccineCalenderComponent from "./components/VaccineCalenderComponent";
import UserProfileComponent from "./components/UserProfileComponent";
import EditUserProfileComponent from "./components/EditUserProfileComponent";
import ListBookingComponent from "./components/ListBookingComponent";
import AddBookingComponent from "./components/AddBookingComponent";
import HomePageComponent from "./components/HomePageComponent";
import AboutVaccineComponent from "./components/AboutVaccineComponent";
import ContactComponent from "./components/ContactComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showHospitalBoard: false,
      showAdminBoard: false,
      showUserBoard:false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showHospitalBoard: user.roles.includes("ROLE_HOSPITAL"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showUserBoard:user.roles.includes("ROLE_USER")
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showHospitalBoard: false,
      showAdminBoard: false,
      showUserBoard:false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showHospitalBoard, showAdminBoard,showUserBoard } = this.state;

    return (
      <div className="main-container">
        <nav className="navbar navbar-expand navbar-dark" style={{backgroundColor:"#4682B4",fontWeight:"bold"}}>
          <Link to={"/"} className="navbar-brand">
         <img src={VaccineLogo} className="logo-image">
         </img>
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item" >
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showHospitalBoard && (
              <li className="nav-item">
                <Link to={"/hospital"} className="nav-link">
                  Hospital Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin-home"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {showUserBoard && (
              <li className="nav-item">
                <Link to={"/user-home"} className="nav-link">
                  User Board
                </Link>
              </li>
            )}

            {/* {currentUser &&  (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User 
                </Link>
              </li>
            )} */}
          </div>
          <div className="navbar-nav" style={{marginLeft:"800px"}}>
            <li className="nav-item">
              <Link to={"/about-us"} className="nav-link">
                About
              </Link>

            </li>
            </div>
            <div className="navbar-nav">
            <li className="nav-item">
              <Link to={"/contact-us"} className="nav-link">
                Contact
              </Link>

            </li>
            </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
            
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={HomePageComponent} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/hospital" component={BoardHospital} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path='/admin-home' component={AdminHomeComponent}></Route>
            <Route path='/doctors' component={ListDoctorComponents}></Route>
            <Route path='/add-doctor' component={AddDoctorComponent}></Route>
            <Route path='/edit-doctor/:id' component={AddDoctorComponent}></Route>
            <Route path='/view-doctor/:id' component={ViewDoctorComponent}></Route>
            <Route path='/benificiaries' component={ListBenificiaryComponent}></Route>
            <Route path='/add-benificiary' component={AddBenificiaryComponent}></Route>
            <Route path='/edit-benificiary/:id' component={AddBenificiaryComponent}></Route>
            <Route path='/view-benificiary/:id' component={ViewBenificiaryComponent}></Route>
          
            <Route exact path="/hospitals" component={ListHospitalComponent}></Route>
            <Route exact path="/vaccines" component={ListVaccineComponent}></Route>
            <Route exact path="/add-hospital" component={AddHospitalComponent}></Route>
            <Route exact path="/edit-hospital/:id" component={AddHospitalComponent}></Route>
            <Route path="/view-hospital/:id" component={ViewHospitalComponent}></Route>
            <Route exact path="/add-vaccine" component={AddVaccineComponent}></Route>
            <Route exact path="/edit-vaccine/:id" component={AddVaccineComponent}></Route>
            <Route exact path="/view-vaccine/:id" component={ViewVaccineComponent}></Route>
            <Route path='/user-home' component={UserHomePageComponent}></Route>
            <Route path='/vaccine-calender' component={VaccineCalenderComponent}></Route>
            <Route path='/view-user-profile' component={UserProfileComponent}></Route>
            <Route path='/edit-user-profile' component={EditUserProfileComponent}></Route>
            <Route path='/booking-details' component={ListBookingComponent}></Route>
            <Route path='/book-vaccine' component={AddBookingComponent}></Route>
            <Route path='/about-us' component={AboutVaccineComponent}></Route>
            <Route path='/contact-us' component={ContactComponent}></Route>
            <Redirect to='/'></Redirect>
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
