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

* Component for creating data table for array of objects.
* It is developed using `Angular >=7.0.0` and its newly introduced `ng g library` schematics.
* Library location: `projects/angular-data-table` directory of this repository.

## Examples/Demo

 Live Demo [Example](https://stackblitz.com/edit/angular-m3yj64)

 ![angular-data-table](https://i.stack.imgur.com/kGE54.png)

## Installation

`npm i angular-data-table-library`

## API

`import { AngularDataTableModule } from 'angular-data-table-library'`<br>
`selector: ang-data-table`

### @Inputs()

| Input            | Type    | Required                   | Description                                                                                               |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| data            | object  | **YES**                    | array of objects that need to be shown in the data table .                                               |
| itemPerPage        | number  | Optional, default: 12     | items to be shown on each page.                                                                       |
| color        | string  | Optional, default: Black     | set color of table header and button, [color list](https://www.w3schools.com/cssref/css_colors.asp)                                                                      |


## Usage

* Register the `AngularDataTableModule` in module.

 ```typescript
import { AngularDataTableModule } from 'angular-data-table-library';

@NgModule({
  declarations: [],
  imports: [ AngularDataTableModule],
  providers: [],
  bootstrap: []
})
export class AppModule {}
 ```

* Use of component via selector 'ang-data-table'.

```typescript

@Component({
  selector: 'angDataTable',
  template: `<ang-data-table [data]='data' [itemPerPage]='dataPerPage' [color]='color'>`,
})
export class AppComponent {
 
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