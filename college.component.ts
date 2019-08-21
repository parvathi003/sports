import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/services/services/validation/validation.service';
import { College } from 'src/app/models/DTOs/college';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent {

  collegeobj: College = new College();
  collegeList: Array<College> = [];
  errorEmail = "";
  errorPhone1 = "";
  errorPhone2 = "";
  errorAddress1 = "";
  errorAddress2 = "";
  errorCity = "";
  errorState = "";
  errorZip = "";
  errorCollegeName = "";

  constructor(private validationservice: ValidationService) { }
  addCollege() {
    try {

      if (this.validateCollege()) {

        this.collegeList.push(this.collegeobj);
        console.log(this.collegeList);
      }
    }
    catch (error) {
      console.log("error")
    }
  }
  validateCollege(): boolean {

    try {
      var isValid = true;
      if (this.validationservice.isStringEmptyOrNull(this.collegeobj.collegeName)) {
        this.errorCollegeName = "First Name Required";
        isValid = false;
      }

      if (this.validationservice.isStringEmptyOrNull(this.collegeobj.addressLine1)) {
        this.errorAddress1 = "Address line 1 Required";
        isValid = false;
      }
   
      if (this.validationservice.isStringEmptyOrNull(this.collegeobj.city)) {
        this.errorCity = "City Required";
        isValid = false;
      }
      if (this.validationservice.isStringEmptyOrNull(this.collegeobj.state)) {
        this.errorState = "State Required";
        isValid = false;
      }
      if (this.validationservice.isStringEmptyOrNull(this.collegeobj.zip)) {
        this.errorZip = "Zip Required";
        isValid = false;
      }
      if (this.validationservice.isStringEmptyOrNull(this.collegeobj.phone1)) {

        this.errorPhone1 = "Phone 1 Required";
        isValid = false;
      }

     

      if (this.validationservice.isStringEmptyOrNull(this.collegeobj.email)) {
      this.errorEmail = "Email Required";
        isValid = false;
      }


      if (this.validationservice.isEmailValid(this.collegeobj.email)) {
      this.errorEmail = "Invalid Email";
        isValid = false;
      }

      if (this.validationservice.isPhoneNo(this.collegeobj.phone1)) {
      this.errorPhone1 = "Invalid Phone 1";
        isValid = false;
      }

     
      return isValid;
    }

    catch (error) {
      console.log("error");
    }
  }
}
