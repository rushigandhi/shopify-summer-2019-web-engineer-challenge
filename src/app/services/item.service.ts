import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { Trie } from '../models/trie';
import { TrieNode } from '../models/trie-node'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private data_url: string = "https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1329";

  public items:Item[] = [];
  public searchResults: Item[] = []
  public favourites: Item[] = []
  public trie = new Trie();
  
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.data_url);
  }
}
