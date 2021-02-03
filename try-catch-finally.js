class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.message = message
  }
}

class TypeError extends Error {
  constructor(message) {
    super(message)
    this.message = message
  }
}

function saveData(data) {
  const database = []
  if (!data) {
    throw new ValidationError('no data passed')
  }
  if(typeof data !== 'number') {
    throw new TypeError('data must be a number')
  }
  database.push(data)
  console.log(database)
}


function run() {
  try {
    saveData(1)
    saveData('1')
    saveData()
  } catch (e) {
    console.log(e)
  } finally {
    console.log('done')
  }
}
run()