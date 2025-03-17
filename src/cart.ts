interface Buyable {
  id: number;
  name: string;
  price: number;
  discount?: number;
}

export class Cart {
  _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }
  get items(): Buyable[] {
    return [...this._items];
  }

  sum() {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  discountSum(discount: number) {
    return this.sum() * (1 - discount / 100);
  }

  deleteItem(idItem: number): void {
    this._items = this._items.filter((item) => item.id !== idItem);
  }
}