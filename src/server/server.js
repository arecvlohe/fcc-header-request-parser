import express from 'express';
import config from '../../config';
import { userInfo } from './utils';
import router from './routes';

const app = express();

app.set('views', './src/views');
app.set('view engine', 'jade');

app.use('/', router);

app.listen(config.port, (err) => {
  if (err)
    console.log(err);
  else
    console.log('%s running on http://%s:%d', config.app.name, config.hostname, config.port);
});
