import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public items:Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(data =>{
      for(var i = 0; i < data.length; i++){
        data[i].body = (data[i].body);
        this.items.push(data[i]);
      }
    });
    console.log(this.items);
  }

}
