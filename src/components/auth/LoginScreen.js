import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';

const LoginScreen = () => {

  const dispatch = useDispatch();

  const { msgError, loading } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: 'mendezaa4417@protonmail.com',
    password: 'soren616'
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  }

  const isFormValid = () => {
    const messages = [];
    if (email.trim().length === 0) {
      messages.push('Email is required');
    }
    if (password.trim().length === 0) {
      messages.push('Password is required');
    }
    if (messages.length > 0) {
      dispatch(setError(messages));

      return false;
    }
    dispatch(removeError());

    return true
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>
      <form onSubmit={ handleLogin }>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input mt-1"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange } />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input mt-1"
          value={ password }
          onChange={ handleInputChange } />
        {
          (msgError != null) &&
            (<div className="auth__alert-error">
              { msgError.map(
              (err, i) =>
                <p key={ i }>{ err }</p>
              )}
            </div>)
        }
        <button
          type="submit"
          className="btn btn-primary btn-block pointer mb-5 mt-1"
          disabled={ loading } >
          Login
        </button>
        <div className="auth__social-networks">
          <p className="mb-1">Login with...</p>
          <div className="google-btn" onClick={ handleGoogleLogin }>
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link
          to="/auth/register"
          className="link">
            Create an account
        </Link>
      </form>
    </>
  )
}

export default LoginScreen;
