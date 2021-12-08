//Pages
import { Home } from "./pages/Home";
import { TopTracks } from "./pages/TopTracks";
import { TopArtists } from "./pages/TopArtists";
import { TopDashboard } from "./pages/TopDashboard";
import { Legal } from "./pages/Legal";

import { Logo } from "./components/Logo";
import Login from "./components/Login";
import Profile from "./components/Profile";

//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  
//CSS
import './css/App.css';
import './css/RecentlyPlayed.css';

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <Router>
      <header>
        <div className="header_flex_logo">
          <Link to="/"><Logo className="header_logo"></Logo></Link>
        </div>
        <ul className="header_flex_nav">
          <li className="header_nav">
            <Link to="/TopTracks"><p>Top Tracks</p></Link>
          </li>
          <li className="header_nav">
            <Link to="/TopArtists"><p>Top Artists</p></Link>
          </li>
          <li className="header_nav">
            <Link to="/TopDashboard"><p>Dashboard</p></Link>
          </li>
        </ul>
        {localStorage.getItem("accessToken") != null ? <Profile code={ code }/> : <Login/>}

      </header>

      <main>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/TopTracks">
            <TopTracks/>
          </Route>
          <Route path="/TopArtists">
            <TopArtists/>
          </Route>
          <Route path="/TopDashboard">
            <TopDashboard/>
          </Route>
          <Route path="/Legal">
            <Legal />
          </Route>
        </Switch>
      </main>

      <footer>
        <div className="footer_grid_logo">
          <Link to="/"><Logo className="header_logo"></Logo></Link>
        </div>
        <div className="footer_grid_socials">
          <h1></h1>
        </div>
        <div className="footer_grid_links">
          <Link to="/Legal"><p className="footer_legal">Legal</p></Link>
        </div>
      </footer>
    </Router>
  );
}

export default App