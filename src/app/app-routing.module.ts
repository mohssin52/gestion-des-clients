import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclientsComponent } from './component/addclients/addclients.component';
import { ClientsComponent } from './component/clients/clients.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { DetailsclientsComponent } from './component/detailsclients/detailsclients.component';
import { EditclientsComponent } from './component/editclients/editclients.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RegistreComponent } from './component/registre/registre.component';
import { SittingsComponent } from './component/sittings/sittings.component';
import { AuthguardGuard } from './guards/authguard.guard';

const routes: Routes = [
  {path:"", component:DashbordComponent,canActivate:[AuthguardGuard]},
  {path:"login", component:LoginComponent},
  {path:"registre", component:RegistreComponent},
  {path:"client/add", component:AddclientsComponent,canActivate:[AuthguardGuard]},
  {path:"client/edit/:id", component:EditclientsComponent,canActivate:[AuthguardGuard]},
  {path:"client/:id", component:DetailsclientsComponent,canActivate:[AuthguardGuard]},
  {path:"settings", component:SittingsComponent,canActivate:[AuthguardGuard]},
  {path:"**", component:NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthguardGuard]
})
export class AppRoutingModule { }
