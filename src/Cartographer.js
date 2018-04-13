/* 
 * This is a collection of tools made by Merlin2v
 */

/**
 * @example var c; unknownFunction((c=new Cartographer("my-map"))); c.__$printTree();
 *
 * @author Merlin2v
 * @class for testing what a object wants and prints all vars to the console in groups aswell as a object representation as well
 **/
  /** @constructor
  * @param {String} name - the name to identify the top as
  * @param {*} [base={}] - the objects values
  */
function Cartographer(name,base){
var obj =(base||{});
	obj.___$name=name; //hopefully this name is never used except by me
	this.___$name=name;
	obj.___$tree={};
	var me=this;
	var handler = {
    get:function(target, property) {
      if (property in target) {
				if(property==="___$tree"||property==="__$printTree") return target[property];
				var add = new Cartographer(property,target[property]);
				obj.___$tree[property]={};
				Object.defineProperty(obj.___$tree,property,{get:()=>{return add.___$tree;}});
        return add;
      }else{
				if(property==="___$tree"||property==="__$printTree") return;
				var add = new Cartographer(property,{});
				obj.___$tree[property]={};
				Object.defineProperty(obj.___$tree,property,{get:()=>{return add.___$tree;}});
				return add;
			};
    }
  };
	this.___$name=obj.___$name=name; //hopefully this name is never used except by me
	obj.__$printTree=()=>{
		//var tree = obj.___$tree;
		var a = function(o){
			var keys=Object.keys(o);
			if(keys.length===0)console.log("no keys!!!!!!!!!!!!");
			keys.forEach((key)=>{
				console.group(key);
				a(o[key]);
				console.groupEnd(key);
				//console.log("");
			});
		};
		//eval(obj.___$tree)
		a(obj.___$tree);
		console.log(obj.___$tree);
	};
	return new Proxy(obj,handler);
};
