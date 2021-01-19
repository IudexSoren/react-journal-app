import { useEffect, useState } from 'react';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { login } from '../actions/auth';
import LoadingScreen from '../components/loading/LoadingScreen';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';

const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mantener sesión del usuario
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async(user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  // Se mostrará este componente mientras se estén analizando los datos para la autenticación
  if (checking) {
    return (
      <LoadingScreen/>
    )
  }

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRoute isAuthenticated={ isLoggedIn } path='/auth' component={ AuthRouter } />
            <PrivateRoute isAuthenticated={ isLoggedIn } path='/' component={ JournalScreen } exact />

            <Redirect to='/auth/login' />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default AppRouter
