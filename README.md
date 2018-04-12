# MODJS Utils Toolbox
A collection of Utilitys for JavaScript. Designed to allow for Debugging as well as allowing for Addins to script code and modding code.

## List of Classes:
* WhenExists - runs code once something exists else it will check back by default every 1000ms.
    * Examples:
    ```javascript
         var foo = {}; 
         setTimeout(()=>{foo.hello="world";},10000); 
         new WhenExists(foo.hello).then(()=>{console.log("hello "+foo.["hello"])}); 
    ```
* PokeyObject - throws an error whenever something undefined is called
    * Examples:
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
   to find out the wanted value of bar you can use `PokeyObject`
   ```javascript
          unknownFunction(new PockeyObject())//throws "Uncaught Error: wants Property 'foo'"
    ```
