/*eslint-env node, jasmine */

const index = require ("../src/javascripts/module/for-jasmine-test-only");

describe("Mock test for jasmine", function () {
   
    it("Add 2 to 3", function () {
        let sum = index.addTwoNumbersWithLodash(2,3);
        expect(sum).toEqual(5);
    });

});

