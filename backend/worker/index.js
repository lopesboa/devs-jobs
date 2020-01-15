// import { CronJob } from 'cron'
const CronJob = require('cron').CronJob

new CronJob('* * * * * *', function () {
  console.log('You will see this message every 30 min')
}, null, true, 'America/Sao_Paulo')
