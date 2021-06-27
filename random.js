function Random(min, max){
  return Math.round(Math.random() * (max - min)) + min;
  }

var codes = "0123456789";
var length = codes.length;
const my_set = new Set();
console.log(length);

for (var i=0; i < 10;i++){

  index_before = Random(0, length-1);
  index_after = index_before;


  code = codes.charAt(index_before);

  for (var j=0; j < 5; j++){
      while (index_before == index_after){
      index_after = Random(0, length-1);
      }
  index_before = index_after
  code = code + codes.charAt(index_after);
    
  }
  console.log(code);

  my_set.add(code);
}

count = 0;
for (const value of my_set)
{
  count += 1;
  if (count > 30){
      break;}
  console.log(value);
}


function  randomNumber() {
  
}