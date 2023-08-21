import express, { Request, Response } from 'express';

const territories = express.Router();

territories.get('/territories', async (req: Request, res: Response) => {
  try {
    
    const response = await fetch('https://netzwelt-devtest.azurewebsites.net/Territories/All');
    
    const result = await response.json();

    return res.status(200).json(result);

  } catch (err) {
    return res.status(500).json({error: 'Server error.'});
  }

});

export default territories;