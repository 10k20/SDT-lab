import { Switch, Route } from 'react-router-dom'

import Snake from './Components/Snake/Snake';
import Auth from './Components/authForm/authForm';
import FinalTab from './Components/finalTab/finalTab';
import MainMenu from './Components/mainMenu/mainMenu';
import FAQ from './Components/FAQ/FAQ';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={MainMenu} />
        <Route exact path='/play' component={Snake} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path='/final' component={FinalTab} />
      </Switch>
    </div>
  );
}

export default App;
