import { Request, Response, NextFunction } from 'express';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.username === '' || req.body.password === '') {
    return res.status(401).json({error: 'Invalid credentials.'})
  } 
  next();
};

export default validateLogin;