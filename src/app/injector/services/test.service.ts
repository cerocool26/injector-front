import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RequestCreateTest} from "../request/RequestCreateTest";
import {ResponseTests} from "../response/ResponseTests";

@Injectable({providedIn: 'root'})
export class TestService{
  constructor(private http:HttpClient) {
  }

  createTest(request: any):Observable<RequestCreateTest>{
    return this.http.post<RequestCreateTest>(`http://localhost:8080/test`,request)
  }

  getTest(): Observable <ResponseTests[]> {
    return this.http.get<ResponseTests[]>(`http://localhost:8080/test`);
  }
}
