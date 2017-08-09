import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:Post[];
  numberOfPosts:number;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.numberOfPosts = posts.length;
    });
  }

}


interface Post{
  id:number,
  title:string
  body:string
}
