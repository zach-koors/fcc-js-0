function getHistory(){
  return document.querySelector('#history-value').innerText;
}
function printHistory(num){
  document.querySelector('#history-value').innerText=num;
}
function getOutput(){
  return document.querySelector('#output-value').innerText;
}
function getFormattedNumber(num){
  var n = Number(num);
  var value = n.toLocaleString('en');
  return value;
}
function printOutput(num){
  document.querySelector('#output-value').innerText=getFormattedNumber(num);
}
