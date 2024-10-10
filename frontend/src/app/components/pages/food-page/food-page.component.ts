import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RatingModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent {
  food!: Food;
  value: any;
  constructor(
    activatedRoute: ActivatedRoute,
    foodservice: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.food = foodservice.getFoodbyId(params['id']);
    });
  }
  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  toggleFavorite() {
    this.food.favorite = !this.food.favorite;
  }
}
