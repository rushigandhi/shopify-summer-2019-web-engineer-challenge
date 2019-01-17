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

  favourite(item: Item){
    if(!this.itemService.favourites.includes(item)){
      this.itemService.favourites.push(item);
    }
    else{
      this.itemService.favourites.splice(this.itemService.favourites.indexOf(item), 1 );
    }
  }

}
