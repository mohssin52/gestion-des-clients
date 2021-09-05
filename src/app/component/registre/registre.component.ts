import { Component, OnInit } from '@angular/core';
import { AuthClientService } from 'src/app/service/auth-client.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
email!:string
password!:string
  constructor(private authClientService:AuthClientService,private router:Router,private flash:FlashMessagesService) { }

  ngOnInit(): void {
  }
  RegestreClient(){
    this.authClientService.Registre(this.email,this.password)
    .then(regestre =>{
      this.router.navigate(['/'])
      this.flash.show('you are regestre succesfuly',{cssClass:'alert-primary',timeout:3000})

    }
    
    ).catch(error =>{
      this.flash.show(error.message,{cssClass:'alert-danger',timeout:5000})
    })


  }

}
