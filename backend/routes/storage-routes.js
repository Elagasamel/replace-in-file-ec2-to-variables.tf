'use strict';
const express=require('express');
var controllerStorage = require("../controllers/storage.controller");
const router =express.Router();
router.post('/createBucket',controllerStorage.createBucket);


module.exports={
    routes:router
}