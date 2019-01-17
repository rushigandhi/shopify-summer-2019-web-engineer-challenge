import { Component, OnInit} from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public items:Item[] = [];
  public query: string;

  public searchResults: Item[] = []

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(data =>{
      for(var i = 0; i < data.length; i++){
        this.items.push(data[i]);
      }
    });
  }

  displayResults(query: string){
    this.query = query;
    this.searchResults = [];
    for(var i = 0; i < this.items.length; i++){
      var keywords: string = this.items[i].keywords;
      if(keywords.includes(query)){
        this.searchResults.push(this.items[i]);
      }
    }
  }

}
