import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {Fade} from 'react-awesome-reveal'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Footer} from './components/Footer/Footer';
import Bottom from './components/Bottom/Bottom';
import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './redux/userSlice';
import { useEffect } from 'react';
import { auth } from './Firebase/firebase';
import SignUp from './components/SignUp/SignUp';
import Menu from './components/Menu/Menu';
import FeaturedScreen from './components/FeaturedScreen/FeaturedScreen';


function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  // ıf you refresh the page you wont be offline you still online.
  // ıf you want to logout just click logout
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        // user is signed in - kullanıcı giriş yaptıysa
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  },[dispatch])

  return (
    <div className="App">
    <Router>
      
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Fade>
              <Footer/>
              <Bottom/>
            </Fade>
          </Route>
          <Route exact path="/account/signin">
            {/*If user connected before. Redirect push to menu otherwise login page is going to open */}
            {user ? <Redirect to="/menu"/> : <Login/>}
          </Route>
          <Route exact path="/account/signup">
            {/*If user connected before. Redirect push to menu otherwise login page is going to open */}
            {user ? <Redirect to="/menu"/> : <SignUp/>}
          </Route>
          <Route exact path="/menu">
            {!user ? (
              <Redirect to="/account/signin"/>
            ) : (
              <>
              <Header menuPage/>
              <Menu/>
              </>
            )}
          </Route>

          <Route exact path="/menu/featured">

              <Header/>
              <FeaturedScreen/>
              <Fade>
                <Footer/>
                <Bottom/>
              </Fade>
          </Route>
        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
