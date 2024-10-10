import { Food } from './Food';

export class CartItem {
  quantity: number = 1;
  price: number;

  constructor(public food: Food) {
    this.price = food.price; // Initialisation de price après l'initialisation de food
  }
}
