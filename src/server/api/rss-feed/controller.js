import express from "express";
import axios from "axios";
import { parseString } from 'xml2js';

const { Router } = express;
const router = Router();

router.get('/read', async (req, res, next) => {
  try {
    const resp = await axios.get(req.query.rssUrl, { method: 'GET', headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'text/xml'}});
    const result = await new Promise((resolve, reject) => parseString(resp.data, (err, result) => {
      if (err) {
        reject(err);
      }
      else resolve(result);
    }));
    res.status(200).send(JSON.stringify(result));
    next();
  } catch (e) {
    next(e);
  }
});

module.exports = router;