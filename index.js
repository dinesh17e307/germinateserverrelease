const express=require('express');
const app =express();
const cors=require('cors')
const path = require('path')
const sendQuoteMail=require('./server/Routes/SendQuotemail')
const bodayParser=require('body-parser')
const dotenv = require('dotenv');
const sendAdd = require('./server/controller/SendEmail')
const schedule = require('node-schedule');
dotenv.config();
app.use(bodayParser.json())
app.use(bodayParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',sendQuoteMail)

//
// const job = schedule.scheduleJob('*/1000 * * * * *', function(){
//     console.log('The answer to life, the universe, and everything!');
//     sendAdd.sendQuoteMail({temp:'Add',email:'dheena5880@gmail.com'})
// });
app.listen(process.env.PORT || 3001,console.log('connected to 3001...'))