import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from './post.service';



declare let alertify: any;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  providers:[AlertifyService, PostService]
})
export class PostComponent implements OnInit {
  constructor(private http: HttpClient, 
  private alertifyServise:AlertifyService,
  private postService:PostService,
  private activatedRoute: ActivatedRoute){}
  path: string = "https://jsonplaceholder.typicode.com/"
  posts: Post[] = [];
  users: User[] = [];
  filterText: string = '';

  today=new Date(2024,11,15);
  ngOnInit() {
    //console.log(params["userid"])
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userid"]);
    })
  }
  getPosts(userid:string | null) {    
    this.postService.getPosts(userid).subscribe(data=>{
      this.posts=data
    })
  }
  getUsers() {
    this.http.get<User[]>(this.path + "users").subscribe(response => { this.users = response; 
    })
  }
  addToFavovirets(post: Post){
    this.alertifyServise.message("Added to favs: "+post.title)
  }
}


