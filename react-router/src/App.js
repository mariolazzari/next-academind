import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/Layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
