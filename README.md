# MODJS Utils Toolbox
A collection of Utilitys for JavaScript. Designed to allow for Debugging as well as allowing for Addins to script code and modding code.

## List of Classes:
* **WhenExists** - runs code once something exists else it will check back by default every 1000ms.
    * Examples:
    ```javascript
         var foo = {}; 
         setTimeout(()=>{foo.hello="world";},10000); 
         new WhenExists(foo.hello).then(()=>{console.log("hello "+foo.["hello"])}); 
    ```
* ### Object detectors
   lets say you have:
   ```javascript
      function unknownFunction(obj){
         var foo = obj.foo;
         var bar = foo.bar;
         var qux = bar.baz.qux;
         console.log("function done!!");
      }
   ```
   and you run:
   ```javascript
       unknownFunction({})//throws "Uncaught TypeError: Cannot read property 'bar' of undefined"
   ```
   this is a list of difrent types of objects that can be used for mapping out coding functions
   * **SquishyObject** - for testing what a property does.
      * to find out what property calls bar you can use the `SquishyObject`
         ```javascript
            unknownFunction(new SquishyObject())//no direct undefined problems and prints out: function done!!
         ```
         once you are able to do that you can then do:
         ```javascript
             unknownFunction(new PockeyObject({foo:{}}))//throws "Uncaught Error: wants Property 'bar'"
         ```
         and continue this until you have filled in all the values
    * **PokeyObject** - throws an error whenever something undefined is called
      * to find out what property calls bar you can use the `PokeyObject`
         ```javascript
            unknownFunction(new PockeyObject())//throws "Uncaught Error: wants Property 'foo'"
         ```
         once you are able to do that you can then do:
         ```javascript
             unknownFunction(new PockeyObject({foo:{}}))//throws "Uncaught Error: wants Property 'bar'"
         ```
         and continue this until you have filled in all the values
   * **MapperObject** - if `PockyObject` is to slow for you then there is `MapperObject` which tests what a object wants and prints the trails of undefined vars to the console
      * Example:
         ```javascript
            unknownFunction(new MapperObject("top"))
            /* prints out:
            'undefined' wants ' foo '
            'undefined' wants ' bar '
            'undefined' wants ' baz '
            'undefined' wants ' qux '
            function done!!
            */
         ```
         however you wont be able to use the base unless you use it like this
         ```javascript
             unknownFunction(new MapperObject({foo:{bar:{baz:{qux:{}}}}}))//prints only: function done!!
         ```
   * **CartographerObject** - if you don't want to implement the entire thing then you can use `CartographerObject` which is for testing what a object wants and prints the undefined vars to the console unless logKnownProperties is specified(then it prints all vars out);
      * Example:
         ```javascript
            unknownFunction(new CartographerObject("top"));
            /* prints out:
            'top' wants non-existent ' foo '       //as warning
            'foo' wants non-existent ' bar '       //as warning
            'bar' wants non-existent ' baz '       //as warning
            'baz' wants non-existent ' qux '       //as warning
            function done!!
            */
         ```
         if you have some of the variables defined and have `logKnownProperties` as true then it will log `'foo' wants ' bar '`

   * **Cartographer** - `CartographerObject` is usefull however it can, at times, be disorientating. for that we have the `Cartographer`. this is for testing what a object wants and it can print all vars to the console in groups as well as a object representation.
      * Example:
         ```javascript
            var c;
            unknownFunction((c = new Cartographer("top")));//prints out: function done!!
            c.__$printTree(); /* prints out:
            foo
               bar
                  baz
                     qux
                        
            {} //the object
            */
         ```
         if you have some of the variables defined and have `logKnownProperties` as true then it will log `'foo' wants ' bar '`
