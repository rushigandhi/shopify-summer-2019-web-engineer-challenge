import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  
  constructor(private itemService: ItemService) { }

  ngOnInit() {
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

}
