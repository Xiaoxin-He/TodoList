import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { ThrowStmt } from '@angular/compiler';
//import {AppComponent} from '../app.component'; //if use app component (import a class which is outside of this module0

@Component({
  //passing objects
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
//export =public, use this class outside this module
export class WelcomeComponent implements OnInit {

  //declare variable here
  message = 'Some Welcome Message'
  name = ''
  welcomeMessageFromService:string
  //ActivatedRoute
  constructor(private route:ActivatedRoute,
    private service: WelcomeDataService) { }

  //in java: void init() {}
  ngOnInit() {

    // console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    //console.log(this.service.executeHelloWorldBeanService());  //observable
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
      //this.handleSuccessfulResponse(response) //when call observable and subsrible successful, 
      //call the response and call this handleSuccessfulResponse()  method
    ); //since subscrible observble the request is executed
    // console.log("get welcome message")
    //console.log('last line of get welcome method')
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());  //observable
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    ); 
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message
    console.log(this.welcomeMessageFromService)
    //when reponse come back, console
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error) {
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }




}