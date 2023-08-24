import express, { Request, Response } from 'express';
import { unflatten } from '../helpers/unflatten.js';
const territories = express.Router();

territories.get('/territories', async (req: Request, res: Response) => {
  try {

    const response = await fetch('https://netzwelt-devtest.azurewebsites.net/Territories/All');

    const result = await response.json();

    // we need to rearrange the result
    const newResult = unflatten(result.data);

    return res.status(200).json(newResult);

  } catch (err) {
    return res.status(500).json({error: 'Server error.'});
  }

});

export default territories;