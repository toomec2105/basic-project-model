var index = require ("../src/javascripts/index");

describe('Test numbers adder', function () {
   

    it('Add 2 to 3', function () {
        let sum = index.addTwoNumbersWithLodash(2,3);
        expect(sum).toEqual(5);
    });

});

