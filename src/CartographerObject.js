/* 
 * This is a collection of tools made by Merlin2v
 */

/**
 * @example unknownFunction(new CartographerObject("my-map"))
 *
 * @author Merlin2v
 * @class for testing what a object wants and prints the undefined vars to the console unless logKnownProperties is specified
 **/
  /** @constructor
  * @param {String} name - the name to identify the top as
  * @param {*} [base={}] - the objects values 
  * @param {Boolean} [logKnownProperties] - whether to log the known  properties or not
  */
  function CartographerObject(name,base,logKnownProperties){
  var handler = {
    get:function(target, property) {
      if (property in target) {
				if(logKnownProperties){console.log(target.___$name+" wants ",property);}
        return new CartographerObject(property,target[property],logKnownProperties);
      }else{
				console.warn("'"+target.___$name+"' wants non-existent '",property,"'");
				return new CartographerObject(property,{},logKnownProperties);
			};
    }
  };
	var obj =(base||{});
	obj.___$name=name; //hopefully this name is never used except by me
	return new Proxy((base||{}),handler);
};
