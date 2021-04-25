import axios from 'axios';
import express from 'express';
import Country from './model/Country';
import research from './util/Researcher';

const router = express.Router();

router.get('/', async function (req: express.Request, res: express.Response) {
  let search = req.query.search;
  if (search != undefined) {
    try {
      let countries: Country[] = await research(String(search));
      res.render(__dirname + '/pages/index.ejs', { countries });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.render(__dirname + '/pages/index.ejs', { countries: [] });
  }
});

export default router;