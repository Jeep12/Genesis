import { Component, OnInit } from '@angular/core';
import { FirestoreUserService } from 'src/app/services/firestore-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db:FirestoreUserService) { }

  ngOnInit(): void {
  }
  prueba(){
    this.db.setUser("jazmin");
  }

}
