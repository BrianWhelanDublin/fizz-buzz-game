describe("My fizzBuzz function", () => {
  describe("Fizz Buzz results", () => {
    it("Should exist", () => {
        expect(fizzBuzz).toBeDefined();
    });
    it("Should return an error if we dont supply a number", ()=>{
        spyOn(window, "alert");
        fizzBuzz("four");
        expect(window.alert).toHaveBeenCalledWith("Error!")
    });
    it("Should return FizzBuzz", ()=>{
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    });
     it("Should return FizzBuzz", ()=>{
        expect(fizzBuzz(60)).toBe("FizzBuzz")
    });

  });
});
