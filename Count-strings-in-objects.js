/*
Create a function strCount (takes an object as argument) 
that will count all string values inside an object. 

For example:
  strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
  })
    //returns 3
*/


// Solution

function strCount(obj){
  let count = 0;
  for (key in obj) {
    if (typeof obj[key] == 'string') count++;
    if (typeof obj[key] == 'object') count += strCount(obj[key]);
  }
  return count;
}

// or

function strCount(obj){
  let temp = 0;
  JSON.stringify(obj,(key,value)=>{
      if (typeof value === 'string') {
          temp++
      }
      return value;
  })

  return temp
}