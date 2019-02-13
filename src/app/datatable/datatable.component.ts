import { Component, OnInit, Input } from '@angular/core';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})
export class DatatableComponent implements OnInit {

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
  sortOrder: boolean;


  constructor(private pagerService: PagerService) {
    this.currentPage = 1;
  }

  ngOnInit() {
    setTimeout(() => {
      this.totalItems = this.sampleData.length;
      this.setPage(1);
    });
  }

  Sorting(fieldName: any, sortOrder: boolean) {
    if (sortOrder) {
      this.sampleData.sort(function (objectOne: any, objectTwo: any) {
        if (objectOne[fieldName] < objectTwo[fieldName]) { return -1; }
        if (objectOne[fieldName] > objectTwo[fieldName]) { return 1; }
        return 0;
      });
    } else {
      this.sampleData.sort(function (objectOne: any, objectTwo: any) {
        if (objectOne[fieldName] > objectTwo[fieldName]) { return -1; }
        if (objectOne[fieldName] < objectTwo[fieldName]) { return 1; }
        return 0;
      });
    }


    console.log(this.sampleData);

    this.setPage(this.currentPage);
  }

  setPage(page: number) {
    this.index = 1;

    this.sampleData.forEach((element: { _index: number; }) => {
      element._index = this.index++;
    });
    
    // get pager object from service
    this.pager = this.pagerService.getPager(this.sampleData.length, page, this.itemPerPage);

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
