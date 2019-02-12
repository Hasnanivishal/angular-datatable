Angular Data Table


Installation

npm i angular-data-table-library


Usage


1. Register the NgxMatTypeaheadModule in your app module.

   import { NgxMatTypeaheadModule } from 'ngx-mat-typeahead'

   @NgModule({
    declarations: [AppComponent],
     imports: [
       AngularDataTableModule
     ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule {}

2. Use the directive (NgxMatTypeahead) in your component.
  
    <ang-data-table></ang-data-table>

    Input for the selector are : 
    
    a.) sampleData : Required 
            
         - A array of object need to be passed in the sample data.
         - data format should be
             let data = {
                 [key1: value, key2: value],
                 [key1: value, key2: value],
                 [key1: value, key2: value]
             } 

     b.) itemPerPage : Optional
           
           - default value is 12
           - let dataPerPage = 6;

<ang-data-table [sampleData]='data' [itemPerPage]='dataPerPage'></ang-data-table>