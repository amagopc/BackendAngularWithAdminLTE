import { Injectable } from '@angular/core';
import { Config } from '../models/master.model';
import { HttpClient, HttpBackend, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppconfigService {
  static Settings: Config;
  private http: HttpClient;

  constructor(private httpBackEnd: HttpBackend) { 
    this.http = new HttpClient(httpBackEnd);
  }

  load(JsonFile: string) {
    const jsonFile = 'assets/config/'+JsonFile;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: Config) => {
        AppconfigService.Settings = <Config>response;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
 }

}
