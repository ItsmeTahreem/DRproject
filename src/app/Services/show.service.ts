import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Show} from '../show.model';


@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http:HttpClient) { }

  GetShowInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/shows');
  }

  AddShowInformation(name:string,desc:string,type:string):Observable<any>{
    const show:Show = {name:name,desc:desc,type:type,};
    return this.http.post('http://localhost:4000/api/shows', show)
  }

  DeleteShow(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/shows/'+id);
  }

  GetShows(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/shows/'+id);
  }

  UpdateShows(id:String,name:string,desc:string,type:string):Observable<any>{
    const show:Show = {name:name,desc:desc,type:type,};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/api/shows/'+id, show);
  }
}