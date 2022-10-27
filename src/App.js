import React,{useContext} from "react"
import { Switch, Route ,Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authCtx.isloggedIn && (<Route path='/auth'>
          <AuthPage />
        </Route>
        )}
        
        <Route path='/profile'>
           {authCtx.isloggedIn && <UserProfile /> }
           {!authCtx.isLoggedIn && <Redirect to="/auth"/>}
        </Route>
        
        <Route path="*">
          <Redirect to='/' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
