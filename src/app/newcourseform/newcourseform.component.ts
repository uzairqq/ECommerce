import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-newcourseform',
  templateUrl: './newcourseform.component.html',
  styleUrls: ['./newcourseform.component.css']
})
export class NewcourseformComponent {

  form;

  constructor(fb: FormBuilder) {
    fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }
}
