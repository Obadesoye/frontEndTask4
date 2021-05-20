function convertFahrToCelsius(farenheit){
  let cels = (farenheit -32) * 5/9
  const convertCels = Number(cels.toFixed(4))
  let checkValid = Object.prototype.toString.call(farenheit);
  let pamType = checkValid.slice(8, -1).toLowerCase()

  if(isNaN(farenheit) || pamType === 'boolean' || pamType === 'null' || pamType === 'array' || farenheit === ''){
    return`$JSON.stringify(farenheit)} is not a valid number but a/an ${pamType}`
  }else {
    return convertCels
  }
  
}
console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("0") )
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp: 0}))


function checkYuGiOh(n) {
  function check(val){
    let typeCheck = Object.prototype.toString.call(val).slice(8, -1)
    return pamResult = typeCheck.toLowerCase()
  };
  if(isNaN(n) === true || check(n) === 'nan' || check(n) === 'array' || n < 1 || n === 'undefined' ){
    return `invalid parameter: '$(n)'`
  }else {
    let pamArray = [];
    for(let i =1; i <= n; i++){
      pamArray.push(i)
    }
    let configureArray = pamArray.map(function(num){
      if(num % 2 === 0 && 3 !== 0 && num % 5 !== 0){
        num = 'yu';
      } else if (num % 3 === 0 && num % 2 != 0 && num % 5 !== 0){
        num = 'gi'
      } else if (num % 5 === 0 && num % 2 !== 0 && num % 3 !== 0){
        num = 'oh'
      } else if(num % 2 === 0 && num % 3 === 0 && num % 5 === 0){
        num = 'yu-gi-oh'
      } else if(num % 2 === 0 && num % 3 ===0){
        num = 'yu-gi'
      }else if(num % 3 === 0 && num % 5 ===0){
        num = 'gi-oh'
      }else if(num % 2 === 0 && num % 5 === 0){
        num = 'yu-oh'
      }else{
        num
      }
      return num;
    })
    return configureArray
    console.log(configureArray)
  }
}
  console.log( checkYuGiOh(10))
  console.log(checkYuGiOh("5"))
  console.log(checkYuGiOh("fizzbuzz is meh"))