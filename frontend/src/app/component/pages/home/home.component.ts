import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { __param } from 'tslib';
import { SearchComponent } from "../../../components/partials/search/search.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterModule, CommonModule, RatingModule, FormsModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Food[] = [];
  value: number = 0;

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);

      else
        this.foods = foodService.getAll();
    })


  }



    ngOnInit(): void {}
}
