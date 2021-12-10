function isPrime(num) {
    if(num < 2) return false;
  
    for (let k = 2; k < num; k++){
      if( num % k == 0){
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(29));