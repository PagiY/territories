import express, { Request, Response } from 'express';
import validateLogin from '../middlewares/validateLogin.js';

const auth = express.Router();

// login user using an external api
auth.post('/login', 
  validateLogin,
  async (req: Request, res: Response) => {
  try {

    const response = await fetch('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();
    
    // does the resulting data contain a message?
    // if yes, then the credentials are invalid
    if (result?.message) {
      return res.status(401).json(result);
    }

    return res.status(200).json(result);

  } catch (err) {

    return res.status(500).json({error: 'Server error.'});

  }

});

export default auth;