import { Component } from '@angular/core';
import { MatListOption } from '@angular/material';

var Rating;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  handleSelection(event) {
    if (event.option.selected) {
      event.source.deselectAll();
      event.option._setSelected(true);
    }
  }

  comments = [];

  addComment(Name: string, Location: string, Comment:string, options: MatListOption[]){
    Rating = options[0].value;
    if(Name && Location && Rating && Comment){
      this.comments.push({name: Name, location: Location, rating: Rating, comment: Comment});
      options[0]._setSelected(false);
    }
    console.log(this.comments);
  }
  
}
