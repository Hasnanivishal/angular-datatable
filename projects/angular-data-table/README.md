# Angular DataTable

* A simple datatable that can be used in your component.
* It is developed using `Angular >=7.0.0` and its newly introduced `ng g library` schematics.
* Library location: `projects/angular-data-table` directory of this repository.

## Examples/Demo

* A simple Example can be found under `src/app` directory of this repository.
* Live Demo [Example](https://stackblitz.com/edit/angular-m3yj64)

## Installation

`npm i angular-data-table-library`

## API

`import { AngularDataTableModule } from 'angular-data-table-library'`<br>
`selector: ang-data-table`

### @Inputs()

| Input            | Type    | Required                   | Description                                                                                               |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| sampleData            | object  | **YES**                    | array of objects that need to be shown in the data table .                                               |
| itemPerPage        | number  | Optional, default: 12     | items to be shown on each page.                                                                       |
                                                |


## Usage

1) Register the `AngularDataTableModule` in your app module.
 > `import { AngularDataTableModule } from 'angular-data-table-library'`

 ```typescript
 import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularDataTableModule } from 'angular-data-table-library';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule,
    AngularDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
 ```

 2) Use the directive `(ang-data-table)` in your component.

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from './app.service';
@Component({
  selector: 'mat-ta-root',
  template: `
  <ang-data-table [sampleData]='data' [itemPerPage]='dataPerPage'>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  ngOnInit() {
    let data = {
          [key1: value, key2: value],
          [key1: value, key2: value],
          [key1: value, key2: value]
      } 
    let dataPerPage = 6;
  }

}
```


**Thanks for Installing**

> Conatct me for any suggestion/issues -> hasnanivishal@gmail.com