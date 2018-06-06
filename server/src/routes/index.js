import express from 'express';
import matchdetails from './matchdetails.route';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/matchdetails', matchdetails);

export default routes;
