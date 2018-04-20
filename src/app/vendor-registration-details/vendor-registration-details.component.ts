import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {RegisterService} from '../services/register.service';
import {vendorDetails} from './vendorDetails';


@Component({
  selector: 'app-vendor-registration-details',
  templateUrl: './vendor-registration-details.component.html',
  styleUrls: ['./vendor-registration-details.component.css'],
  providers:[RegisterService]
})
export class VendorRegistrationDetailsComponent implements OnInit {

 vendorDetails:vendorDetails;
  form:FormGroup;

  constructor( private registerService:RegisterService) { }

  ngOnInit() {
    this.form=new FormGroup({
      firstName : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
      lastName : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
        email : new FormControl('', [Validators.required, Validators.email]),
        password : new FormControl('',Validators.required),
        contact : new FormControl('', [Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(11)]),
        DOB : new FormControl(''),
        gender : new FormControl(''),
        address : new FormControl(''),
        city : new FormControl('',Validators.pattern('[a-zA-Z][a-zA-Z]+')),
        state : new FormControl('',Validators.pattern('[a-zA-Z][a-zA-Z]+')),
        zip : new FormControl('', [Validators.pattern('[0-9]*')]),
        vendorAddress : new FormControl('', [Validators.required]),
        vendorCity : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
        vendorState : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+')]),
        vendorZip : new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
        vendorContact : new FormControl('', [Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(11)])
    })
  }

AddUser(){
  console.log(this.form.value);
      let body={
                    "address": {
                                    "city": "string",
                                    "state": "string",
                                    "street": "string",
                                    "zipCode": 0
                               },
                    "dob": "string",
                    "email": "nike@gmail.com",
                    "firstName": "string",
                    "gender":    "string",
                    "lastName":  "string",
                    "mobileNo":  "string",
                    "password":  "string",
                    "role":      "string",
                    "shopAddress": {
                                      "city": "string",
                                      "state": "string",
                                      "street": "string",
                                      "zipCode": 0
                                    },
                    "vendorMobileNo": "string"
                };


     this.registerService.register(body).subscribe((res) =>{
      alert("Registered");  
      }, (error) =>{
        console.log("error in register");
  });

}

}
