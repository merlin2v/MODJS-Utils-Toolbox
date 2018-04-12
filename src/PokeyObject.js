/* 
 * This is a collection of tools made by Merlin2v
 */

/**
 * @example unknownFunction(new PokeyObject().obj)
 *
 * @author Merlin2v
 * @class for testing what a object wants
 * @throws an error to notify that the function may want something
 **/
  /** @constructor
  * @param {*} [base={}] - the objects values 
  */
PokeyObject(base){
  super();
  this.handler = {
    get(target, property) {
      if (property in target) {
        return target[property];
      }
      throw new Error(`wants Property '${property}'`);
    }
  };
  this.base=base||{};
  this.obj=new Proxy(this.base,this.handler);
};
