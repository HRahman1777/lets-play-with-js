/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initv = init;
    let res = {
        increment : () => ++initv,
        decrement : () => --initv,
        reset : () => (initv = init)
    }
    return res;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */