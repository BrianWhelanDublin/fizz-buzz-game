describe("My fizzBuzz function", () => {
  describe("Fizz Buzz results", () => {
    it("Should exist", () => {
      expect(fizzBuzz).toBeDefined();
    });
    it("Should return an error if we dont supply a number", () => {
      spyOn(window, "alert");
      fizzBuzz("four");
      expect(window.alert).toHaveBeenCalledWith("Error!");
    });
    it("Should return FizzBuzz", () => {
      expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it("Should return FizzBuzz", () => {
      expect(fizzBuzz(60)).toBe("FizzBuzz");
    });
    it("Should return Fizz", () => {
      expect(fizzBuzz(9)).toBe("Fizz");
    });
    it("Should return Fizz", () => {
      expect(fizzBuzz(333)).toBe("Fizz");
    });
    it("Should return Buzz", () => {
      expect(fizzBuzz(50)).toBe("Buzz");
    });
    it("Should return Buzz", () => {
      expect(fizzBuzz(550)).toBe("Buzz");
    });
      it("Should return itself", () => {
      expect(fizzBuzz(4)).toBe(4);
    });
    it("Should return itself", () => {
      expect(fizzBuzz(448)).toBe(448);
    });
  });
});
