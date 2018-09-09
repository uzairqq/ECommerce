import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        console.log(response.json());

      });
  }
}




