import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './Components/Header/Header';
import Snake from './Components/Snake/Snake';
import SignUp from './Components/signUp/signUp';
import SignIn from './Components/signIn/signIn';
import FinalTab from './Components/finalTab/finalTab';
import MainMenu from './Components/mainMenu/mainMenu';
import MainMenuAuthorized from './Components/mainMenuAuthorized/mainMenuAuthorized';
import FAQ from './Components/FAQ/FAQ';


const App = (props) => {
  console.log(props)
  return (
      <div className="App"> 
          <Header />
          <Switch>
            <Route exact path='/' component={MainMenu} />
            <Route exact path='/play' component={Snake} />
            <Route exact path='/sign-up' component={() => 
              <SignUp 
                login={props.login} 
                authorized={props.authorized} 
                setAuthLogin={props.setAuthLogin} 
                setAuthStatus={props.setAuthStatus}
              />} 
            />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/faq' component={FAQ} />
            <Route exact path='/final' component={FinalTab} />
            <Route exact path='/authorized' component={MainMenuAuthorized} />
          </Switch>
      </div>
  );
}

export default App