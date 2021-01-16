import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

const RegisterScreen = () => {

  const dispatch = useDispatch();
  // UseSelector brinda el estado de los reducers de Redux
  // Extraer el error
  const { msgError, loading } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: 'mendezaa4417@protonmail.com',
    name: 'IudexSoren',
    password: 'soren616',
    confpassword: 'soren616'
  });

  const { email, name, password, confpassword } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterEmailPasswordName(email, password, name));
      console.log('Success');
    }
  }

  const isFormValid = () => {
    const messages = [];
    if (email.trim().length === 0) {
      messages.push('Email is required');
    } else if (!validator.isEmail(email)) {
      messages.push('Invalid email');
    }
    if (name.trim().length === 0) {
      messages.push('Name is required');
    }
    if (password.trim().length < 8) {
      messages.push('Password must be at least 8 characters');
    } else if (confpassword.trim().length === 0) {
      messages.push('You must confirm your password');
    } else if (!validator.equals(password, confpassword)) {
      messages.push('Passwords do not match');
    }
    if (messages.length > 0) {
      dispatch(setError(messages));

      return false;
    }
    dispatch(removeError());

    return true
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={ handleRegister }>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input mt-1"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange } />
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input mt-1"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange } />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input mt-1"
          value={ password }
          onChange={ handleInputChange } />
        <input
          type="password"
          placeholder="Confirm password"
          name="confpassword"
          className="auth__input mt-1"
          value={ confpassword }
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
          Register
        </button>
        <Link
          to="/auth/login"
          className="link">
            Log in
        </Link>
      </form>
    </>
  )
}

export default RegisterScreen;
