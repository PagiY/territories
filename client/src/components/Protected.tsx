import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

/**
 * We will use this to protect our views and 
 * navigate back to login when there's no token
*/
const Protected = ({ children } : { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  
  useEffect(() => {
    if (auth === undefined) {
      navigate('/account/login'); // Redirect to /account/login
    }
  }, [navigate, auth]);

  return (
    <>
      {children}
    </>
  );
};

export default Protected;
