const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let arrayString = [];
  let addString = [];
  let repeatTime = options.repeatTimes ? options.repeatTimes : 1;
  let addRepeatTime = 0;
  if (typeof options.addition !== 'undefined') addRepeatTime = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  for (let j = 0; j< addRepeatTime; j++){
    addString.push(String(options.addition));
  }
  for (let i = 0; i < repeatTime; i++ ){
    arrayString.push(String(str));
  }
  let optionSeparator = options.separator ? options.separator : '+'
  let addStr = addString.join(options.additionSeparator ? options.additionSeparator : '|');
  let addSeparator = addStr ? (addStr + optionSeparator) : optionSeparator;
  return arrayString.join(addSeparator) + addStr;
};
