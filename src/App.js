import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Fade} from 'react-awesome-reveal'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Fade>
              <Footer/>
            </Fade>
          </Route>
        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
