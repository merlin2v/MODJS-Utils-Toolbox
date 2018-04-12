/* 
 * This is a collection of tools made by Merlin2v
 */

/**
 * @example unknownFunction(new PokeyObject())
 *
 * @author Merlin2v
 * @class for testing what a object wants
 * @throws an error to notify that the function may want something
 **/
  /** @constructor
  * @param {*} [base={}] - the objects values 
  */
function PokeyObject(base){
  var handler = {
    get:function(target, property) {
      if (property in target) {
        return target[property];
      }else throw new Error(`wants Property '${property}'`);
    }
  };
	return new Proxy((base||{}),handler);
};
