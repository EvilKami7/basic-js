const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
  	let depth = 0;
  	if(Array.isArray(arr)){
  		depth ++;
  		if(arr.length > 0) {
  			depth += Math.max.apply(null, arr.map(item => this.calculateDepth(item)));
  		}
  	}
  	return depth;
  	/*return Array.isArray(arr) ? 1 + Math.max(...arr.map(item => this.calculateDepth(item))) : 0;*/
  }
};