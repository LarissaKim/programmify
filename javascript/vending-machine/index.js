class VendingMachine {
  // `initialInventory` is an array of objects
  constructor(initialInventory) {
    this.inventory = initialInventory;
    this.balance = 0;
  }

  // Only display items that are in stock
  get items() {
    return this.inventory.filter(({ stock }) => stock > 0);
  }

  buyItem(selection, money) {
    const result = inventory.find(({ code }) => code === selection);

    // Considered having a different message for items that are usually available but currently out of stock
    // however it's possible that an item may never be restocked (e.g. no longer produced)
    if (!result || !result.stock) return 'Please make another selection';

    console.log(`${result.item} selected`);

    if (!money || money < result.price) {
      return `Purchase requires $${result.price}`;
    }

    const change = money - result.price;
    this.balance += result.price;

    result.stock--;

    if (change) {
      return { item: result.item, change: change.toFixed(2) }; // let the debates begin
    } else {
      return result.item;
    }
  }
}

/* Example usage */

const inventory = [
  { code: 'A0', item: '바나나 우유 (Banana milk)', price: 1.3, stock: 5 },
  { code: 'A1', item: '솔의눈 (Pine bud drink)', price: 0.89, stock: 5 },
  { code: 'A3', item: '아침헷살 (Rice drink)', price: 1.75, stock: 5 },
  { code: 'A2', item: '식혜 (Sweet rice drink)', price: 0.65, stock: 5 },
  // ...more items here
];

const vendingMachine = new VendingMachine(inventory);
const purchase = vendingMachine.buyItem('A0', 1.3);

console.log(purchase);
console.log(vendingMachine.balance); // check that balance increased
console.log(vendingMachine.inventory); // inventory decreased
