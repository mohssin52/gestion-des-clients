import { Component, OnInit } from '@angular/core';
import { AuthClientService } from 'src/app/service/auth-client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isLougin:boolean=false
  userLougIn!: string 
  constructor(  private  router :Router,private authClientService:AuthClientService)  {
   
  }


  ngOnInit(): void {
    this.authClientService.getAuth()
    .subscribe(auth =>{
      if(auth) {
       
        this.userLougIn! = auth.email!
this.isLougin=true
console.log(this.userLougIn)
         this.router.navigate(['/'])
      }
    else{
      this.isLougin=false
    }}
      )

  }
  onLougOut(){
    this.authClientService.lougOut()
    this.router.navigate(['/login'])
  }

}
