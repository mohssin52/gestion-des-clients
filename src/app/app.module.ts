import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { ClientsComponent } from './component/clients/clients.component';
import { AddclientsComponent } from './component/addclients/addclients.component';
import { EditclientsComponent } from './component/editclients/editclients.component';
import { DetailsclientsComponent } from './component/detailsclients/detailsclients.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { SittingsComponent } from './component/sittings/sittings.component';
import { LoginComponent } from './component/login/login.component';
import { RegistreComponent } from './component/registre/registre.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AuthClientService } from './service/auth-client.service';
import { ClientService } from './service/client.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule} from 'angularfire2/auth'
import { FormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    ClientsComponent,
    AddclientsComponent,
    EditclientsComponent,
    DetailsclientsComponent,
    NavbarComponent,
    SidebarComponent,
    SittingsComponent,
    LoginComponent,
    RegistreComponent,
    NotFoundComponent,
   
  ],
  imports: [
    FormsModule,
  BrowserModule,
    AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
 AngularFirestoreModule,
 AngularFireAuthModule,
 FlashMessagesModule.forRoot()

    
  ],
  providers: [AuthClientService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
