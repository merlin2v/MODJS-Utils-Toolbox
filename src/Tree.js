export default {Tree};
var log=true;
var handlerc3 = {
	apply(target, thisArg, argumentsList) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		//console.log(`(${Object.keys(arguments)})`);
    try{return new Tree(Reflect.apply(target, thisArg, argumentsList));
		}catch(e){console.log("err:"+e);return new Tree();};
  },
	construct(target, argumentsList, newTarget) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		try{return new Tree(Reflect.construct(target, argumentsList, newTarget));
		}catch(e){console.log("err:"+e);return new Tree();};
	},//must return object
	defineProperty(target, property, descriptor) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		try{return new Tree(Reflect.defineProperty(target, property, descriptor));
		}catch(e){console.log("err:"+e);return true;};
	},//must return boolean
	deleteProperty(target, property) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		try{return new Tree(Reflect.deleteProperty(target, property));
		}catch(e){console.log("err:"+e);return new Tree(true);};
  },//must return boolean
	enumerate(target) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		try{return new Tree(Reflect.enumerate(target));
		}catch(e){console.log("err:"+e);return new Tree();};
  },
	get:function(target, property, receiver) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		if (property === Symbol.toPrimitive)
      return (hint)=>{
				switch(hint){
					case "number":return 1;
					case "string":return d;
					case "default":return d;
				}
			}
		try{return new Tree(Reflect.get(target, property, receiver));
		}catch(e){console.log("err:"+e);return new Tree();};
  },
	getOwnPropertyDescriptor(target, prop) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		return Reflect.getOwnPropertyDescriptor(target, prop);
		try{return new Tree(Reflect.getOwnPropertyDescriptor(target, prop));
		}catch(e){console.log("err:"+e);return new Tree({});};
	},
	getPrototypeOf(target) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
    try{return new Tree(Reflect.getPrototypeOf(target));
		}catch(e){console.log("err:"+e);return new Tree();};
  }, 
	has(target, prop) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		try{return new Tree(Reflect.has(target, prop));
		}catch(e){console.log("err:"+e);return new Tree();};
	},
	isExtensible(target) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		try{return new Tree(Reflect.isExtensible(target));
		}catch(e){console.log("err:"+e);return new Tree();};
  },
	ownKeys(target) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		try{return new Tree(Reflect.ownKeys(target));
		}catch(e){console.log("err:"+e);return new Tree();};
  },
  preventExtensions(target) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		try{return new Tree(Reflect.preventExtensions(target));
		}catch(e){console.log("err:"+e);return new Tree();};
  },
	set:function(target, property, value, receiver) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		try{return new Tree(Reflect.set(target, property, value, receiver));
		}catch(e){console.log("err:"+e);return new Tree();};
	},
	setPrototypeOf(target, prototype) {
		if(log){log=false;console.group(`${arguments.callee.name}(${Object.keys(arguments)})`);
		try{for(var key of Object.keys(arguments)){
		try{console.log(`\t${key}: ${arguments[key]}`);
		}catch(e){console.warn(`\t${key}: !failed to log due to '${e.message}'`);
		}}}catch(e){console.log(`log failed`);}
		console.groupEnd();log=true;}
		try{console.log(``);}catch(e){console.log(`log failed${this}`);}
		try{return new Tree(Reflect.setPrototypeOf(target, prototype));
		}catch(e){console.log("err:"+e);return new Tree();};
	}
};
function Tree(obj=(()=>{
	var d=()=>{return new Tree();};
	this[Symbol.iterator]=function() {
		return new Tree();
	};
	this[Symbol.toPrimitive]=(hint)=>{
		switch(hint){
			case "number":return 1;
			case "string":return "string";
			case "default":return d;
		}
	;};
	this[Symbol.hasInstance]=(instance)=>{ return true;};
	//d[Symbol.hasInstance]=(instance)=>{ return true;};
	//d.valueOf=()=>{return NaN};
	return d;
})()) {	
	var p=new Proxy(obj, handlerc3);
	/*p[Symbol.toPrimitive]=(hint)=>{
		switch(hint){
			case "number":return 1;
			case "string":return d;
			case "default":return d;
		}
	;};*/
	return p;
}
