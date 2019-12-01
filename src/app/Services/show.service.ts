import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../show.model';


@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  GetShowInformation(): Observable<any> {  /** Gets information method */
    return this.http.get('http://localhost:4000/api/shows');
  }

  AddShowInformation(name: string, desc: string, type: string, pickdate: string): Observable<any> {  /* Adds show information to the localhost */
    const show: Show = { name: name, desc: desc, type: type, pickdate: pickdate, };
    return this.http.post('http://localhost:4000/api/shows', show)
  }

  DeleteShow(id: String): Observable<any> {
    return this.http.delete('http://localhost:4000/api/shows/' + id);  /* also deletes the information from the localhost */
  }

  GetShows(id: String): Observable<any> {
    return this.http.get('http://localhost:4000/api/shows/' + id);
  }

  UpdateShows(id: String, name: string, desc: string, type: string, pickdate: string): Observable<any> {
    const show: Show = { name: name, desc: desc, type: type, pickdate: pickdate, };   /* Updates the shows with the id when edited and shows in localhost*/
    console.log("Edit" + id);
    return this.http.put('http://localhost:4000/api/shows/' + id, show);
  }
}