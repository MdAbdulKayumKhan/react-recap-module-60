import logo from './logo.svg';
import './App.css';
import Services from './Pages/Home/Services/Services';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Services></Services>
        </Route>
        <Route path="/services">
            <Services></Services>
        </Route>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
