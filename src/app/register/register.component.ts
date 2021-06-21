import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  register: FormGroup;
  hide = true;
  
  ngOnInit() {
    this.register = new FormGroup({
      first_name: new FormControl(null,  Validators.required),
      last_name: new FormControl(null, Validators.required),
      user_phone: new FormControl(null, Validators.required),
      bag_id: new FormControl(null, Validators.required),
      password_group: new FormGroup({
            user_password: new FormControl(null, [Validators.required]),
            user_confirmPassword: new FormControl(null, [Validators.required]),
        	}),
    });
  }
  onSubmit() {
    console.log(this.register);
    console.log(this.register.get('first_name').value);
    }
}

