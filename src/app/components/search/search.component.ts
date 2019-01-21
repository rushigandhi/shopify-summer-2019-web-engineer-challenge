import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  query: string = "";

  @ViewChild(ResultsComponent) child: ResultsComponent ; 

  ngOnInit() {
  }

  checkEmpty(query: string) {
    if (query.length == 0){
      this.child.displayResults("");
    }
  }

  search(query:string){
    this.child.displayResults(query);
  }

}
