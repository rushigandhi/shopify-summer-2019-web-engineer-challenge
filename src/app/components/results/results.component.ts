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

  public query: string;

  @ViewChild(FavouritesComponent) child: FavouritesComponent ; 

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(data =>{
      for(var i = 0; i < data.length; i++){
        this.itemService.items.push(data[i]);
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
    for(var i = 0; i < this.itemService.items.length; i++){
      var keywords: string = this.itemService.items[i].keywords;
      if(keywords.includes(query)){
        this.itemService.searchResults.push(this.itemService.items[i]);
      }
    }
  }

}
