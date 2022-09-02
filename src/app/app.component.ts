import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  isauthenticated : boolean = false;
  studentDetails=[
    {
      'studentName':'faisan',
    'email':'azeezfaizan@gmail.com',
    'phone':'9072175347',
    'class':'3',
    'division':'b'
  },

  {'studentName':'rinshad',
  'email':'faizan@gmail.com',
  'phone':'9072175344447',
  'class':'5',
  'division':'b'
},

{'studentName':'hhhhan',
'email':'azeezfafffizan@gmail.com',
'phone':'9333072175347',
'class':'3',
'division':'b'
},

{'studentName':'fhdhdan',
'email':'hloofaizan@gmail.com',
'phone':'9044472175347',
'class':'3',
'division':'b'
}

  ]


  color='yellow';
colspan =2
ishidden:boolean=true
isFailed:boolean=true
isPass:boolean=true
user:string='Faisan'
active=true

clickme(data:any){
  alert('clicked')
  console.log(data.innerHTML)
}


}
