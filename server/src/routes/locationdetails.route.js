import {Router} from 'express';
import {ok, badRequest} from './utils';
import {Op} from 'sequelize';
import express from 'express';
import fetch from 'node-fetch';

export const elevation = (req, res) => {
  var url = 'https://maps.googleapis.com/maps/api/elevation/json?locations=' + req.body.lat + ',' + req.body.lng + 
            '&key=AIzaSyD9cAvlDLIsGj1EEmifL_NEiOS98IFs_Ak'
  fetch(url)
  .then(res => res.json())
  .then((json) => {
    var response = json;
    return response;
  })
  .then(ok(res))
  .catch(badRequest(res));
}

export const timeZone = (req, res) => {
  var url = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + req.body.lat + ',' + req.body.lng + 
            '&timestamp=1458000000&key=AIzaSyBJ3EqnP4kY-eOxSn2B3uOc-tUAaRRES4U'
  fetch(url)
  .then(res => res.json())
  .then((json) => {
    var response = json;
    return response;
  })
  .then(ok(res))
  .catch(badRequest(res));
}

export const weather = (req, res) => {
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + req.body.lat + '&lon=' + req.body.lng +
            '&APPID=c1af22db1c2deab29c6288c434671629'
  fetch(url)
  .then(res => res.json())
  .then((json) => {
    var response = json;
    return response;
  })
  .then(ok(res))
  .catch(badRequest(res));
}

const router = new Router();

router.post("/elevation", elevation);
router.post("/timezone", timeZone);
router.post("/weather", weather);

export default router;