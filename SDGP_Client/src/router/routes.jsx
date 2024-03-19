import React, { lazy } from "react";
import { allRoutesPath } from "./routesPath";

import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
import LevelPage from "../pages/courseLevel";
import LevelMatrial from "../pages/levelMatrial";
import Upcoming from "../pages/Upcoming";
import RegisterPage from "../pages/auth/register";
import LoginPage from "../pages/auth/login";
import ProfilePage from "../pages/profile/profile";
import ContactPage from "../pages/Contact";
// import HOME from '../pages/HOME';

// add all routes to publicRoute array before login

const publicRoute = [
  {
    path: allRoutesPath.HOME,
    element: <Home />,
  },
  {
    path: allRoutesPath.ABOUT,
    element: <About />,
  },
  {
    path: allRoutesPath.SERVICE,
    element: <Service />,
  },
  {
    path: allRoutesPath.CONTACT,
    element: <ContactPage />,
  },
  {
    path: allRoutesPath.COURSE,
    element: <LevelPage />,
  },
  {
    path: allRoutesPath.COURSE_LEVEL,
    element: <LevelMatrial />,
  },
  {
    path: allRoutesPath.PROFILE,
    element: <ProfilePage />,
  },
  // {
  //   path: allRoutesPath.ERROR,
  //   element: <ErrorPages />,
  //   layout: "blank",
  // },
  // customers/active
  {
    path: "*",
    element: <Upcoming />,
  },
];
const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <RegisterPage />,
  },
  // {
  //   path: "/quiz/:levelID",
  //   element: <QuizPage />,
  // },
];

export { routes, publicRoute };
