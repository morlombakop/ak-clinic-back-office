/* eslint-disable no-return-assign */
export default class Base {
  constructor(args) {
    const inject = this.constructor.$inject || [];
    inject.forEach((key, index) => this[`_${key}`] = args[index]);
  }
}
