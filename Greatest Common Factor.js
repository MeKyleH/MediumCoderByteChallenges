function GreatestCommonFactor(num1,num2) { 
  //initializes variables for later use
  var smallNum = 0;
  var greatestFactor = 0;
  
  //determines the smaller number
  if (num1 - num2 >= 0){
      var smallNum = num2;
  }else{
      var smallNum = num1;
  }
  
  //checks each number for equal divisibility
  for (var i=1; i<=smallNum; i++){
      if ((num1 % i == 0) && (num2 % i == 0)){
          greatestFactor = i;
      }
  }
  //returns the Greatest Common Factor
  return greatestFactor;       
}
   
