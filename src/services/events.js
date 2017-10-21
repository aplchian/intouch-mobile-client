
const { base } = require('../config.js')
const axios = require("axios")

module.exports = {
  getAllEvents
}

function getAllEvents(band) {
  return axios(`${base}/events/${band}`)
}
