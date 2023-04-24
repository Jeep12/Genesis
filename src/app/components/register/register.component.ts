import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreUserService } from 'src/app/services/firestore-user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
  user: FormGroup;

  constructor(private formBuild: FormBuilder, private authService: AuthService,private userFs:FirestoreUserService) {
    this.user = this.formBuild.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      direction: ['', Validators.required],
      birthData: ['', Validators.required],
      numberPhone: ['',Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  register() {
    const email = this.user.value.email;
    const name = this.user.value.name;
    const lastName = this.user.value.lastName;
    const direction = this.user.value.direction;
    const birthData = this.user.value.birthData;
    const numberPhone = this.user.value.numberPhone;
    const password = this.user.value.password;
    const repeatPassword = this.user.value.repeatPassword;
    this.authService.register(email,name,lastName,direction,birthData,numberPhone,password,repeatPassword);

    // this.userFs.setUser(email,name,lastName,direction,birthData,numberPhone,password,repeatPassword);

  }

}
