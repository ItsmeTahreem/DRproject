import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'  // filter uses this string to find characters in the search 
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase(); // converts all the letters in a string to lowercase 
    return items.filter(it => {
      return it.toLowerCase().includes(searchText); // if the letters match when searching the result displays 
    });
  }
}