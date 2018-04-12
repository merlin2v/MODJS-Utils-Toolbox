function SquishyObject(base){
  var handler = {
    get:function(target, property) {
      if (property in target) {
        return target[property];
      }else return new SquishyObject();
    }
  };
	return new Proxy((base||{}),handler);
};
