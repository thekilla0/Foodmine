import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FoodTag } from '../../../shared/models/Foodtags';

@Component({
  selector: 'app-goodtags',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './goodtags.component.html',
  styleUrl: './goodtags.component.css',
})
export class GoodtagsComponent {
  tags?: FoodTag[];
  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }
}
