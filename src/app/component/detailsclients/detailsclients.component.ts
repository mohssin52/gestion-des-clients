import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { Client } from './../../les models/Client';
import { timeout } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detailsclients',
  templateUrl: './detailsclients.component.html',
  styleUrls: ['./detailsclients.component.css']
})
export class DetailsclientsComponent implements OnInit {
  statusContact: boolean = false;
  myClient: Client = {
    id: '',
    firstname: '',
    lastname: '',
    phone: 0,
    email: '',
    balancer: 0
  }
  id: any;

  constructor(private clientService: ClientService, private route: ActivatedRoute,private  router:Router , private flash:FlashMessagesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.clientService.geOneClient(this.id)
                      .subscribe((res:any) => {
                        this.myClient = res;
                        console.log(this.myClient)
                        
                      })
  }



  deleteClient( id:string){

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this client  file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.deleteClient(id)
    this.router.navigate(['/'])
    this.flash.show('contact delet succesful',{cssClass:'alert-primary',timeout:5000})
        Swal.fire({
  
          title:'Deleted!',
          text:'Your client file has been deleted.',
          icon:'success',
          timer: 3000
        }
        )
    
      } 
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
   
      if (result.isConfirmed) {
        this.myClient.id= this.id
        this.clientService.updateContact(this.myClient)
        this.flash.show('le balancer   été modifier avec succes',{cssClass:'alert-primary',timeout:5000})
     this.statusContact=false
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
     
  }


}