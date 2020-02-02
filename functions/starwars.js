const axios = require('axios')
const people = require('./people.json')

exports.handler = async (event, context) => {
  let status = 200
  let body = ''

  try {
    const response = await axios.get(`https://swapi.co/api/people/${people.id}`)
    // console.log(response)
    status = response.status
    body = JSON.stringify(response.data)
  } catch (error) {
    status = error.response.status
    body = error.response.statusText
  }

  return {
    statusCode: status,
    body: body
  }
}
