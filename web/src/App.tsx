import { Fragment } from "react";
import { Habit } from "./components/Habit";

import "./styles/global.css";

function App() {
  return (
    <Fragment>
      <Habit completed={3} />
    </Fragment>
  );
}

export default App;
