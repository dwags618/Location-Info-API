import express from 'express';
import locationdetails from './locationdetails.route';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/locationdetails', locationdetails);

export default routes;
