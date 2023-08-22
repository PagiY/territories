import { useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import ErrorText from '../components/ErrorText';

import { login } from '../api/login';

export const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

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
      return;
    }

    // api call to login
    login(form)
      .then((data) => {
        if (!data) {
          setErrors((prev) => {
            return {
              ...prev,
              failedLogin: 'Login Failed',
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
          console.log(data);
        }

      });
    
  };

  return (
    <div>
      <ErrorText errorMessage={errors.failedLogin} />
      <form onSubmit={handleSubmit}>
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
        <Button 
          type="submit"
          text="Login"
        />
      </form>
    </div>
  );
};
