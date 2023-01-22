import { Fragment } from "react";
import { Habit } from "./components/Habit";

// fragments
function App() {
  return (
    <Fragment>
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
    </Fragment>
  );
}

export default App;
