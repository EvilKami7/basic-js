const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
  	  let N = +sampleActivity;
	  if (typeof N === 'number' && !isNaN(N) && N > 0 && N < 15) {
	  	let k = 0.693/HALF_LIFE_PERIOD;
	  	let t = Math.ceil(Math.log(MODERN_ACTIVITY/N)/k);
	  	return t;
	  }else {
	  	return false;
	  }
  }
  return false;

};
