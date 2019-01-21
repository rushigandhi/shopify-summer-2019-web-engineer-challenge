import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  // Declare the ResultsComponent as a child component
  @ViewChild(ResultsComponent) child: ResultsComponent; 
  query: string = "";

  ngOnInit() {
  }

  // Call this function to check if the string is empty
  // This will make the clears the results on the pages
  checkEmpty(query: string) {
    if (query.length == 0){
      this.child.displayResults("");
    }
  }

  // Search for the inputted string
  search(query:string){
    this.child.displayResults(query);
  }

}
