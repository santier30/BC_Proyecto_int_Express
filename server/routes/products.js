const express = require('express')
const controlers = require('../controlers/productsControlers')
const router = express.Router();

const {getWinesData, postNewItem,modulate,validate,getWinesDataMidle,filterWines,getKnowData,getExclusiveData,getItem} = controlers

router.get('/Shop',getWinesData)

router.get('/Know',getKnowData)

router.get('/Exclusive',getExclusiveData)

router.post('/Add',modulate, validate,postNewItem)

router.get('/Filter', getWinesDataMidle, filterWines)

router.get('/Buy/:wine',getItem)



module.exports = router;