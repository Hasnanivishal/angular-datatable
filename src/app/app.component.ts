import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-data-table';

  sampleData = [
    {id: 1, name: "a"},
    {id: 2, name: "b"},
    {id: 3, name: "c"},
    {id: 4, name: "d"},
    {id: 5, name: "e"},
    {id: 6, name: "f"},
    {id: 7, name: "g"},
    {id: 8, name: "h"}
  ]
}
