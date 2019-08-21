import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/services/validation/validation.service';
import { Coach } from 'src/app/models/DTOs/coach';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent {
  coachobj: Coach = new Coach();
  coachList: Array<Coach> = [];
  errorEmail = "";
  errorPhone1 = "";
  errorPhone2 = "";
  errorFirstName = "";
  errorMiddleName = "";
  errorAddress1 = "";
  errorAddress2 = "";
  errorCity = "";
  errorState = "";
  errorZip = "";
  errorMsgForInterest = "";
  errorLastName = "";

  constructor(private validationservice: ValidationService) { }
  pushCoach() {
    try {

      if (this.validateCoach()) {
        this.coachList.push(this.coachobj);
        console.log(this.coachList);
      }
    }
    catch (error) {
      console.log("Error");
    }
  }


  validateCoach(): boolean {
    try {
      var isValid = true;
      if (this.validationservice.isStringEmptyOrNull(this.coachobj.lastName)) {
        this.errorLastName = "Last Name Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.firstName)) {
        this.errorFirstName = "First Name Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.addressLine1)) {
        this.errorAddress1 = "Address Line1 Required";
        isValid = false;
      }


      if (this.validationservice.isStringEmptyOrNull(this.coachobj.city)) {
        this.errorCity = "City Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.state)) {
        this.errorState = "State Required";
        isValid = false;
      }
      if (this.validationservice.isStringEmptyOrNull(this.coachobj.interest)) {
        this.errorMsgForInterest = "Interest Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.zip)) {
        this.errorZip = "Zip Required";
        isValid = false;
      }

      else if (this.validationservice.isZip(this.coachobj.zip)) {
        this.errorZip = "Invalid zip";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.email)) {
        this.errorEmail = "Email Required";
        isValid = false;
      }

      else if (this.validationservice.isEmailValid(this.coachobj.email)) {
        this.errorEmail = "Invalid Email";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.coachobj.phone1)) {
        this.errorPhone1 = " Phone 1 Required";
        isValid = false;
      }

      else if (this.validationservice.isPhoneNo(this.coachobj.phone1)) {
        this.errorPhone1 = "Invalid Phone 1";
        isValid = false;
      }

      return isValid;
    }
    catch (error) {
      console.log("Error");
    }
  }
}

