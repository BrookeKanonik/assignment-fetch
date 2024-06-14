const express = require('express')
const router = express.Router()
const receiptController = require('../controllers/receipts') 

router.post('/receipts/process', receiptController.postId) 
router.get('/receipts/:id/points', receiptController.getPoints) 

module.exports = router