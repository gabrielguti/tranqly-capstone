import { Switch } from "react-router-dom";
import Route from "./Route";
import DashboardPatient from "../pages/dashboardPatient";
import DashboardProfessional from "../pages/dashboardProfessional";
import Login from "../pages/login";
import ProfileClient from "../pages/profileClient";
import ProfileProfessional from "../pages/profileProfessional";
import RegisterClient from "../pages/registerClient";
import RegisterProfessional from "../pages/registerProfessional";
import LandingPage from "../pages/landingPage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signin" component={Login} />
        <Route path="/signupclient" component={RegisterClient} />
        <Route path="/signupprofessional" component={RegisterProfessional} />
        <Route path="/profileprofessional" component={ProfileProfessional} />
        <Route path="/profileclient" component={ProfileClient} />
        <Route path="/dashboardpatient" component={DashboardPatient} />
        <Route path="/dashboardprofessional" component={DashboardProfessional} />
      </Switch>
    </>
  );
};

export default Routes;
