const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (Array.isArray(members)) {
		let membersStr = members
						.filter(item => typeof item === 'string')
						.map(item => item.trim().toUpperCase().slice(0,1));
		return membersStr.sort().join('');
	}
	return false;
  
};
