import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12),
          UsernameValidators.cannotContainSpace
        ], UsernameValidators.shouldBeUnique), // third argument should be for asyncronous validators
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20),
          UsernameValidators.cannotContainSpace
        ]
      )
    })

  });

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }

}
