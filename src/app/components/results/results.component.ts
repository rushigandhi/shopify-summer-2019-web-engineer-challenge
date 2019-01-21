import { Component, OnInit, ViewChild} from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { FavouritesComponent } from '../favourites/favourites.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

  // Declare the query string and the FavouritesComponent as a child component
  public query: string;
  @ViewChild(FavouritesComponent) child: FavouritesComponent ; 

  constructor(private itemService: ItemService) { }

  ngOnInit() {

    // Parse JSON data
    this.itemService.getItems().subscribe(data =>{
      for(var i = 0; i < data.length; i++){ // For each JSON object
        let row = data[i];  // Store the object at index i to row

        // Split the title string for the object and add each word to the Trie
        row.title.split(" ").forEach(word => {
            if (word.indexOf("(") >= 0) { // Remove parentheses
              word = word.substring(1, word.length - 1);
            }
            this.itemService.trie.addWord(i, word.toLowerCase());
          });

        // Split the keywords string for the object and add each word to the Trie
        row.keywords.split(", ").forEach(keyword => {
          keyword.split(" ").forEach(keyword => {
            if (keyword.indexOf("(") >= 0) { // Remove parentheses
              keyword = keyword.substring(1, keyword.length - 1);
            }
            this.itemService.trie.addWord(i, keyword.toLowerCase());
          })
        });

        // Push the current JSON object to the items array
        this.itemService.items.push(row);
      }

    });
  }

  // Call this function to save an item to the favourites array
  favourite(item: Item){
    // If the item is not the array, push it
    if(!this.itemService.favourites.includes(item)){
      this.itemService.favourites.push(item);
    }
    // If the item is in the array, remove it
    else{
      this.itemService.favourites.splice(this.itemService.favourites.indexOf(item), 1 );
    }
  }

  // Call this function to save the queried results to the searchResults array
  displayResults(query: string){
    this.query = query;
    this.itemService.searchResults = []; // Empty the searchResults array

    // Make sure the query string is not empty
    if(query != ""){
        // For every index in the values array retrieved from the Trie, push the corresponding JSON object to the searchResults array
        for (let index of this.itemService.trie.getIndices(query).values) {
          this.itemService.searchResults.push(this.itemService.items[index])
        }
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
