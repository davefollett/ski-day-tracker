const axios = require('axios')
const metadata = require('./boyne.json')

const baseApiUrl = 'https://api.darksky.net/forecast'
const key = process.env.DARK_SKY_API_KEY
const latitude = metadata.location.latitude
const longitude = metadata.location.longitude

function buildApiUrl (date) {
  return `${baseApiUrl}/${key}/${latitude},${longitude},${date}?exclude=currently,hourly,flags`
}

exports.handler = async (event, context) => {
  let status = 200
  let body = ''

  let forecast = {
    name: metadata.name,
    location: {
      latitude: metadata.location.latitude,
      longitude: metadata.location.longitude
    },
    days: []
  }

  try {
    // Using for of instead of forEach because of the await inside the loop
    for (const day of metadata.days) {
      const response = await axios.get(buildApiUrl(day))
      status = response.status
      forecast.days.push(response.data.daily.data[0])
    }

    body = JSON.stringify(forecast)
  } catch (error) {
    status = error.response.status
    body = error.response.statusText
  }

  return {
    statusCode: status,
    body: body
  }
}
