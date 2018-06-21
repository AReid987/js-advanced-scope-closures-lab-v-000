function produceDrivingRange(blockRange) {
  return function(start, end){
    let s = parseInt(start)
    let e = parseInt(end)
    let result = e - s
    if (result > blockRange) {
      let range = result - blockRange
      return `${range} blocks out of range`
    } else if (result < blockRange) {
      let range = blockRange - result
      return `within range by ${range}`
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare * percentage
  }
}

function createDriver(){
  let DriverId = 0

  return class {
    constructor(name){
      this.name = name
      this.id = ++DriverId;
    }
  }
}
