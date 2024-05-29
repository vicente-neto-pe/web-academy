const { firstName, calculateTotalPrice, verifyStockAvailability } = require("./validations");

describe("firstName", () => {
  it("should return the first name when there is just one space in the full name", () => {
    expect(firstName("José Couves")).toBe("José");
  });

  it("should return the full name when there are no spaces", () => {
    expect(firstName("José")).toBe("José");
  });

  it("should return the first name in a full name with more than one space", () => {
    expect(firstName(" José das couves calça quadrada ")).toBe("José");
  });
});

describe("verifyStockAvailability", () => {
  it("should return true when desired quantity of the specified product type is available in stock", () => {
    expect(verifyStockAvailability("laptop", 5)).toBe(true);
  });

  it("should return false when desired quantity of the specified product type is not available in stock", () => {
    expect(verifyStockAvailability("headphone", 6)).toBe(false);
  });

  it("should return false when product is not available in stock", () => {
    expect(verifyStockAvailability("book", 1)).toBe(false);
  });

  it("should return true when desired quantity is equal to the available quantity in stock", () => {
    expect(verifyStockAvailability("tablet", 15)).toBe(true);
  });

  it("should return false when product type does not exist in stock", () => {
    expect(verifyStockAvailability("sofa", 1)).toBe(false);
  });
});

describe("calculateTotalPrice", () => {
  it("should correctly calculate the total price of a list of products", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 2 },
      { name: "Product 2", price: 15, quantity: 2 },
      { name: "Product 3", price: 20, quantity: 1 },
    ];
    expect(calculateTotalPrice(products)).toBe(70);
  });

  it("should return 0 when product is a empty list", () => {
    const products = [];
    expect(calculateTotalPrice(products)).toBe(0);
  });

  it("should correctly calculate the total price for just one product", () => {
    const product = [{ name: "Product 1", price: 10, quantity: 1 }];
    expect(calculateTotalPrice(product)).toBe(10);
  });

  it("should correctly calculate the total price for products with zero quantity", () => {
    const products = [
      { name: "Product 1", price: 10, quantity: 0 },
      { name: "Product 2", price: 15, quantity: 0 },
    ];
    expect(calculateTotalPrice(products)).toBe(0);
  });
});
