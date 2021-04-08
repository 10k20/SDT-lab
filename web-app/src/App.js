import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Header from './Components/Header/Header';
import Snake from './Components/Snake/Snake';
import SignUp from './Components/signUp/signUp';
import SignIn from './Components/signIn/signIn';
import FinalTab from './Components/finalTab/finalTab';
import MainMenu from './Components/mainMenu/mainMenu';
import MainMenuAuthorized from './Components/mainMenuAuthorized/mainMenuAuthorized';
import Scores from './Components/Scores/Scores';
import FAQ from './Components/FAQ/FAQ';


const App = (props) => {
  console.log(props)
  return (
      <div className="App"> 
          <Header 
            login={props.login} 
            authorized={props.authorized} 
          />
          <Switch>
            <Route exact path='/' component={() => props.authorized ? <MainMenuAuthorized
              setAuthLogin={props.setAuthLogin} 
              setAuthStatus={props.setAuthStatus}
            />
            :
            <MainMenu/>
            }
            />
            <Route exact path='/play'
              render={() => (
                props.login ? (
                  <Snake 
                  login={props.login} 
                  authorized={props.authorized}
                  lastScore={props.lastScore}
                  setLastScore={props.setLastScore}/>
                ) : (
                  <Redirect to="/"/>
                )
              )}
            />
            <Route exact path='/sign-up' component={() => 
              <SignUp  
                setAuthLogin={props.setAuthLogin} 
                setAuthStatus={props.setAuthStatus}
              />} 
            />
            <Route exact path='/sign-in' component={() => 
              <SignIn
                setAuthLogin={props.setAuthLogin} 
                setAuthStatus={props.setAuthStatus}
              />}  
            />
            <Route exact path='/faq' component={FAQ} />
            <Route exact path='/final' component={FinalTab} />
            <Route exact path='/scores' component={Scores} />
          </Switch>
      </div>
  );
}

export default App