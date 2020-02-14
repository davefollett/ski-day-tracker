[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-green.svg)](https://standardjs.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4dee31d9-cf78-45e7-8ac9-7294e5bc5c08/deploy-status)](https://app.netlify.com/sites/ski-day-tracker/deploys)

# Ski Day Tacker

Ski Day Tracker is a personal project I created to track the weather forecast of particular dates for skiing.  This project makes use of the following technologies:
* [VueJS](https://vuejs.org/)
* [Vuetify UI library](https://vuetifyjs.com/)
* [Netlify hosting](https://www.netlify.com/)
* [Netlify serverless functions](https://www.netlify.com/products/functions/)
* [Dark Sky weather API](https://darksky.net/dev)

## Setup Local Development Environment

### Prerequisites 

* [Node.js](https://nodejs.org/en/) version 10 or higher
* A [Dark Ski API](https://darksky.net/dev) account

### Global Package Installation

```
npm install -g @vue/cli
npm install netlify-cli -g
```

### Project Package Installation

```
cd ski-day-tracker/
npm install
```

### Run Local Development 

The following commands will start the local instances of the Vue front-end and the netlify serverless functions.  The front-end can be accessed at http://localhost:8888.

```
export DARK_SKY_API_KEY="YOUR_DARK_SKI_API_KEY"
netlify dev
```

