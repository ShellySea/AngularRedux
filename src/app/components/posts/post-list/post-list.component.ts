import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostsI, PostInterface } from '../state/posts.state';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: PostInterface[];
  constructor(private _store: Store<{ postStore: PostsI }>) { }

  ngOnInit() {
    this._store.select('postStore').subscribe((data: PostsI) => {
      console.log(data)
      this.posts = data.posts
    })
  }

}
