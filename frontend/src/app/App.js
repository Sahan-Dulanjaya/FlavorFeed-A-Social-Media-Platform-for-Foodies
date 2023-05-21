import React, { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import AppHeader from "../common/AppHeader";
import Home from "../pages/home/Home";
import Login from "../pages/user/login/Login";
import Signup from "../pages/user/signup/Signup";
import Profile from "../pages/user/profile/Profile";
import OAuth2RedirectHandler from "../pages/user/oauth2/OAuth2RedirectHandler";
import NotFound from "../common/NotFound";
import LoadingIndicator from "../common/LoadingIndicator";
import { getCurrentUser } from "../util/APIUtils";
import { ACCESS_TOKEN } from "../constants";
import PrivateRoute from "../common/PrivateRoute";
import { ToastContainer, toast } from "react-toastify";

import "./App.css";
import Users from "../pages/users/Users";
import Shared from "../pages/shared/Shared";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "../common/Dashboard"

const App = () => {
  const [state, setState] = useReducer(
    (prevState, newState) => {
      return { ...prevState, ...newState };
    },
    {
      authenticated: false,
      currentUser: null,
      loading: true
    }
  );

  const loadCurrentlyLoggedInUser = () => {
    getCurrentUser()
      .then(response => {
        setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      })
      .catch(error => {
        setState({
          loading: false
        });
      });
  };

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setState({
      authenticated: false,
      currentUser: null
    });
    toast("You're safely logged out!", { type: "success" ,position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", });
  };

  useEffect(() => {
    loadCurrentlyLoggedInUser();
  }, []);

  if (state.loading) {
    return <LoadingIndicator />;
  }

  return (
    <div className="app">


      <div className="app-top-box">

        <AppHeader
          authenticated={state.authenticated}
          onLogout={handleLogout}
        />
      </div>
      <div className="app-body">

        <Routes>

          <Route
            path="/home"
            element={
              <PrivateRoute
                authenticated={state.authenticated}
                currentUser={state.currentUser}
                component={Home}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute
                authenticated={state.authenticated}
                currentUser={state.currentUser}
                component={Profile}
              />
            }
          />

          <Route
            path="/shared"
            element={
              <PrivateRoute
                authenticated={state.authenticated}
                currentUser={state.currentUser}
                component={Shared}
              />
            }
          />

          <Route
            path="/users"
            element={
              <PrivateRoute
                authenticated={state.authenticated}
                currentUser={state.currentUser}
                component={Users}
              />
            }
          />

          <Route
            path="/login"
            element={<Login authenticated={state.authenticated} />}
          />
          <Route
            path="/signup"
            element={<Signup authenticated={state.authenticated} />}
          />
            <Route
                path="/"
                element={<Dashboard authenticated={state.authenticated} />}
            />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
          <Route element={<NotFound />} />

        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
