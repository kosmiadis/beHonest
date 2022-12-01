const moment = require('moment')

let date = new Date()

setInterval(function () {
    document.querySelector('#date').textContent = moment(date).format('LL')
}, 1000)