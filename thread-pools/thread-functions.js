const WorkerPool = require('workerpool')
const Utilities = require('../BMI')

// MIDDLEWARE FUNCTIONS
const calcBMI = (data) => {
  return Utilities.calcBMI(data)
}

// CREATE WORKERS
WorkerPool.worker({
  calcBMI
})