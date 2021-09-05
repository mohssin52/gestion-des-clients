import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Client } from '../les models/Client';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
 clientCollection!: AngularFirestoreCollection<Client> 
  clienDoc!: AngularFirestoreDocument<Client>;
  constructor(private afs:AngularFirestore) { 
    this.clientCollection= this.afs.collection('clients')
  
  }
  getClient(user:string):Observable<Client[]>{
    return this.afs.collection('clients',ref => ref.where('user','==',user)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
       
      }))
    );
  }
  addClient(client:Client){
    this.clientCollection.add(client)
  }
  deleteClient(  id:string){
     this.clienDoc=  this.clientCollection.doc<Client>(id)
     this.clienDoc.delete()
  }
 
  
  geOneClient(id: string) {
return this.clientCollection.doc(id).valueChanges()
  }

  updateContact(client:Client){
    this.clienDoc=this.clientCollection.doc(client.id)
    return this.clienDoc.update(client)
  }

}
