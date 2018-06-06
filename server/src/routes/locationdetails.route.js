import {Router} from 'express';
import {ok, badRequest} from './utils';
import {Op} from 'sequelize';
import express from 'express';
import fetch from 'node-fetch';

export const elevation = (req, res) => {

  fetch('https://maps.googleapis.com/maps/api/elevation/json?locations=39.7391536,-104.9847034&key=AIzaSyD9cAvlDLIsGj1EEmifL_NEiOS98IFs_Ak', {
        headers: {'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS', 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'},
  })
  .then(res => res.json())
   .then((json) => {
      var response = json;
      
      console.log(response)
      return response;
    })
    .then(ok(res))
    .catch(badRequest(res));
}

const router = new Router();

router.get("/elevation", elevation);

export default router;
