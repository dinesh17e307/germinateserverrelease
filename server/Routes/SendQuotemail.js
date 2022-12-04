const express=require('express')
const sendQuoteMail=require('../controller/SendQuoteMail')
const getPost=require('../controller/getPost')
const router=express.Router();
router.post('/sendQuoteMail',sendQuoteMail.sendQuoteMail)
router.get('/',getPost.todayPost)
module.exports=router
