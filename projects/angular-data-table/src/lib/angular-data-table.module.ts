import { NgModule } from '@angular/core';
import { AngularDataTableComponent } from './angular-data-table.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AngularDataTableComponent],
  imports: [
    BrowserModule
  ],
  exports: [AngularDataTableComponent]
})
export class AngularDataTableModule { }
