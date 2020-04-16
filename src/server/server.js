import express from 'express';
import webpack from 'webpack';
import hotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../config/webpack.config';

import routes from "./api/routes";

const config = {
  PORT: 3000,
  HOST: 'localhost'
};

const compiler = webpack(webpackConfig);

const server = express();

server.use(hotMiddleware(compiler));

server.use(express.static('dist'));

server.use("/api", routes);

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
