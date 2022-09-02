import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { myValidators } from '../custumvalidator/spacevalidator';

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {
email:string = ""
pass:string = ""
isFormValid = true
  constructor() { }

  ngOnInit(): void {
  }


submit(){
  // console.log(formDate.value)
  console.log(this.userform.value)
}

// Recative Forms
userform =  new FormGroup({
  emai:new FormControl('azeezfaizan@gmail.com',[Validators.required,Validators.minLength(2)]),
  passw:new FormControl('',[Validators.required,myValidators.containSpace])
})


get Uemail(){
  return this.userform.get('emai')
}


get form2(){
  return this.userform
}


get Upass(){
  return this.userform.get('passw')
}

// Validation Submit
loginad(){
  if(this.userform.get('emai')?.value!='azeezfaizan@gmail.com'){
    this.userform.setErrors({invalidLogin:true})
  }
}
get forms(){
  return this.userform
}



// MiniLength
onSubmit(form:NgForm){
  console.log(form.invalid)
  if(form.invalid){
    this.isFormValid = false
console.log('error')
    return
}

}
}
