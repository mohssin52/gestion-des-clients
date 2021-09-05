import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/les models/Client';
import { ClientService } from './../../service/client.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import Swal from 'sweetalert2';
import { AuthClientService } from 'src/app/service/auth-client.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[]=[]; 
  totale: number=0;
  search :string = '';
  resultClient: Client[] = []
  constructor(private authClientServise :AuthClientService,private clientService:ClientService,private router:Router,private activerout:ActivatedRoute,private flash:FlashMessagesService) { }
 
  ngOnInit(): void {
this.authClientServise.getAuth()
.subscribe(auth => {

   this.clientService.getClient(auth!.uid)
    .subscribe((client: any) => {
     this.resultClient= this.clients = client;

      this.totale = this.getTotal();
      console.log(this.clients);
    });
})
  }
  // search(query:string){
  //   this.searchClient = (query) ? this.clients.filter(client => {
  //     client.firstname!.toLowerCase().includes(query.toLowerCase())
  //   }):this.clients

  // }
  searchClients(){
  
      this.resultClient =  ( this.search) ? this.clients.filter(client => {
     return (client.firstname!.toLowerCase().includes(this.search.toLowerCase()) ) 
     || (client.lastname!.toLowerCase().includes(this.search.toLowerCase()))
   }):this.clients;
   
  

  
  }
  getTotal(){
 return this.clients.reduce((total, client)=> {return total + client.balancer!},0);
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
      this.flash.show('client delet succesful',{cssClass:'alert-primary',timeout:5000})
      Swal.fire({

        title:'Deleted!',
        text:'Your client file has been deleted.',
        icon:'success',
        timer: 3000
      }
      )
  
    } 
  })
 
}}
