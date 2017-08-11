import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LocalstorageService } from '../../services/local.storage/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];
  numberOfPosts: number;

  constructor(private dataService: DataService, private localstorageService: LocalstorageService,
    private router: Router) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.numberOfPosts = posts.length;
    });
  }


  logout() {
    this.localstorageService.store(LocalstorageService.AUTHENTICATED_STORAGE_KEY, false);
     this.router.navigate(['/login']);
  }

}


interface Post {
  id: number,
  title: string
  body: string
}
