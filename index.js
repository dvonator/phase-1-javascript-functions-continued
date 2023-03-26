// code your solution here

function saturdayFun(drink = "roller-skate") {
  return `This Saturday, I want to ${drink}!`;
}
saturdayFun("drink alcohol");
saturdayFun();

function mondayWork(workDay = "go to the office") {
  return `This Monday, I will ${workDay}.`;
}

mondayWork("eat chips");
mondayWork();

function wrapAdjective(defaultResponse = "*") {
  function innerFunction(adjective = "special") {
    return `You are ${defaultResponse + adjective + defaultResponse}!`;
  }
  return innerFunction;
}
wrapAdjective("&")("play games");
