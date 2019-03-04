import { Component, OnInit, Input } from '@angular/core';
import { AngularDataTableService } from '../public_api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ang-data-table',
  template: `<!-- <div class="header">
  <div class="two" *ngIf="pagedItems">Show
    <select>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="58">25</option>
      <option value="100">100</option>
    </select> entries
  </div>

  <div class="one" *ngIf="pager.pages && pager.pages.length > 1">
    Search: <input type="text">
  </div>
</div> -->

<div *ngIf="pagedItems">

<div style="overflow-x:auto;">
  <table>
    <thead>
      <th *ngFor="let prop of propName | keyvalue" [style.background-color]="bgColor">
        {{ prop.value | titlecase  }} <i class="fa fa-sort" (click)="Sorting(prop.value, !sortOrder)" (click)="sortOrder = !sortOrder">
        </i></th>
    </thead>
    <tbody>
      <tr *ngFor="let item of pagedItems ">
        <td *ngFor="let prop of propName"> {{ item[prop] }} </td>
      </tr>
    </tbody>
  </table>
</div>

<br />
<div class="header" style="overflow-x:auto;">
  <div class="two" *ngIf="pagedItems">Showing {{pagedItems[0]._index}} to
    {{pagedItems[pagedItems.length-1]._index}} of
    {{totalItems}} entries</div>

  <div class="one" *ngIf="pager.pages && pager.pages.length > 1">
    <button class="button button2" [style.background-color]="bgColor" (click)="previousPage()">Previous</button>
    <button class="button button2" [style.background-color]="bgColor" (click)="nextPage()">Next</button>
  </div>
</div>

<div class="center">
  Page {{pager.currentPage}}
</div>

</div>

<!-- CSS -->
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
<style>
  table,
  td,
  th {
    border: 1px solid #ddd;
    text-align: left;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 15px;
  }

  th {
    /* background-color: #24292e; */
    color: white;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  .button {
    /* background-color: #24292e; */
    border: none;
    color: white;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
  }

  .button2:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  .center {
    text-align: center;
  }


  .header {
    display: inline-block;
    width: 100%;
  }

  .one {
    float: right;
  }

  .two {
    float: left;
  }
</style>
<!-- CSS --> `,
  styles: []
})
export class AngularDataTableComponent implements OnInit {

  @Input()
  data: any;

  @Input()
  itemPerPage: any;

  @Input()
  color: any;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  // properties name
  propName: any[];

  currentPage: any;
  totalItems: any;
  index: any = 1;
  sortOrder: boolean;
  bgColor: any = 'Black';

  constructor(private angularDataTableService: AngularDataTableService) {
    this.currentPage = 1;
  }

  ngOnInit() {
    setTimeout(() => {
      if (this.data && this.data.length > 0) {
        this.totalItems = this.data.length;
        this.setPage(1);
      }
    });
  }

  Sorting(fieldName: any, sortOrder: boolean) {
    if (sortOrder) {
      this.data.sort(function (objectOne: any, objectTwo: any) {
        if (objectOne[fieldName] < objectTwo[fieldName]) { return -1; }
        if (objectOne[fieldName] > objectTwo[fieldName]) { return 1; }
        return 0;
      });
    } else {
      this.data.sort(function (objectOne: any, objectTwo: any) {
        if (objectOne[fieldName] > objectTwo[fieldName]) { return -1; }
        if (objectOne[fieldName] < objectTwo[fieldName]) { return 1; }
        return 0;
      });
    }
    this.setPage(this.currentPage);
  }

  setPage(page: number) {
    if (this.color) {
      this.bgColor = this.color;
    }

    this.index = 1;
    this.data.forEach((element: { _index: number; }) => {
      element._index = this.index++;
    });
    // get pager object from service
    this.pager = this.angularDataTableService.getPager(this.data.length, page, this.itemPerPage);

    // get current page of items
    this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // get object property name
    this.propName = Object.getOwnPropertyNames(this.data[0]);
    this.propName.pop();
  }

  nextPage() {
    if (this.currentPage < this.pager.pages.length) {
      this.currentPage = this.currentPage + 1;
      this.setPage(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.setPage(this.currentPage);
    }
  }

}
