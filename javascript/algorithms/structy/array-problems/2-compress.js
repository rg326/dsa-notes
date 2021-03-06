const compress = (s) => {
  let result = ''
  let i = 0 //start of streak
  let j = 0 //end of streak
  let char
  
  while(j <= s.length){
    if(s[i]===s[j]){ //check equality shows streak start
      j += 1
    } else {
      num = j - i //distance from pointers indicate chars
      if(num === 1){
        result += s[i]
      } else {
      result += num + s[i]
    }
      i = j
  }
  }
    return result
};

//Optimized solution O(n)
/*
const compress = (s) => {
  let result = []
  let i = 0 //start of streak
  let j = 0 //end of streak
  let char
  
  while(j <= s.length){
    if(s[i]===s[j]){ //check equality shows streak start
      j += 1
    } else {
      num = j - i //distance from pointers indicate chars
      if(num === 1){
        result.push(s[i])
      } else {
      result.push(num, s[i])
    }
      i = j
  }
  }
    return result.join('')
};













module.exports = {
  compress
};

*/












//module.exports = {
//  compress//
};