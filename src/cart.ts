interface Arr {
    id: number;
    name: string;
    price: number;
    discount?: number;
  }
  
  export class Cart {
    _items: Arr[] = [];
  
    add(item: Arr): void {
      this._items.push(item);
    }
    get items(): Arr[] {
      return [...this._items];
    }
  
    sum() {
      let total = 0;
      for (let item of this._items) {
        total += item.price;
      }
      return total;
    }
  
    discountSum(discount: number) {
      let total = 0;
      for (let item of this._items) {
        total += item.price;
      }
      return total * (1 - discount / 100);
    }
  
    deleteItem(idItem: number): void {
      for (let i = 0; i < this._items.length; i++) {
        if (this._items[i].id === idItem) {
          this._items.splice(i, 1);
          break;
        }
      }
    }
  }