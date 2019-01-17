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

  search(query:string){
    this.child.displayResults(query);
  }

}
