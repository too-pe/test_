import {Switch,Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home.js'
import User from './pages/User/User.js'
export default function Irouter() { 
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/User" component={User}></Route>
      </Switch> 
   </BrowserRouter>
  );
}