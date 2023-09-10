import {Routes, Route } from "react-router-dom";
import HomePage from "./view/page/Home";
import Details from "./view/app/Details";
import Index from './view/app/index'
type Props = {};

function App({}: Props) {
  return (
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/app/dashboard" Component={Index} />
          <Route path="/app/details/:id" Component={Details} />
        </Routes>
  );
}

export default App;
