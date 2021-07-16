
require('dotenv').config()

const Express = require('express')
const App = Express()
const HTTP = require('http')
let mongoose = require('mongoose');
const Utilities = require('./BMI')
const WorkerCon = require('./thread-pools/controller')

const data = require('./data')
let config = require('config');


let options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } },
    useUnifiedTopology: true,
    useNewUrlParser: true
  };

//db connection
mongoose.connect(config.DBHost, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

App.get('/data', async (req, res) => {
  if (process.env.WORKER_POOL_ENABLED === '1') {
    workerPool = WorkerCon.get()
    result = await workerPool.calcBMI(data)
  } else {
    result = await Utilities.calcBMI(data)
  }
    res.send(result)
  })


const port = process.env.PORT
const server = HTTP.createServer(App)

;(async () => {
    // Init Worker Pool
    if (process.env.WORKER_POOL_ENABLED === '1') {
      const options = { minWorkers: 'max' }
      await WorkerCon.init(options)
    }
  
    // Start Server
    server.listen(port, () => {
      console.log('NodeJS BMI: ', port)
    })
  })()

  module.exports = App



