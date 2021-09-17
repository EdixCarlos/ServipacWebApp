import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import UsersBlog from './blogComponents/blogUsers/index'
import AdminBlog from './blogComponents/blogAdmin/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/blog' component={UsersBlog} exact />
        <Route path='/adminblog' component={AdminBlog} exact />
      </Switch>
    </Router>
  );
}

export default App;
 