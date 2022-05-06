'use strict';
const express=require('express');
var controllerCalcul = require("../controllers/calcul.controller");
const router =express.Router();
router.post('/createEC2Instance',controllerCalcul.createEC2Instance);


module.exports={
    routes:router
}