import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Affsinistre from './page/Affsinistre';
import Affcontact from './page/Affcontact';


function App() {
  return (
    <>
    <Router>
        <Dashboard />
        <Route exact path="/" component={Affsinistre} />
        <Route  path="/contact" component={Affcontact} />
    </Router>
        
      </>
  );
}

export default App;
