import express from 'express';
import webpack from "webpack";
import hotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../config/webpack.config";

const config = {
  PORT: 3000,
  HOST: 'localhost'
};

const compiler = webpack(webpackConfig);

const server = express();

server.use(hotMiddleware(compiler));

server.use(express.static('dist'));
server.get('/api/rssFeed', async (req, res) => {
  try {
    const resp = await fetch(req.query.rssUrl, { method: "GET", headers: { "Content-Type": "application/json" } });
    return await resp.text();
  } catch (e) {
    res.sendStatus(500);
  }
});

// Prepare to receive requests.
server.listen(config.PORT, config.HOST, err => {
  if (err) throw err;

  console.log('Listening at http://' + config.HOST + ':' + config.PORT);
});
