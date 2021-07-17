const temp = require('node-schedule')

const regra = new temp.RecurrenceRule()
regra.dayOfWeek = new temp.Range(1,5)
regra.hour = 08
regra.minute = 00
regra.second = 00

const lembrete = temp.scheduleJob(regra,function (){ console.log('tomar remedio')})

