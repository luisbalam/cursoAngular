import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/shared/data';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
apiUrl = "/notes";
  constructor(protected http:HttpClient) { }

  list(): Observable<Response>{
    return this.http.get<Response>(this.apiUrl);
  }
}
