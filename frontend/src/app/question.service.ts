import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "./question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions_api_url: string = '/api/questions';

  constructor(private httpClient: HttpClient) {
  }

  getQuestions(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.questions_api_url);
  }
}
