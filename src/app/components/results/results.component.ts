import { Component, OnInit, ViewChild} from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { Trie } from '../../models/trie';
import { TrieNode } from '../../models/trie-node';
import { FavouritesComponent } from '../favourites/favourites.component';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public query: string;

  @ViewChild(FavouritesComponent) child: FavouritesComponent ; 

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(data =>{
      // create dictionary (in .items)
      for(var i = 0; i < data.length; i++){
        let row = data[i];

        row.title.split(" ").forEach(word => {
            if (word.indexOf("(") >= 0) {
              word = word.substring(1, word.length - 1);
            }
            this.itemService.trie.addNode(i, word.toLowerCase());
          });

        row.keywords.split(", ").forEach(keyword => {
          keyword.split(" ").forEach(keyword => {
            if (keyword.indexOf("(") >= 0) {
              keyword = keyword.substring(1, keyword.length - 1);
            }
            this.itemService.trie.addNode(i, keyword.toLowerCase());
          })
        });

        this.itemService.items.push(row);
      }

    });
  }

  favourite(item: Item){
    if(!this.itemService.favourites.includes(item)){
      this.itemService.favourites.push(item);
    }
    else{
      this.itemService.favourites.splice( this.itemService.favourites.indexOf(item), 1 );
    }
  }

  displayResults(query: string){
    
    this.query = query;    
    this.itemService.searchResults = [];

    for (let num of this.itemService.trie.getNode(query).values) {
      this.itemService.searchResults.push(this.itemService.items[num]);
    }

    // OLD O(n) SEARCH IMPLEMENTATION where N is the size of the array of items

    // for(var i = 0; i < this.itemService.items.length; i++){
    //   var keywords: string = this.itemService.items[i].keywords;
    //   if(keywords.includes(query)){
    //     this.itemService.searchResults.push(this.itemService.items[i]);
    //   }
    // }
  }

}
