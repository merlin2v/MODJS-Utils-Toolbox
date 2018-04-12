/* 
 * This is a collection of tools made by Merlin2v
 */

/**
 * @author Merlin2v
 * @class for testing the existence of something
 * @extends Promise
 **/
class WhenExists extends Promise{
    /** @constructor
     * @author Merlin2v
     * @param {*} exists 
     * @param {number} [time=1000] - time to recheck
     * @param {function|number} [expires] - indicates when to stop. returning true will stop
     * **/
    constructor(exists,time,expires){
        this.wait = time||1000;
        this.ticks=0;
        //find expires first to make less expensive 
        if(typeof expires === "function"){
            this._expires = (ticks,reject)=>{expires(ticks,reject);};
        }else if(typeof expires === "number"){//then max
            this._expires = (ticks,reject)=>{if(ticks>expires)reject();};
        }else{
            this.expire=()=>{};
        }
        super((accept,reject)=>{
        (test=()=>{
            //console.count("Promise Counter");
            if(this._expires(this.ticks,reject))reject();
            if(exists()){
                accept();
            }else{
                setTimeout(test,this.wait);
            }
        })();
        return;
        });
    };
}