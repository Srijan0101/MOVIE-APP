import './App.css';
import Header from "./components/Header/Header.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SimpleBottomNavigation from './components/MainNav';
import {Container} from "@material-ui/core";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">

        {/* React router to switch between pages */}
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact/>
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>

      <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
