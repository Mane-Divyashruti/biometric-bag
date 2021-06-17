import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;

  constructor(private readonly fb: FormBuilder) { 
    this.loginform = this.fb.group({
      username: ['', Validators.required],      
      password: ['', Validators.required]
    });
  }
  
  ngOnInit() {
    console.log(this.loginform.getRawValue());
  }

  submitForm() {
    if (this.loginform.valid) {
        console.log(this.loginform.getRawValue());
    } else {
        console.log('There is a problem with the form');
    }
  }
}
