import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newcourseform',
  templateUrl: './newcourseform.component.html',
  styleUrls: ['./newcourseform.component.css']
})
export class NewcourseformComponent {

  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.getTopics.push(new FormControl(topic.value));
    topic.value = '';
  }

  get getTopics() {
    return this.form.get('topics') as FormArray;
  }

  removeTopic(topic: FormControl) {
    const index = this.getTopics.controls.indexOf(topic);
    this.getTopics.removeAt(index);
  }
}
