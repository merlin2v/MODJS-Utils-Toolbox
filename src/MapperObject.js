/* 
 * This is a collection of tools made by Merlin2v
 */

/**
 * @example unknownFunction(new MapperObject("my-map"))
 *
 * @author Merlin2v
 * @class for testing what a object wants and prints the trails of undefined vars to the console
 **/
  /** @constructor
  * @param {String} name - the name to identify the top as
  * @param {*} [base={}] - the objects values 
  */
  function MapperObject(name,base){
  var handler = {
    get:function(target, property) {
      if (property in target) {
        return target[property];
      }else{
				console.log("'"+target.___$name+"' wants '",property,"'");
				return new MapperObject(property);
			};
    }
  };
	var obj =(base||{});
	obj.___$name=name; //hopefully this name is never used except by me
	return new Proxy((base||{}),handler);
};
