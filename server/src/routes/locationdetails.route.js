import {Router} from 'express';
import {ok, badRequest} from './utils';
import {Op} from 'sequelize';
import express from 'express';
import fetch from 'node-fetch';

export const elevation = (req, res) => {
console.log(req.body)
var url = 'https://maps.googleapis.com/maps/api/elevation/json?locations=' + req.body.lat + ',' + req.body.lng + 
          '&key=AIzaSyD9cAvlDLIsGj1EEmifL_NEiOS98IFs_Ak'
console.log(url)
  fetch(url)
  .then(res => res.json())
   .then((json) => {
      var response = json;
      
      console.log(response)
      return response;
    })
    .then(ok(res))
    .catch(badRequest(res));
}

export const timeZone = (req, res) => {

console.log(req.body)
var url = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + req.body.lat + ',' + req.body.lng + 
          '&timestamp=1458000000&key=AIzaSyBJ3EqnP4kY-eOxSn2B3uOc-tUAaRRES4U'
console.log(url)
  fetch(url)
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

router.post("/elevation", elevation);
router.post("/timezone", timeZone);

export default router;