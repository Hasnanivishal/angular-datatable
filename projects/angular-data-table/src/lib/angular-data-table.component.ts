import { Component, OnInit, Input } from '@angular/core';
import { AngularDataTableService } from '../public_api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ang-data-table',
  template: `
  <div>
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

<div>
  <span *ngIf="pagedItems" >Showing {{pagedItems[0]._index}} to {{pagedItems[pagedItems.length-1]._index}} of {{totalItems}} entries</span>
  <nav *ngIf="pager.pages && pager.pages.length > 1" class="text-right">
    <button (click)="loadLess()">Prev</button>
    <button (click)="loadMore()">Next</button>
  </nav>
</div>

<div>
  Page {{pager.currentPage}}
</div>
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
