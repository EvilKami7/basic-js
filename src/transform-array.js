const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformArray = arr.flatMap((item, index, array) => {
  	let result = [item];
	if (array[index - 1] === '--double-next') result.push(item);
	if (array[index - 1] === '--discard-next') result.pop();
	if (array[index + 1] === '--double-prev' && result.length) result.push(result[0]);
	if (array[index + 1] === '--discard-prev') result.pop();
	if (item.toString().startsWith('--d')) return [];
	return result;
  })
  return transformArray;

};
