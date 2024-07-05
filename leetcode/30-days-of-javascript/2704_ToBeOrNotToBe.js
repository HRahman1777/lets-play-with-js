/*
//create obj
let object = new Object();
object.method1 = function(arg) {
      // some code
}
object.method2 = function(arg) {
      // some code
}
return object;

//throw error
throw new Error("message");
*/

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let res = new Object();
    res.toBe = function(x){
        if(val === x){
            return true;
        }
        throw new Error("Not Equal");
    }
    res.notToBe = function(x){
        if(val !== x){
            return true;
        }
        throw new Error("Equal");
    }

    return res;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// GOOD FOR Runtime and Memory
let res = {
    toBe : (x) => {
        if(val === x){
            return true;
        }
        throw new Error("Not Equal");
    },
    notToBe : (x) => {
        if(val !== x){
            return true;
        }
        throw new Error("Equal");
    }
};