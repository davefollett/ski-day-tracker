const axios = require('axios')
const metadata = require('./mtholly.json')

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

  // const time = metadata.dates[0]
  // const apiURL = `${baseApiUrl}/${key}/${latitude},${longitude},${time}?exclude=currently,hourly,flags`
  // const apiURL = buildApiUrl(metadata.days[0])
  // console.log(apiURL)
  try {
    for (const day of metadata.days) {
      const response = await axios.get(buildApiUrl(day))
      status = response.status
      forecast.days.push(response.data.daily.data[0])
    }

    // const response = await axios.get(apiURL)
    // const response = await axios.get(`${baseApiUrl}/${key}/${latitude},${longitude},${time}`)
    // console.log(response)
    // status = response.status
    // forecast.days.push(response.data.daily.data[0])
    // body = JSON.stringify(response.data)
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