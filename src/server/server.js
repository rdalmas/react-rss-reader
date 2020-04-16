import express from 'express';
import webpack from 'webpack';
import hotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../config/webpack.config';
import axios from 'axios';
import { parseString } from 'xml2js';

const config = {
  PORT: 3000,
  HOST: 'localhost'
};

const compiler = webpack(webpackConfig);

const server = express();

server.use(hotMiddleware(compiler));

server.use(express.static('dist'));

server.get('/api/rssFeed', async (req, res, next) => {
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

// ERROR HANDLING
server.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

server.listen(config.PORT, config.HOST, err => {
  if (err) throw err;
  console.log('Listening at http://' + config.HOST + ':' + config.PORT);
});
