# Angular DataTable

<p align="center">
  <a href="https://www.npmjs.com/package/angular-data-table-library">
    <img src="https://img.shields.io/npm/dm/angular-data-table-library.svg?style=flat" alt="downloads">
  </a>
 
  <a href="https://badge.fury.io/for/js/angular-data-table-library">
    <img src="https://badge.fury.io/js/angular-data-table-library.svg" alt="npm version" height="18">
  </a>
  
  <a href="https://david-dm.org/hasnanivishal/angular-data-table-library" title="dependencies status">
    <img src="https://david-dm.org/hasnanivishal/angular-data-table-library.svg" height="18">
  </a>
</p>

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
| color        | string  | Optional, default: Black     | set color of table header and button, [color list](https://www.w3schools.com/cssref/css_colors.asp)                                                                      |


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
  selector: 'angDataTable',
  template: `
  <ang-data-table [sampleData]='data' [itemPerPage]='dataPerPage' [color]='color'>
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
    let color = 'Blue';
  }

}
```

## Test

Run tests

```
npm test
```

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Vishal Hasnani](https://github.com/Hasnanivishal)


**Thanks for Installing**

> Conatct me for any suggestion/issues -> hasnanivishal@gmail.com