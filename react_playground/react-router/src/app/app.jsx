import React from "react";
import { useRoutes, A } from "hookrouter";
import { About } from "./components/About";
import { Contact } from "./components/Contact.js";
import { Users } from "./components/Users.js";
import { NoPageFound } from "./components/NoPageFound.js";

const routes = {
  '/': () => <Users />,
  '/about': () => <About />,
  '/contact': () => <Contact />,
  '/users/:foo/:bar': ({foo, bar}) => <Users  foo={foo} bar={bar}/>,
};

export const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      {routeResult}
    </div>
  );
}
