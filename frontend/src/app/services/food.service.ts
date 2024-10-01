import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from '../../data';
import { FoodTag } from '../shared/models/Foodtags';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  [x: string]: any;

  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }
  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  getAllTags(): FoodTag[] {
    return sample_tags;
  }
  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }
}
