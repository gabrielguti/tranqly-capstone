import { Switch } from "react-router-dom";
import Route from "./Route";
import DashboardPatient from "../pages/dashboardPatient";
import DashboardProfessional from "../pages/dashboardProfessional";
import Login from "../pages/login";
import ProfileProfessional from "../pages/profileProfessional";
import RegisterClient from "../pages/registerClient";
import RegisterProfessional from "../pages/registerProfessional";
import LandingPage from "../pages/landingPage";
import DashboardFilter from "../pages/dashboardFilter";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/signin" component={Login} />
      <Route path="/signupclient" component={RegisterClient} />
      <Route path="/signupprofessional" component={RegisterProfessional} />
      <Route
        path="/profileprofessional"
        component={ProfileProfessional}
        isPrivate
      />
      <Route path="/dashboardclient" component={DashboardPatient} isPrivate />
      <Route
        path="/dashboardprofessional"
        component={DashboardProfessional}
        isPrivate
      />
      <Route path="/dashboardfilter" component={DashboardFilter} isPrivate/>
    </Switch>
  );
};

export default Routes;
