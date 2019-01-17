import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private data_url: string = "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000";

  public items:Item[] = [];
  public searchResults: Item[] = []
  public favourites: Item[] = []
  
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.data_url);
  }
}
