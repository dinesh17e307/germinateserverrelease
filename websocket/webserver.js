
//how to run a job or schedule a task using node-secheduler in node js


// do npm i node-schedule

//import node-schedule

const schedule = require('node-schedule');
schedule.scheduleJob('*/2 * * * * *', function ()
{
  console.log(" hello this scheduler form node js")
})
// this will run for every two secs

// if want some other time


*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)