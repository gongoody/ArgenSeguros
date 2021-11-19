import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home/Home';
import Contacto from './Contact/Contacto';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contacto" component={Contacto}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
