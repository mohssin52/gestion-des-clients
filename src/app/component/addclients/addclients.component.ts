import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'rxjs/operators';
import { Client } from 'src/app/les models/Client';
import { AuthClientService } from 'src/app/service/auth-client.service';
import { ClientService } from './../../service/client.service';

@Component({
  selector: 'app-addclients',
  templateUrl: './addclients.component.html',
  styleUrls: ['./addclients.component.css']
})
export class AddclientsComponent implements OnInit {
client:Client={
  firstname: "",
  lastname: "",
  email: "",
  phone: 0,
  balancer: 0,
  user:""
}
  

  constructor(private clientservice:ClientService,  private authClient:AuthClientService ,private router: Router, private flashMessag:FlashMessagesService) { }

  ngOnInit(): void {
    this.authClient.getAuth()
    .subscribe(clients =>{
       this.client.user= clients?.uid
    })

  }
  onsubmit(){
this.clientservice.addClient(this.client)
this.flashMessag.show('Client added succesfuls',{cssClass:'alert-primary',timeout:5000})
 return this.router.navigate(['/'])

  }

}
