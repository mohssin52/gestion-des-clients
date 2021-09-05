import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from 'src/app/les models/Client';
import Swal from 'sweetalert2';
import { ClientService } from './../../service/client.service';
@Component({
  selector: 'app-editclients',
  templateUrl: './editclients.component.html',
  styleUrls: ['./editclients.component.css']
})
export class EditclientsComponent implements OnInit {
    id: any;
    myClient: Client = {
      id: '',
      firstname: '',
      lastname: '',
      phone: 0,
      email: '',
      balancer: 0
    }
    constructor(private clientService:ClientService, private router:Router ,private route:ActivatedRoute,private Nrouter: Router, private flash:FlashMessagesService) { }
  
  
    ngOnInit() {
      this.id = this.route.snapshot.params.id;
      this.clientService.geOneClient(this.id)
                        .subscribe((res:any) => {
                          this.myClient = res;
                          console.log(this.myClient)
                          
                        })
    }

    onsubmit(){
     
Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Save`,
  denyButtonText: `Don't save`,
}).then((result) => {
  this.myClient.id= this.id
  this.clientService.updateContact(this.myClient)
  this.flash.show('le contact   été modifier avec succes',{cssClass:'alert-primary',timeout:5000})
this.router.navigate(['/'])
  if (result.isConfirmed) {
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire(
      'Changes are not saved', '', 'info'
      )
  }
})
  }

}
