import express from 'express';
import { userInfo } from './utils';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/whoami', (req, res) => {
  const headers = req.headers;
  const ip = req.ip;
  const data = userInfo(headers, ip);
  res.json(data);
});

router.use((req, res) => {
  res.status(400);
  res.render('404', { title: '404: File Not Found' });
});

router.use((error, req, res, next) => {
  res.status(500);
  res.render('500', { title:'500: Internal Server Error', error: error });
});

export default router;
