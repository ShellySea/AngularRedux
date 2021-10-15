import { AppState } from './../../../globalStore/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { postSelector } from '../state/posts.selector';
import { PostInterface } from '../state/posts.state';
import { deletePost } from '../state/posts.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: PostInterface[];
  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select(postSelector).subscribe(data => {
      this.posts = data;
    })
  }

  delete(post: PostInterface) {
    this._store.dispatch(deletePost({ postDData: post }));
  }

}
