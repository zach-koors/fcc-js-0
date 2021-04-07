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
  if (num==''){
    document.querySelector('#output-value').innertext=num;
  } else {
    document.querySelector('#output-value').innerText=getFormattedNumber(num);
  }
}
function revFormattedNumber(num){
  return Number(num.replace(/,/g,''));
}

var operator = document.querySelectorAll('.operator');
for (var i = 0; i < operator.length; i++){
  operator[i].addEventListener('click', function(){
    if (this.id == 'clear'){
      printHistory('');
      printOutput('');
    }
    else if (this.id == 'backspace'){
      var output = revFormattedNumber(getOutput).toString();
      if(output){
        output = output.substr(0, output.length-1);
        printOutput(output);
      }
    }
  });
}
var number = document.querySelectorAll('.number');
for (var i = 0; i < number.length; i++){
  number[i].addEventListener('click', function(){
    var output = revFormattedNumber(getOutput());
    if (output!= NaN){
      output=output+this.id;
      printOutput(output);
    }
  });
}
