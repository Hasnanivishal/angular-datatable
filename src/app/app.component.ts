import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDataTableLibrary';
  sampleData = [
    {id: 1, name: "a"},
    {id: 2, name: "b"},
    {id: 5, name: "c"},
    {id: 6, name: "f"},
    {id: 4, name: "e"},
    {id: 3, name: "d"},
    {id: 7, name: "g"},
    {id: 8, name: "h"}
  ];
  color: any = 'DarkRed';
}
