import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }

  ngOnInit(): void {}
}
