var numList = "1,3,6,7,8,12,13,14,15,21,22,23,24,31"
var newList = numList.split(',').map(Number);
var result = newList.reduce((arr, val, i, a) => {
  if (!i || val !== a[i - 1] + 1) arr.push([]);
  arr[arr.length - 1].push(val);
  return arr;
}, []);

let numberSummarized = []
result.forEach(function(arrayNum){
  if(arrayNum.length > 1){
      var startRange = Math.min(...arrayNum);
      var endRange = Math.max(...arrayNum);
      var range = startRange+ "-"+endRange;
      numberSummarized.push(range);
  }
  else{
      var starToEnd = arrayNum[0];
      numberSummarized.push(starToEnd);
  }
})
console.log(numberSummarized.join());