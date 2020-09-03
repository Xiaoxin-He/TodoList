import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) {
    }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean'); //execute the hello-world-bean service
    //console.log("Excute Hello World Bean Service")
  }

  executeHelloWorldServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`); //execute the hello-world-bean service
    //console.log("Excute Hello World Bean Service") use ` can use variable inside
  }
}
