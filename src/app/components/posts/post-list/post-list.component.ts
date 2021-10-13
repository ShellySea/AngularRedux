import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postSelector } from '../state/posts.selector';
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
    this._store.select(postSelector).subscribe(data => {
      console.log(data)
      this.posts = data
    })
  }

}
