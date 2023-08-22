import { useContext, useState, useEffect } from 'react';

import styled from '@emotion/styled';

import Button from '../components/Button';
import Input from '../components/Input';
import ErrorText from '../components/ErrorText';
import Loader from '../components/Loader';

import { login } from '../api/login';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';


const CustomDiv = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomForm = styled.form`
  box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px;
  padding: 20px;
  width: 40vh;
  height: 30vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5%;
`

export const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [loginStatus, setLoginStatus] = useState<'' | 'loading' | 'success'>('');

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    failedLogin: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });

    // reset error messages if triggered
    setErrors({
      ...errors,
      [e.target.id]: '',
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoginStatus(() => 'loading');

    // flag check for error
    let error = false;
    
    // the following are simple form validations 
    // which checks if username or password is blank
    if(form.username === '') {
      setErrors((prev) => {
        return {
          ...prev,
          username: 'Username must not be blank',
        }
      });
      error = true;
    }

    if(form.password === '') {
      setErrors((prev) => {
        return {
          ...prev,
          password: 'Password must not be blank',
        }
      });
      error = true;
    }

    // do not continue code below if error flag is true
    if (error) {
      error = false;
      setLoginStatus(() => '');
      return;
    }

    // api call to login
    login(form)
      .then((data) => {
        setLoginStatus(() => '');
        if (!data) {
          setErrors((prev) => {
            return {
              ...prev,
              failedLogin: 'Login Failed! Invalid username or password.',
            }
          });

          // make error disappear after 5 seconds
          setTimeout(() => {
            setErrors({
              ...errors,
              failedLogin: '',
            });
          }, 5000);

        } else {
          // Kept it simple and use sessionStorage for logging in user
          window.sessionStorage.setItem('user', JSON.stringify(data));
          setAuth(data);
          navigate('/');
        }

      });

  };

  return (
    <CustomDiv>
      <CustomForm onSubmit={handleSubmit}>
        <ErrorText errorMessage={errors.failedLogin} />
        <label htmlFor="username">
          Username:
          {' '}
          <Input
            id="username"
            type="text"
            value={form.username}
            onChange={handleFormChange}
          />
        </label>
        <ErrorText errorMessage={errors.username} />
        <br />
        <label htmlFor="password">
          Password:
          {' '}
          <Input
            id="password"
            type="password"
            value={form.password}
            onChange={handleFormChange}
          />
        </label>
        <ErrorText errorMessage={errors.password} />
        <br />
        <Button 
          type="submit"
        >
          {
            loginStatus === ''
            ? <span>Login</span>
            : <Loader />
          }
        </Button>
      </CustomForm>
    </CustomDiv>
  );
};
