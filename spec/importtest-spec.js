import { okGame } from "../src/javascripts/module/sportMessager";

describe("Mock test for jasmine - test import export works as expected", function () {
   
    it("Create correct message", function () {
      
        expect(okGame("Football")).toEqual("Football ok!");
        
    });

});
