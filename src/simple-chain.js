const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push('( '+value+' )');
    return this;
  },
  removeLink(position) {
    if(position < 0 || typeof position === 'string' || position > this.getLength()){
      this.chain.splice(0, this.getLength())
      throw Error;
    }
    this.chain = this.chain.filter((item, index) => index !== (position - 1));
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
    this.chain.splice(0, this.getLength());
    return str;
  }
};

module.exports = chainMaker;
