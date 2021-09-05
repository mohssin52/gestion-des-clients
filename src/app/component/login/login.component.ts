import { Component, OnInit } from '@angular/core';
import { AuthClientService } from 'src/app/service/auth-client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!:string
  constructor( private authClientService:AuthClientService, private router :Router ,private flash:FlashMessagesService) { }

  ngOnInit(): void {
     this.authClientService.getAuth()
     .subscribe(auth =>{
       if(auth) {
          this.router.navigate(['/'])
       }}
       )
  }
  onLogin(){


    this.authClientService.Login(this.email,this.password)
    .then((auth) => {
if(auth){
this.flash.show('you are logged successfully ',{cssClass:'alert-primary',timeout :3000})
this.router.navigate(['/'])
}


    })
    .catch(error=>{

      this.flash.show(error.message ,{cssClass:'alert-danger',timeout :5000})
    
    }
    )

    
}
LoginWhitGoogle(){
  
  this.authClientService.LoginWhitGoogle(this.email,this.password)
  .then((auth) => {
if(auth){
this.flash.show('you are logged successfully ',{cssClass:'alert-primary',timeout :3000})
this.router.navigate(['/'])
}


  })
  .catch(error=>{

    this.flash.show(error.message ,{cssClass:'alert-danger',timeout :5000})
  
  }
  )

}
}