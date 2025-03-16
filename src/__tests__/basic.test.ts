import { Cart } from "../cart";

  test('', () => {
    const cart = new Cart();
    cart.add({
      id: 100,
      name: "X",
      price: 1000
    });
    cart.add({
      id: 101,
      name: "Y",
      price: 1010
    });
    expect(cart.sum()).toBe(2010);
  });
  test('', () => {
    const cart = new Cart();
    cart.add({
      id: 100,
      name: "X",
      price: 1000
    });
    cart.add({
      id: 101,
      name: "Y",
      price: 1010
    });
    expect(cart.discountSum(10)).toBe(1809);
  });
  test('', () => {
    const cart = new Cart();
    cart.add({
      id: 100,
      name: "X",
      price: 1000
    });
    cart.add({
      id: 101,
      name: "Y",
      price: 1010
    });
    cart.deleteItem(101);
    expect(cart.items.length).toBe(1);
  });
