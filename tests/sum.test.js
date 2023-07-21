const { iteratee } = require("underscore");
const add = require("../sum");
//const { Sum, Subtract, Multiply } = require("../sum");
describe("Sum", () => {
  it("Should sum", () => {
    const ade = add.Sum(2, 7);
    //const ade= Sum(2,7);
    expect(ade).toBeGreaterThan(8);
  });

  it("Should subtract", () => {
    const ade = add.Subtract(18, 5);
    expect(ade).toBe(13);
  });

  it("Should multiply", () => {
    const ade = add.Multiply(3, 6);
    expect(ade).toBeGreaterThan(15);
  });
});
