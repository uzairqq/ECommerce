import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {

  }
  ngOnInit() {
    this.service.getPost()
      .subscribe(response => {
        this.posts = response.json();
      }, error => {
        alert('An Unexpected error occured');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement) {
    const post: any = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      }, error => {
        alert('An Unexpected Error Occured');
        console.log(error);
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      }, error => {
        alert('An Unexpected Error Occured');
        console.log(error);
      });
  }

  deletePost(post) {
    this.service.deletePost(post)
      .subscribe(response => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, error => {
        alert('An Unexpected Error Occured');
        console.log(error);
      });
  }
}




