import { Component, OnInit, Input } from '@angular/core';
import { AngularDataTableService } from '../public_api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ang-data-table',
  template: `
  <div style="overflow-x:auto;">
  <table>
    <thead>
      <th *ngFor="let ico of propName | keyvalue"> {{ ico.value }} </th>
    </thead>
    <tbody>
      <tr *ngFor="let ico of pagedItems ">
        <td *ngFor="let ico2 of propName "> {{ ico[ico2] }} </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- <span *ngIf="pager.pages && pager.pages.length > 1" class="text-right text-lighter pr-2">Showing Page {{pager.currentPage}}
  of {{ pager.pages.length }}</span> -->

<br />
<div class="header">
  <div class="playerTwo"  *ngIf="pagedItems">Showing {{pagedItems[0]._index}} to {{pagedItems[pagedItems.length-1]._index}} of
    {{totalItems}} entries</div>

  <div  class="playerOne" *ngIf="pager.pages && pager.pages.length > 1">
    <button class="button button2" (click)="loadLess()">Previous</button>
    <button class="button button2" (click)="loadMore()">Next</button>
  </div>
</div>

<div class="center">
  Page {{pager.currentPage}}
</div>


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
    background-color: #1a4069;
    color: white;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  .button {
    background-color: #1a4069;
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

  .playerOne {
    float: right;
  }

  .playerTwo {
    float: left;
  }
</style>
  `,
  styles: []
})
export class AngularDataTableComponent implements OnInit {

  @Input()
  sampleData: any;

  @Input()
  itemPerPage: any;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  // properties name
  propName: any[];

  currentPage: any;
  totalItems: any;
  index: any = 1;

  constructor(private angularDataTableService: AngularDataTableService) {
    this.currentPage = 1;
  }

  ngOnInit() {
    setTimeout(() => {
      this.totalItems = this.sampleData.length;
      this.sampleData.forEach((element: { _index: number; }) => {
        element._index = this.index++;
      });
      this.setPage(1);
    });
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.angularDataTableService.getPager(this.sampleData.length, page, this.itemPerPage);

    // get current page of items
    this.pagedItems = this.sampleData.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // get object property name
    this.propName = Object.getOwnPropertyNames(this.sampleData[0]);
    this.propName.pop();
  }

  loadMore() {
    if (this.currentPage < this.pager.pages.length) {
      this.currentPage = this.currentPage + 1;
      this.setPage(this.currentPage);
    }
  }

  loadLess() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.setPage(this.currentPage);
    }
  }

}
