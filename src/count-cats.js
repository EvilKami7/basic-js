const CustomError = require("../extensions/custom-error");

module.exports = function countCats( array ) {
  	let catsCount = 0;
  	array.forEach(item => 
  		item.forEach(elem => elem==='^^' ? catsCount++ : catsCount));
  	return catsCount;
};

