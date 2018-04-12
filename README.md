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
