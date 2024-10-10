import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { NgFor } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from "../../../components/partials/search/search.component";
import { FoodTag } from '../../../shared/models/Foodtags';
import { sample_tags } from '../../../../data';
import { GoodtagsComponent } from "../../../components/partials/goodtags/goodtags.component";
import { NotFoundComponent } from "../../../components/partials/not-found/not-found.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterModule, CommonModule, RatingModule, FormsModule, SearchComponent, GoodtagsComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  sampleTags: FoodTag[] = sample_tags;
  foods: Food[] = [];
  value: number = 0;

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);

      else
        this.foods = foodService.getAll();
    })


  }



    ngOnInit(): void {}
}
