import { Component, OnInit, Input } from '@angular/core';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html'
})
export class DatatableComponent {

  @Input()
  sampleData : any;

  @Input()
  itemPerPage : any;

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  // properties name
  propName: any[];

  currentPage: any;
  totalItems: any;
  index : any = 1;


  constructor(private pagerService:PagerService)
  {
    this.currentPage = 1;
  }

  ngOnInit()
  {
    setTimeout(() => {
      
      this.totalItems = this.sampleData.length;
      this.sampleData.forEach(element => {
        element._index = this.index++;
      });
      this.setPage(1);
    });
  }


  setPage(page: number) {
    debugger;
    // get pager object from service
    this.pager = this.pagerService.getPager(this.sampleData.length, page, this.itemPerPage);

    // get current page of items
    this.pagedItems = this.sampleData.slice(this.pager.startIndex, this.pager.endIndex + 1);

    //get object property name
    this.propName = Object.getOwnPropertyNames(this.sampleData[0]);
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
