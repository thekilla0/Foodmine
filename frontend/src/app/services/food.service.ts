import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from '../../data';
import { FoodTag } from '../shared/models/Foodtags';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  FOODS_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
} from '../shared/models/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  [x: string]: any;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }
  getAllFoodsBySearchTerm(searchTerm: string): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<FoodTag[]> {
    return this.http.get<FoodTag[]>(FOODS_TAGS_URL);
  }
  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag == 'All'
      ? this.getAll()
      : this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodbyId(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId);
  }
}
