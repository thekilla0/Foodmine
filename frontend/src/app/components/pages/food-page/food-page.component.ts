import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RatingModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent {
  food!: Food;
  value: number = 0;
  constructor(activatedRoute: ActivatedRoute, foodservice: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) this.food = foodservice.getFoodbyId(params['id']);
    });
  }
}
