const express = require('express');
const houseRouter = express.Router();
const {create,list,update, remove} = require ('../controller/house.controller');


houseRouter.post('/add', create);
houseRouter.get('/list', list);
houseRouter.put('/update', update);
houseRouter.delete('/delete', remove);

module.exports = houseRouter;