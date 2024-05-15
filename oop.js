let baseSalary = 30000
let overTime = 10
let rate = 20

function getWage(baseSalary, overTime, rate){
    totalWage = baseSalary + (overTime * rate)
    return totalWage
}

getWage(baseSalary, overTime, rate);

console.log("Total Earned:", totalWage)