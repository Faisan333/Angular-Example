import { AbstractControl,ValidationErrors } from "@angular/forms";

export class myValidators{
    static containSpace(control:AbstractControl):ValidationErrors | null{
        // console.log('ss')

        let val = control.value
        if(val.indexOf(' ') != -1){
            return {containSpace:true}
        }
         return null;
    }
}