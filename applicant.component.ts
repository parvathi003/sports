import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/services/validation/validation.service';
import { Applicant } from 'src/app/models/DTOs/applicant';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {
  applicantobj: Applicant = new Applicant();
  applicantList: Array<Applicant> = [];
  errorEmail = "";
  errorphone1 = "";
  errorPhone2 = "";
  errorFirstName = "";
  errorMiddleName = "";
  errorAddress1 = "";
  errorAddress2 = "";
  errorCity = "";
  errorState = "";
  errorZip = "";
  errorLastName = "";
  errorMsgForSports = "";


  constructor(private validationservice: ValidationService) { }
  pushApplicant() {
    try {

      if (this.validateApplicant()) {
        this.applicantList.push(this.applicantobj);
        console.log(this.applicantList);
      }
    }
    catch (error) {
      console.log("Error");
    }
  }

  validateApplicant(): boolean {
    try {
      var isValid = true;
      if (this.validationservice.isStringEmptyOrNull(this.applicantobj.lastName)) {
        this.errorLastName = "Last Name Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.applicantobj.firstName)) {
        this.errorFirstName = "First Name Required";
        isValid = false;
      }
      if (this.validationservice.isStringEmptyOrNull(this.applicantobj.sports)) {
        this.errorMsgForSports = "Sports Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.applicantobj.addressLine1)) {
        this.errorAddress1 = "Address Line 1 Required";
        isValid = false;
      }


      if (this.validationservice.isStringEmptyOrNull(this.applicantobj.city)) {
        this.errorCity = "City Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.applicantobj.state)) {
        this.errorState = "State Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.applicantobj.zip)) {
        this.errorZip = "Zip Required";
        isValid = false;
      }

      else if (this.validationservice.isZip(this.applicantobj.zip)) {
        this.errorZip = "Invalid zip";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.applicantobj.email)) {
        this.errorEmail = "Email Required";
        isValid = false;
      }

      else if (this.validationservice.isEmailValid(this.applicantobj.email)) {
        this.errorEmail = "Invalid Email";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.applicantobj.phone1)) {
        this.errorphone1 = "Phone 1 Required";
        isValid = false;
      }

      else if (this.validationservice.isPhoneNo(this.applicantobj.phone1)) {
        this.errorphone1 = "Invalid Phone 1";
        isValid = false;
      }

      return isValid;
    }
    catch (error) {
      console.log("Error");
    }
  }
}

