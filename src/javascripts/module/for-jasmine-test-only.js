 // add this comment at the top to modify the given rule on this page  ---> /* eslint no-console: 0 */

 // unncomment to test eslint CTRL SHIFT A
 /* console.log("Javascript connected");
const myvar = 1; */


// -------------- test jasmine -----------------------
const _ = require("lodash");

 function addTwoNumbersWithLodash(num1, num2) {
        return _.add(num1, num2);
 }
module.exports = {
    addTwoNumbersWithLodash
};