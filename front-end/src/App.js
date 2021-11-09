import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import LoginLayout from "layouts/LoginLayout.js";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/" render={(props) => <LoginLayout {...props} />} />
        <Route
          path="/company"
          render={(props) => <ClientLayout {...props} />}
        />
        <Route path="/user" render={(props) => <EmployeeLayout {...props} />} />
        {/* <Redirect from="/" to="/admin/dashboard" /> */}
      </Switch>
    </BrowserRouter>
  );
};
export default App;
