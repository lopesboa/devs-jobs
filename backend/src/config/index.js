// import { CronJob } from 'cron'
const CronJob = require('cron').CronJob

const fetchData = require('./fetchData')

new CronJob('* * * * *', fetchData.getData, null, true, 'America/Sao_Paulo')
