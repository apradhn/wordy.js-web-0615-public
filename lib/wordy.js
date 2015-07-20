'use strict';

function WordProblem(question){
  this.operands = setOperands(question);
  this.operators = setOperators(question);
}

WordProblem.prototype.answer = function(){
  var operation = '';
  var answer;

  try {
    answer = performOperation(this.operands, this.operators);
    return answer;
  } catch(e) {
    throw new ArgumentError;
  }

};

function ArgumentError(){}

function performOperation(operands, operators) {
  var answer;

  for (var i = 0; i < operators.length; i++) {
    if(!i) {
      answer = eval(operands[i] + ' ' + operators[i] + ' ' + operands[i+1]);
    } else {
      answer = eval(answer + ' ' + operators[i] + ' ' + operands[i+1]);
    }
  };

  return answer;
}

function setOperands(question) {
  var operands;
  var match;

  match = question.match(/-?\d+/g);
  if (match) operands = match;

  return operands;
}

function setOperators(question) {
  var operators;
  var match;

  match = question.match(/plus|minus|divided by|multiplied by/g);

  operators = replaceOperators(match);

  return operators;
}

function replaceOperators(strings) {
  var symbols = [];
  var string;
  var symbol;

  if (strings) {
    for (var i = 0; i < strings.length; i++) {
      string = strings[i]
      symbol = string.replace("plus", "+")
      .replace("minus", "-")
      .replace("divided by", "/")
      .replace("multiplied by", "*");
      symbols.push(symbol);
    };   
  } else {
    symbols = null;
  }

  return symbols;
}
